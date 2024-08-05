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

export type WorkDetail = Work & {
  content: string;
};

export async function getWorkDetail(fileName: string): Promise<WorkDetail> {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "works",
    "detail",
    `${fileName}.md`
  );
  const works = await getAllWorks();
  const work = works.find((work) => work.path === fileName);

  if (!work) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");
  return { ...work, content };
}
