import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { LucideIcon } from "lucide-react";

type NavItem = { id: string; label: string };

type Props = {
  items: NavItem[];
  active: string;
  onNavigate: (id: string) => void;
  icons: Record<string, LucideIcon>;
  scrolled: boolean;
};

const accentBySection: Record<string, string> = {
  "mo-dau": "#1b4d3e",
  "tinh-huong": "#2a6b56",
  "ly-thuyet": "#165566",
  "bien-luan": "#c4782b",
  "ket-luan": "#2f6f55",
};

export function PillNav({
  items,
  active,
  onNavigate,
  icons,
  scrolled,
}: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  const measure = useCallback(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    if (!list || !item) return;

    setPill({
      left: item.offsetLeft,
      width: item.offsetWidth,
      ready: true,
    });
  }, [active]);

  useLayoutEffect(() => {
    measure();
    // Remeasure after layout/fonts settle
    const t = window.setTimeout(measure, 50);
    return () => window.clearTimeout(t);
  }, [measure, scrolled, items]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const color = accentBySection[active] ?? "#1b4d3e";

  return (
    <ul
      ref={listRef}
      className={`pill-nav${scrolled ? " is-scrolled" : ""}`}
      data-active={active}
    >
      <span
        className={`pill-slider${pill.ready ? " ready" : ""}`}
        style={{
          left: pill.left,
          width: pill.width,
          backgroundColor: color,
        }}
        aria-hidden
      />
      {items.map((item) => {
        const Icon = icons[item.id];
        const isActive = active === item.id;
        return (
          <li
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
          >
            <a
              href={`#${item.id}`}
              className={isActive ? "active" : undefined}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
                const el = document.getElementById(item.id);
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${item.id}`);
              }}
            >
              {Icon ? <Icon /> : null}
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
