import type { ClosingSlide as ClosingSlideData } from "../../data/slides";

export function ClosingSlideView({ slide }: { slide: ClosingSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <div className="closing-points">
        {slide.points.map((point, i) => (
          <article className="panel" key={point}>
            <span className="idx">0{i + 1}</span>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{point}</p>
          </article>
        ))}
      </div>
      <p className="thanks">{slide.thanks}</p>
    </div>
  );
}
