import type { TitleSlide as TitleSlideData } from "../../data/slides";

export function TitleSlideView({ slide }: { slide: TitleSlideData }) {
  return (
    <div className="title-slide">
      <span className="eyebrow">{slide.eyebrow}</span>
      <h1>{slide.title}</h1>
      <div className="title-accent" />
      <p className="lead">{slide.subtitle}</p>
      <div className="meta-row">
        {slide.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
