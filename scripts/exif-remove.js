// @ts-check

import ExifTransformer from "exif-be-gone";
import { createReadStream } from "node:fs";
import { writeFile } from "node:fs/promises";
import { WritableStream } from "memory-streams";

const files = process.argv.slice(2);

for (const file of files) {
  const reader = createReadStream(file);
  const writer = new WritableStream();

  reader.pipe(new ExifTransformer()).pipe(writer);

  writer.once("finish", () => {
    writeFile(file, writer.toBuffer())
  })
}
