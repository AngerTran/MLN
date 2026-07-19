import type { SituationSlide as SituationSlideData } from "../../data/slides";

export function SituationSlideView({ slide }: { slide: SituationSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <div className="split">
        <div>
          <p className="lead" style={{ marginTop: 0 }}>
            {slide.lead}
          </p>
          <ul className="bullet-list" style={{ marginTop: "1.25rem" }}>
            {slide.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="panel stat-box">
          {slide.aside.map((item) => (
            <div className="stat-item" key={item.label}>
              <span className="tag">{item.label}</span>
              <strong>{item.value}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
