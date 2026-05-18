"use client";

import { useMountStore } from "@/stores/mount";
import { useEffect, useState } from "react";

export function useDelayedReveal(mountedDelay = 2200, unmountedDelay = 2500) {
  const mounted = useMountStore((state) => state.mounted);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => setIsRevealed(true),
      mounted ? mountedDelay : unmountedDelay
    );
    return () => clearTimeout(timeout);
  }, [mounted, mountedDelay, unmountedDelay]);

  return isRevealed;
}
