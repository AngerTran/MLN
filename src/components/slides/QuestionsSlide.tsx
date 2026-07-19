import type { QuestionsSlide as QuestionsSlideData } from "../../data/slides";

export function QuestionsSlideView({ slide }: { slide: QuestionsSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <div className="question-list">
        {slide.items.map((item) => (
          <article className="panel question-card" key={item.num}>
            <span className="q-num">{item.num}</span>
            <p style={{ margin: 0, lineHeight: 1.55 }}>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
