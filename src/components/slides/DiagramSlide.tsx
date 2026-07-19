import type { DiagramSlide as DiagramSlideData } from "../../data/slides";

export function DiagramSlideView({ slide }: { slide: DiagramSlideData }) {
  return (
    <div>
      <span className="eyebrow">{slide.eyebrow}</span>
      <h2>{slide.title}</h2>
      <p className="lead" style={{ marginTop: 0, maxWidth: "62ch" }}>
        {slide.lead}
      </p>
      <div className="diagram">
        <div className="diagram-core">
          <h3>{slide.core.title}</h3>
          <p>{slide.core.text}</p>
        </div>
        <div className="diagram-row">
          {slide.nodes.map((node) => (
            <article className="panel diagram-node" key={node.title}>
              <h3>{node.title}</h3>
              <p>{node.text}</p>
            </article>
          ))}
        </div>
        <p className="flow-note">{slide.note}</p>
      </div>
    </div>
  );
}
