"use client";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose max-w-none lg:prose-xl mb-20"
      remarkPlugins={[remarkGfm]}
      components={{
        img: (image) => (
          <Image
            className="object-cover w-full max-h-60"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
