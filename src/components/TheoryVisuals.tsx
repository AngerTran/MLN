import {
  ArrowRight,
  Brain,
  Cpu,
  Factory,
  Globe2,
  GraduationCap,
  Hammer,
  Layers,
  Rocket,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

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

export function RevolutionPath() {
  const steps = [
    { icon: Hammer, label: "1.0", sub: "Hơi nước", tip: "Cơ giới hóa", tone: "a" },
    { icon: Zap, label: "2.0", sub: "Điện", tip: "Điện – cơ khí", tone: "b" },
    { icon: Cpu, label: "3.0", sub: "CNTT", tip: "Tự động hóa", tone: "c" },
    { icon: Brain, label: "4.0", sub: "AI · Data", tip: "Nhảy vọt", tone: "d" },
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

export function RoleCycle() {
  const items = [
    {
      icon: Factory,
      label: "Lực lượng sản xuất",
      text: "Thay đổi công cụ, năng lượng, tri thức.",
    },
    {
      icon: Workflow,
      label: "Quan hệ sản xuất",
      text: "Tất yếu điều chỉnh quan hệ xã hội.",
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
        <span className="viz-kicker">3 mũi nhọn</span>
        <p className="viz-title">Vai trò của CMCN với phát triển</p>
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
  const models = [
    {
      icon: Layers,
      title: "Cổ điển",
      path: "CN nhẹ → mở rộng dần",
      time: "60–80 năm",
      text: "Gắn CMCN lần 1; ít vốn, thu lợi nhanh nhưng lộ trình dài.",
      tone: "a",
    },
    {
      icon: Factory,
      title: "Liên Xô (cũ)",
      path: "Ưu tiên CN nặng",
      time: "Rút ngắn thời gian",
      text: "Tập trung cơ sở vật chất – kỹ thuật to lớn trong thời gian ngắn.",
      tone: "b",
    },
    {
      icon: Rocket,
      title: "Nhật & NICs",
      path: "Tiếp thu + ngành then chốt",
      time: "Đi tắt có chọn lọc",
      text: "Đi sau nhưng rút ngắn nhờ công nghệ, hội nhập và chọn điểm đột phá.",
      tone: "c",
    },
  ];

  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">So sánh nhanh</span>
        <p className="viz-title">Ba mô hình công nghiệp hóa</p>
      </div>
      <div className="model-compare">
        {models.map((m) => {
          const Icon = m.icon;
          return (
            <article className={`model-card tone-${m.tone}`} key={m.title}>
              <div className="model-top">
                <div className="model-icon">
                  <Icon />
                </div>
                <span className="model-pill">{m.time}</span>
              </div>
              <h4>{m.title}</h4>
              <p className="model-path">{m.path}</p>
              <p className="model-text">{m.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ContentFlow() {
  const steps = [
    { icon: Rocket, label: "Điều kiện chuyển đổi" },
    { icon: Cpu, label: "Khoa học – công nghệ" },
    { icon: Workflow, label: "Cơ cấu kinh tế" },
    { icon: Brain, label: "Thích ứng CMCN 4.0" },
  ];

  return (
    <div className="viz-panel reveal">
      <div className="viz-head">
        <span className="viz-kicker">Lộ trình nội dung</span>
        <p className="viz-title">CNH–HĐH ở Việt Nam gồm 4 trụ</p>
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
          <h4>CMCN 4.0 — chọn mắt xích</h4>
          <div className="leap-chip-row">
            <span>Design</span>
            <span>Fab</span>
            <span className="hl">Nhân lực</span>
            <span>OSAT</span>
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
          <strong>Máy / FDI</strong>
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
          <strong>Nhân lực CLC</strong>
          <span>Điều kiện đủ — hấp thụ & giữ giá trị</span>
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
