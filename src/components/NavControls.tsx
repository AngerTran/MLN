type Props = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export function NavControls({ current, total, onPrev, onNext }: Props) {
  return (
    <div className="nav-row">
      <button
        type="button"
        className="nav-btn"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Slide trước"
      >
        ← Trước
      </button>

      <div style={{ textAlign: "center" }}>
        <div className="slide-counter">
          {current + 1} / {total}
        </div>
        <div className="hint">← → hoặc Space</div>
      </div>

      <button
        type="button"
        className="nav-btn"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Slide sau"
      >
        Sau →
      </button>
    </div>
  );
}
