import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Cpu,
  Factory,
  Globe2,
  GraduationCap,
  Hammer,
  Layers,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { box61, industrializationModels, techPaths } from "../data/content";

export function FigureImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="figure reveal">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function TheoryAgenda({
  items,
}: {
  items: { time: string; label: string; tip: string }[];
}) {
  return (
    <div className="viz-panel agenda-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Lộ trình 10–15 phút</span>
        <p className="viz-title">Khung thuyết trình lý thuyết</p>
      </div>
      <ol className="agenda-track">
        {items.map((item) => (
          <li key={item.label}>
            <span className="agenda-time">{item.time}</span>
            <strong>{item.label}</strong>
            <span className="agenda-tip">{item.tip}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RevolutionPath() {
  const steps = [
    { icon: Hammer, label: "1.0", sub: "Hơi nước", tip: "Cơ giới hóa", tone: "a" },
    { icon: Zap, label: "2.0", sub: "Điện", tip: "Điện – cơ khí", tone: "b" },
    { icon: Cpu, label: "3.0", sub: "Công nghệ thông tin", tip: "Tự động hóa", tone: "c" },
    { icon: Brain, label: "4.0", sub: "Trí tuệ nhân tạo", tip: "Thực – ảo", tone: "d" },
  ];

  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Nhìn một phát là hiểu</span>
        <p className="viz-title">Bốn cuộc cách mạng công nghiệp</p>
      </div>
      <div className="rev-path">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div className="rev-path-item" key={s.label}>
              <div className={`rev-node tone-${s.tone}`}>
                <div className="rev-icon">
                  <Icon />
                </div>
                <strong>{s.label}</strong>
                <span>{s.sub}</span>
                <em>{s.tip}</em>
              </div>
              {i < steps.length - 1 && (
                <div className="rev-arrow" aria-hidden>
                  <ArrowRight />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="viz-note">
        Mỗi bước = nhảy vọt về chất của tư liệu lao động → phân công lao động và
        năng suất thay đổi căn bản.
      </p>
    </div>
  );
}

/** Hộp 6.1 — bảng đặc trưng */
export function Box61Table() {
  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Hộp 6.1 · Giáo trình</span>
        <p className="viz-title">Tóm tắt đặc trưng các cuộc cách mạng công nghiệp</p>
      </div>
      <div className="box61-grid">
        {box61.map((row, i) => (
          <article className={`box61-card tone-${["a", "b", "c", "d"][i]}`} key={row.rev}>
            <span className="box61-num">{row.rev}</span>
            <p>{row.feature}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Ba giai đoạn Mác */
export function MarxStages() {
  const stages = [
    { title: "Hiệp tác giản đơn", tip: "Tăng năng suất xã hội" },
    { title: "Công trường thủ công", tip: "Phát triển lực lượng sản xuất" },
    { title: "Đại công nghiệp", tip: "Xã hội hóa lao động" },
  ];

  return (
    <div className="viz-panel reveal marx-panel">
      <div className="viz-head">
        <span className="viz-kicker">C.Mác · Cách mạng công nghiệp lần thứ nhất</span>
        <p className="viz-title">Ba giai đoạn phát triển</p>
      </div>
      <div className="marx-stages">
        {stages.map((s, i) => (
          <div className="marx-step" key={s.title}>
            <span className="marx-idx">0{i + 1}</span>
            <strong>{s.title}</strong>
            <em>{s.tip}</em>
            {i < stages.length - 1 && (
              <span className="marx-arrow" aria-hidden>
                <ArrowRight />
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="viz-note">
        Ba giai đoạn tăng năng suất · củng cố quan hệ sản xuất tư bản chủ nghĩa ·
        chuyển sản xuất nhỏ thủ công phân tán lên sản xuất lớn tập trung hiện đại.
      </p>
    </div>
  );
}

export function RoleCycle() {
  const items = [
    {
      icon: Factory,
      label: "Lực lượng sản xuất",
      text: "Công cụ, năng lượng, tri thức, nhân lực.",
    },
    {
      icon: Workflow,
      label: "Quan hệ sản xuất",
      text: "Sở hữu, phân phối, thể chế.",
    },
    {
      icon: Globe2,
      label: "Quản trị phát triển",
      text: "Chính phủ điện tử, quản trị số.",
    },
  ];

  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Ba mũi nhọn</span>
        <p className="viz-title">Vai trò của cách mạng công nghiệp với phát triển</p>
      </div>
      <div className="role-cycle">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div className="role-node" key={item.label}>
              <div className="role-badge">0{i + 1}</div>
              <div className="role-icon">
                <Icon />
              </div>
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ModelCompare() {
  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">So sánh nhanh</span>
        <p className="viz-title">Ba mô hình công nghiệp hóa</p>
      </div>
      <div className="model-compare">
        {industrializationModels.map((m) => {
          const icons = { a: Layers, b: Factory, c: Rocket } as const;
          const Icon = icons[m.tone];
          return (
            <article className={`model-card tone-${m.tone}`} key={m.title}>
              <div className="model-top">
                <div className="model-icon">
                  <Icon />
                </div>
                <span className="model-pill">{m.time}</span>
              </div>
              <h4>{m.title}</h4>
              <p className="model-sub">{m.subtitle}</p>
              <p className="model-path">{m.path}</p>
              <p className="model-text">{m.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function TechPathsDiagram() {
  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Nhật Bản và các nước công nghiệp mới</span>
        <p className="viz-title">Ba con đường tiếp thu công nghệ</p>
      </div>
      <div className="tech-paths">
        {techPaths.map((p) => (
          <article
            className={`tech-path-card${p.highlight ? " highlight" : ""}`}
            key={p.num}
          >
            <span className="tech-num">{p.num}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
            {p.highlight && (
              <span className="tech-badge">
                <Sparkles /> Gợi ý cho Việt Nam
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export function ContentFlow() {
  const steps = [
    { icon: Rocket, label: "Điều kiện chuyển đổi" },
    { icon: Cpu, label: "Khoa học – công nghệ và kinh tế tri thức" },
    { icon: Workflow, label: "Cơ cấu kinh tế" },
    { icon: Layers, label: "Hoàn thiện quan hệ sản xuất" },
    { icon: Brain, label: "Thích ứng lần thứ tư" },
  ];

  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Lộ trình nội dung</span>
        <p className="viz-title">Công nghiệp hóa, hiện đại hóa ở Việt Nam gồm năm trụ</p>
      </div>
      <div className="content-flow">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div className="flow-step" key={s.label}>
              <div className="flow-body">
                <div className="flow-num">0{i + 1}</div>
                <Icon />
                <span>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flow-link" aria-hidden>
                  <ArrowRight />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function NecessityPair({
  items,
}: {
  items: { num: string; title: string; text: string }[];
}) {
  return (
    <div className="necessity-grid">
      {items.map((item) => (
        <article className="necessity-card reveal" key={item.num}>
          <span className="nec-num">{item.num}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function KnowledgePanel({
  oecd,
  traits,
}: {
  oecd: string;
  traits: string[];
}) {
  return (
    <div className="viz-panel reveal knowledge-panel">
      <div className="viz-head">
        <span className="viz-kicker">Định nghĩa</span>
        <p className="viz-title">Kinh tế tri thức</p>
      </div>
      <blockquote className="knowledge-quote">{oecd}</blockquote>
      <ul className="knowledge-traits">
        {traits.map((t) => (
          <li key={t}>
            <CheckCircle2 />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Adapt40Grid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  const icons = [Lightbulb, Cpu, Globe2, GraduationCap];
  return (
    <div className="adapt40-grid">
      {items.map((item, i) => {
        const Icon = icons[i] ?? Sparkles;
        return (
          <article className="adapt40-card reveal" key={item.title}>
            <div className="adapt40-icon">
              <Icon />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function LeapfrogDiagram() {
  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Trái tim biện luận</span>
        <p className="viz-title">Tuần tự thế kỷ 19 vs Đi tắt đón đầu 4.0</p>
      </div>
      <div className="leap-grid">
        <div className="leap-col old">
          <div className="leap-label">Cũ</div>
          <h4>Thế kỷ 19 — tuyến tính</h4>
          <div className="leap-steps">
            <span>Cơ khí</span>
            <ArrowRight />
            <span>Luyện kim</span>
            <ArrowRight />
            <span>Hóa chất</span>
            <ArrowRight />
            <span>Điện…</span>
          </div>
          <p>Phải đi lần lượt vì tri thức & vốn lan chậm.</p>
        </div>
        <div className="leap-col new">
          <div className="leap-label hot">Mới</div>
          <h4>Cách mạng công nghiệp lần thứ tư — chọn mắt xích</h4>
          <div className="leap-chip-row">
            <span>Thiết kế</span>
            <span>Sản xuất chip</span>
            <span className="hl">Nhân lực</span>
            <span>Đóng gói kiểm thử</span>
          </div>
          <p>
            Chiếm một mắt xích (vd. kỹ sư / đóng gói) song song nâng phụ trợ —
            không bắt buộc “xong ốc vít mới làm chip”.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HumanCoreDiagram() {
  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Câu trả lời 02</span>
        <p className="viz-title">Con người ở trung tâm chuỗi chip</p>
      </div>
      <div className="human-core">
        <div className="hc-side">
          <Factory />
          <strong>Máy móc / đầu tư nước ngoài</strong>
          <span>Điều kiện cần</span>
        </div>
        <div className="hc-arrow" aria-hidden>
          <ArrowRight />
        </div>
        <div className="hc-center">
          <div className="hc-icons">
            <Users />
            <GraduationCap />
          </div>
          <strong>Nhân lực chất lượng cao</strong>
          <span>Điều kiện đủ — hấp thụ và giữ giá trị</span>
        </div>
        <div className="hc-arrow" aria-hidden>
          <ArrowRight />
        </div>
        <div className="hc-side">
          <Globe2 />
          <strong>Giá trị gia tăng</strong>
          <span>Lan tỏa phụ trợ</span>
        </div>
      </div>
    </div>
  );
}
