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
  description: string;
};

export type WorkDetail = Work & {
  content: string;
};

export async function getFeaturedWorks(): Promise<Work[]> {
  const works = await getAllWorks();
  return works.filter((work) => work.featured);
}

export const getAllWorks = cache(async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "works",
    "works.json"
  );
  const content = await readFile(filePath, "utf-8");
  const posts = JSON.parse(content) as Work[];
  return posts.sort((a, b) => Number(b.year) - Number(a.year));
});

export const getWorkDetail = cache(async (fileName: string): Promise<WorkDetail> => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "works",
    "detail",
    `${fileName}.md`
  );
  const works = await getAllWorks();
  const work = works.find((item) => item.path === fileName);

  if (!work) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }

  const content = await readFile(filePath, "utf-8");
  return { ...work, content };
});
