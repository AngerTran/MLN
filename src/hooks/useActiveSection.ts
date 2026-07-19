import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const idsKey = ids.join("|");

  useEffect(() => {
    const idList = idsKey.split("|").filter(Boolean);
    const elements = idList
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [idsKey]);

  return [active, setActive] as const;
}
