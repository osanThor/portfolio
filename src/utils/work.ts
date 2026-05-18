import { Work } from "@/services/works.service";

export function getWorkThumbnailSrc(path: string) {
  return `/assets/images/works/${path}.png`;
}

export function formatWorkCategories(categories: string[]) {
  return categories.join(" & ");
}

export function getWorkImagePaths(works: Work[]) {
  return works.map((work) => work.path);
}
