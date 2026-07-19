import type { DebateSlide as DebateSlideData } from "../../data/slides";

export function TwoColumnDebate({ slide }: { slide: DebateSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <div className="debate-grid">
        <article className="panel debate-card oppose">
          <span className="tag">{slide.oppose.label}</span>
          <h3>Lo ngại duy ý chí</h3>
          <p>{slide.oppose.body}</p>
          <p className="quote">{slide.oppose.quote}</p>
        </article>
        <article className="panel debate-card support">
          <span className="tag">{slide.support.label}</span>
          <h3>Cửa sổ nhảy vọt</h3>
          <p>{slide.support.body}</p>
          <p className="quote">{slide.support.quote}</p>
        </article>
      </div>
    </div>
  );
}
