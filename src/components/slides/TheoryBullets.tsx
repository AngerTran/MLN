import type { TheorySlide as TheorySlideData } from "../../data/slides";

export function TheoryBullets({ slide }: { slide: TheorySlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <div className={slide.aside ? "split" : undefined}>
        <ul className="bullet-list">
          {slide.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {slide.aside && (
          <aside className="panel stat-box">
            {slide.asideTitle && <span className="tag">{slide.asideTitle}</span>}
            {slide.aside.map((item) => (
              <div className="stat-item" key={item.label}>
                <strong style={{ fontSize: "1.05rem" }}>{item.label}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}
