import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Work = {
  title: string;
  year: string;
  path: string;
  type: string;
  category: string[];
  link: string;
  featured: boolean;
};

export async function getFeaturedWorks(): Promise<Work[]> {
  return getAllWorks() //
    .then((works) => works.filter((work) => work.featured));
}

export const getAllWorks = cache(async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "works",
    "works.json"
  );
  return readFile(filePath, "utf-8")
    .then<Work[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.year > b.year ? -1 : 1)));
});
