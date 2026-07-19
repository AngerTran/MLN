import type { Slide } from "../data/slides";
import { TitleSlideView } from "./slides/TitleSlide";
import { SituationSlideView } from "./slides/SituationSlide";
import { TwoColumnDebate } from "./slides/TwoColumnDebate";
import { QuestionsSlideView } from "./slides/QuestionsSlide";
import { TheoryBullets } from "./slides/TheoryBullets";
import { DiagramSlideView } from "./slides/DiagramSlide";
import { ClosingSlideView } from "./slides/ClosingSlide";
import { SourcesSlideView } from "./slides/SourcesSlide";

type Props = {
  slide: Slide;
  direction: "next" | "prev";
};

export function SlideShell({ slide, direction }: Props) {
  return (
    <div className="slide-shell">
      <div className="slide-frame" data-dir={direction} key={slide.title + slide.kind}>
        {renderSlide(slide)}
      </div>
    </div>
  );
}

function renderSlide(slide: Slide) {
  switch (slide.kind) {
    case "title":
      return <TitleSlideView slide={slide} />;
    case "situation":
      return <SituationSlideView slide={slide} />;
    case "debate":
      return <TwoColumnDebate slide={slide} />;
    case "questions":
      return <QuestionsSlideView slide={slide} />;
    case "theory":
      return <TheoryBullets slide={slide} />;
    case "diagram":
      return <DiagramSlideView slide={slide} />;
    case "closing":
      return <ClosingSlideView slide={slide} />;
    case "sources":
      return <SourcesSlideView slide={slide} />;
  }
}
