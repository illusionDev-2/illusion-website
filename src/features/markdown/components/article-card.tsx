import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { summarize } from "@/features/markdown/utils/summarize";

import type { Article } from "@/features/markdown/utils/types";

export type ArticleCardProps = {
  article: Article
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const shortDescription = summarize(article.html, { maxLength: 50 });

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      component="article"
    >
      <CardActionArea
        sx={{ flex: 1 }}
        LinkComponent={Link}
        href={`/blog/${article.slug}`}
      >
        <CardContent>
          <Typography component="h1" variant="h6">{article.title}</Typography>
          <Typography color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
