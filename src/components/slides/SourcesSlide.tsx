import type { SourcesSlide as SourcesSlideData } from "../../data/slides";

export function SourcesSlideView({ slide }: { slide: SourcesSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <ul className="source-list">
        {slide.sources.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>
      <p className="muted" style={{ marginTop: "1.5rem", fontSize: "0.95rem" }}>
        {slide.note}
      </p>
    </div>
  );
}
