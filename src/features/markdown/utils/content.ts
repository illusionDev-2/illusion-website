import { join, parse, resolve } from "node:path";
import { readFile, readdir, stat } from "node:fs/promises";
import { asyncFilter, asyncMap, asyncToArray, execPipe, filter, map, reduce, toArray } from "iter-tools";
import type { Article, Path, Slug } from "@/features/markdown/utils/types";
import { ArticleFrontMatter } from "@/features/markdown/utils/types";
import matter from "gray-matter";
import { toHtml } from "@/features/markdown/utils/html";
import { summarize } from "./summarize";
import simpleGit, { DefaultLogFields, LogResult } from "simple-git";

const dev = process.env.NODE_ENV === "development";

export type FileTimestamp = {
  createdTimestamp: number,
  updatedTimestamp: number
};

const getFileTimestamp = async (path: Path): Promise<FileTimestamp> => {
  const stats = await stat(path);
  const fsCreatedTimestamp = stats.birthtimeMs || stats.ctimeMs;
  const fsUpdatedTimestamp = stats.mtimeMs;

  const git = simpleGit();
  const log = await new Promise<LogResult<DefaultLogFields>>((resolve, reject) => {
    git.log({ file: path }, (err, log) => {
      if (err) {
        reject(err);
      } else {
        resolve(log);
      }
    });
  });
  const gitCreatedTimestamp = execPipe(
    log.all,
    map(l => new Date(l.date).getTime()),
    reduce(NaN, (acc, v) => v < acc ? v : acc)
  );
  const gitUpdatedTimestamp = log.latest?.date && new Date(log.latest.date).getTime();

  const createdTimestamp = Number.isNaN(gitCreatedTimestamp) ? fsCreatedTimestamp : gitCreatedTimestamp;
  const updatedTimestamp = gitUpdatedTimestamp || fsUpdatedTimestamp;

  return {
    createdTimestamp,
    updatedTimestamp
  }
};

export class ContentsDir {
  static readonly #CONTENTS_BASE_DIR = join(process.cwd(), "./src/contents")

  readonly #contentDirPath: Path;

  constructor(dirPath: Path) {
    this.#contentDirPath = join(ContentsDir.#CONTENTS_BASE_DIR, dirPath);
  }

  async existsSlug(slug: Slug): Promise<boolean> {
    const slugs = await this.getAllSlugs();

    return slugs.includes(slug);
  }

  async getAllSlugs(): Promise<Slug[]> {
    return await execPipe(
      await readdir(this.#contentDirPath),
      map(f => parse(f)),
      filter(p => p.ext === ".md"),
      map(p => this.getArticle(p.name)),
      asyncFilter(a => dev || !a.draft),
      asyncMap(a => a.slug),
      asyncToArray
    );
  }

  async getAllArticles(): Promise<Article[]> {
    return await execPipe(
      await this.getAllSlugs(),
      map(s => this.getArticle(s)),
      asyncToArray
    );
  }

  async getArticle(slug: Slug): Promise<Article> {
    const path = join(this.#contentDirPath, `${slug}.md`);
    const content = await readFile(path, "utf8");
    const parsed = matter(content);
    const context = {
      errors: []
    };

    if (!ArticleFrontMatter(parsed.data, context)) {
      throw context;
    }

    const git = simpleGit(process.cwd());

    const log: LogResult<DefaultLogFields> = await new Promise((resolve, reject) => {
      git.log({ file: "package.json" }, (err, log) => err ? reject(err) : resolve(log));
    });

    const html = await toHtml(parsed.content);

    return {
      slug,
      draft: parsed.data.draft ?? false,
      title: parsed.data.title,
      description: summarize(html, {
        maxLength: 100
      }),
      html,
      ...await getFileTimestamp(path)
    };
  }
}
