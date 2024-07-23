"use client";

import { useEffect, useState } from "react";

export default function PageAnimationContainer() {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    if (mounted) return;
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full ease-in-out ${
        mounted ? "h-0 transition-all" : "h-[70vh]"
      }`}
    />
  );
}
