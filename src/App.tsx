import { useEffect, useState } from "react";
import {
  ArrowDown,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  FlaskConical,
  Globe2,
  GraduationCap,
  Hammer,
  HelpCircle,
  Layers,
  Lightbulb,
  Link2,
  MessageCircleWarning,
  Microscope,
  Rocket,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  adapt40,
  cmcnDefinition,
  industrializationDef,
  knowledgeEconomy,
  marxQuote,
  navItems,
  revolutions,
  rolesOfRevolution,
  theoryAgenda,
  vnCnhDef,
  vnContents,
  vnFeatures,
  vnNecessity,
} from "./data/content";
import { FloatingChips } from "./components/FloatingChips";
import { PillNav } from "./components/PillNav";
import {
  Adapt40Grid,
  Box61Table,
  ContentFlow,
  FigureImage,
  HumanCoreDiagram,
  KnowledgePanel,
  LeapfrogDiagram,
  MarxStages,
  ModelCompare,
  NecessityPair,
  RevolutionPath,
  RoleCycle,
  TechPathsDiagram,
  TheoryAgenda,
} from "./components/TheoryVisuals";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";

const sectionIds = navItems.map((n) => n.id);

const navIcons = {
  "mo-dau": Sparkles,
  "tinh-huong": HelpCircle,
  "ly-thuyet": BookOpen,
  "bien-luan": Lightbulb,
  "ket-luan": CheckCircle2,
} as const;

const revIcons = [Hammer, Zap, Cpu, Brain];
const roleIcons = [Factory, Workflow, Building2];
const contentIcons = [Rocket, Microscope, Workflow, Layers, Cpu];
const featureIcons = [CheckCircle2, Brain, Building2, Globe2];
const pillarIcons = [GraduationCap, Link2, Globe2];

export default function App() {
  useReveal();
  const [active, setActive] = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`top-chrome${scrolled ? " scrolled" : ""}`}>
        <a className={`brand-block${scrolled ? " scrolled" : ""}`} href="#mo-dau">
          <div className="brand-title">CNH–HĐH Việt Nam</div>
          <div className="brand-sub">Lý thuyết 6.1 · Kỷ nguyên 4.0</div>
        </a>
        <PillNav
          items={navItems}
          active={active}
          onNavigate={setActive}
          icons={navIcons}
          scrolled={scrolled}
        />
      </div>

      <main>
        <section className="hero" id="mo-dau">
          <div className="hero-bg" />
          <FloatingChips />
          <div className="hero-card">
            <div className="hero-badge">
              <BookOpen />
              Kinh tế chính trị Mác – Lênin
            </div>
            <h1>Công nghiệp hóa, hiện đại hóa ở Việt Nam</h1>
            <p className="hero-sub">
              Lý thuyết 6.1.1–6.1.2: từ cách mạng công nghiệp đến CNH–HĐH trong
              kỷ nguyên 4.0 — gắn tình huống chiến lược bán dẫn
            </p>
            <div className="hero-meta">
              <span className="hero-chip">
                <BookOpen /> Mục 6.1.1 – 6.1.2
              </span>
              <span className="hero-chip">
                <Sparkles /> Lý thuyết · 10–15 phút
              </span>
              <span className="hero-chip">
                <HelpCircle /> + Tình huống chip
              </span>
            </div>
            <div className="scroll-cue">
              Cuộn để bắt đầu <ArrowDown />
            </div>
          </div>
        </section>

        <section className="section" id="tinh-huong">
          <div className="wrap">
            <p className="section-label reveal">
              <Sparkles /> Câu chuyện mở đầu
            </p>
            <h2 className="reveal">Giấc mơ 50.000 kỹ sư bán dẫn</h2>
            <div className="story-grid">
              <article className="story-card reveal">
                <p className="kicker">
                  <Cpu /> Tình huống giả định
                </p>
                <h3>Việt Nam muốn vào chuỗi chip toàn cầu</h3>
                <p className="body-text">
                  Chính phủ đặt mục tiêu đào tạo 50.000 kỹ sư bán dẫn và trở thành
                  mắt xích quan trọng cạnh các ông lớn như Nvidia, Intel. Chip
                  không chỉ là một sản phẩm — mà là hạ tầng của CMCN 4.0: AI,
                  điện toán, tự động hóa.
                </p>
                <p className="body-text">
                  Ngay lập tức nổi lên hai luồng ý kiến đối lập: một bên thấy đây
                  là duy ý chí khi phụ trợ còn yếu; một bên tin CMCN 4.0 cho phép
                  nước đi sau nhảy vọt.
                </p>
              </article>
              <div className="stat-stack reveal">
                <div className="stat">
                  <div className="stat-icon">
                    <GraduationCap />
                  </div>
                  <strong>50.000</strong>
                  <span>kỹ sư bán dẫn — mục tiêu giả định</span>
                </div>
                <div className="stat">
                  <div className="stat-icon">
                    <Link2 />
                  </div>
                  <strong>Mắt xích</strong>
                  <span>trong chuỗi chip toàn cầu (design / fab / OSAT)</span>
                </div>
                <div className="stat">
                  <div className="stat-icon">
                    <Brain />
                  </div>
                  <strong>CMCN 4.0</strong>
                  <span>AI · big data · kết nối — nền tảng xuyên ngành</span>
                </div>
              </div>
            </div>

            <div className="debate">
              <article className="debate-card oppose reveal">
                <span className="tag">
                  <MessageCircleWarning /> Phản biện
                </span>
                <h3>Lo ngại duy ý chí</h3>
                <p>
                  Nền công nghiệp cơ khí còn yếu, đến con ốc vít làm chưa chuẩn,
                  công nghiệp phụ trợ lẹt đẹt. Tại sao lại mơ làm thứ khó nhất
                  thế giới là chip?
                </p>
                <p className="quote">
                  “Đây có phải tư duy nóng vội, duy ý chí không?”
                </p>
              </article>
              <article className="debate-card support reveal">
                <span className="tag">
                  <Rocket /> Ủng hộ
                </span>
                <h3>Cửa sổ nhảy vọt</h3>
                <p>
                  Nếu cứ đợi làm xong ốc vít mới làm chip thì mãi mãi đi sau.
                  CMCN 4.0 cho phép các nước đi sau có thể nhảy vọt — đi tắt đón
                  đầu.
                </p>
                <p className="quote">
                  “Không nhảy bây giờ, cửa sổ sẽ đóng.”
                </p>
              </article>
            </div>

            <div className="questions">
              <article className="q-card reveal">
                <span className="q-num">01</span>
                <p>
                  Dựa trên đặc điểm CMCN 4.0 và lý luận “đi tắt đón đầu”, vì sao
                  CNH–HĐH ngày nay không nhất thiết tuân trình tự tuần tự như
                  thế kỷ 19?
                </p>
              </article>
              <article className="q-card reveal">
                <span className="q-num">02</span>
                <p>
                  Vai trò nguồn nhân lực chất lượng cao? Để làm chip, yếu tố cốt
                  lõi là máy móc hay con người?
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section theory-zone" id="ly-thuyet">
          <div className="wrap">
            <p className="section-label reveal">
              <BookOpen /> Lý thuyết · 6.1.1 – 6.1.2
            </p>
            <h2 className="reveal">Công nghiệp hóa, hiện đại hóa ở Việt Nam</h2>
            <p className="lead reveal">
              Khung lý thuyết để thuyết trình 10–15 phút: CMCN → mô hình CNH thế
              giới → tính tất yếu và nội dung CNH–HĐH Việt Nam trong bối cảnh 4.0.
            </p>

            <TheoryAgenda items={theoryAgenda} />

            {/* —— 6.1.1.1 CMCN —— */}
            <p className="section-label reveal theory-sublabel">
              <Hammer /> 6.1.1.1 · Cách mạng công nghiệp
            </p>
            <h2 className="reveal theory-h2">Khái niệm và lịch sử các cuộc CMCN</h2>
            <p className="lead reveal">{cmcnDefinition}</p>

            <blockquote className="quote-block reveal">
              Áp dụng phổ biến những tính năng mới trong kỹ thuật – công nghệ vào
              đời sống xã hội — đó là bản chất của mỗi cuộc cách mạng công nghiệp.
            </blockquote>

            <RevolutionPath />
            <Box61Table />
            <MarxStages />

            <div className="media-row">
              <FigureImage
                src="/images/theory-industry.jpg"
                alt="Công nghiệp và máy móc"
                caption="CMCN 1–2: cơ giới hóa và điện – cơ khí thay đổi tư liệu lao động."
              />
              <FigureImage
                src="/images/theory-ai.jpg"
                alt="Công nghệ số và AI"
                caption="CMCN 3–4: CNTT, số hóa rồi AI · IoT · big data."
              />
            </div>

            <div className="timeline rev-detail">
              {revolutions.map((r, i) => {
                const Icon = revIcons[i] ?? Cpu;
                return (
                  <article className="timeline-item reveal" key={r.num}>
                    <div className="t-icon">
                      <Icon />
                    </div>
                    <div>
                      <p className="t-period">{r.period}</p>
                      <h3 className="t-title">
                        {r.title}
                        <span className="t-core">{r.core}</span>
                      </h3>
                      <p className="t-energy">{r.energy}</p>
                      <p className="t-text">{r.text}</p>
                      <p className="t-mark">{r.mark}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* —— Vai trò —— */}
            <p className="section-label reveal theory-sublabel">
              <Workflow /> Vai trò của CMCN đối với phát triển
            </p>
            <h2 className="reveal theory-h2">Ba tác động then chốt</h2>
            <RoleCycle />
            <div className="card-grid role-detail">
              {rolesOfRevolution.map((item, i) => {
                const Icon = roleIcons[i] ?? Factory;
                return (
                  <article className="info-card reveal" key={item.title}>
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <ul className="card-points">
                      {item.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <blockquote className="quote-block marx-quote reveal">
              <span className="quote-attr">C.Mác</span>
              “{marxQuote}”
            </blockquote>

            {/* —— 6.1.1.2 CNH —— */}
            <p className="section-label reveal theory-sublabel">
              <Factory /> 6.1.1.2 · Công nghiệp hóa
            </p>
            <h2 className="reveal theory-h2">CNH và các mô hình trên thế giới</h2>
            <p className="lead reveal">{industrializationDef}</p>
            <ModelCompare />
            <TechPathsDiagram />
          </div>
        </section>

        <section className="section section-band">
          <div className="wrap">
            <p className="section-label reveal">
              <Globe2 /> 6.1.2.1 · Tính tất yếu
            </p>
            <h2 className="reveal">Vì sao Việt Nam phải CNH–HĐH?</h2>
            <p className="lead reveal">{vnCnhDef}</p>
            <NecessityPair items={vnNecessity} />
            <p className="body-text reveal nec-close">
              Mỗi bước CNH–HĐH là một bước tăng cường cơ sở vật chất – kỹ thuật
              của CNXH, hoàn thiện quan hệ sản xuất xã hội chủ nghĩa và nâng cao
              đời sống nhân dân — nhân tố quyết định thắng lợi con đường đi lên
              chủ nghĩa xã hội.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="section-label reveal">
              <CheckCircle2 /> Đặc điểm CNH–HĐH ở Việt Nam
            </p>
            <h2 className="reveal">Bốn đặc trưng</h2>
            <FigureImage
              src="/images/theory-modern.jpg"
              alt="Đô thị và hiện đại hóa"
              caption="CNH–HĐH gắn hội nhập, kinh tế tri thức và mục tiêu dân giàu, nước mạnh."
            />
            <div className="feature-grid">
              {vnFeatures.map((f, i) => {
                const Icon = featureIcons[i] ?? CheckCircle2;
                return (
                  <article className="feature-card reveal" key={f.title}>
                    <div className="feature-icon">
                      <Icon />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <p className="section-label reveal">
              <Layers /> 6.1.2.2 · Nội dung
            </p>
            <h2 className="reveal">Nội dung CNH–HĐH ở Việt Nam</h2>
            <p className="lead reveal">
              Từ tạo lập điều kiện chuyển đổi đến sẵn sàng thích ứng CMCN 4.0 —
              khung nội dung gắn kinh tế tri thức và nhân lực chất lượng cao.
            </p>
            <ContentFlow />
            <div className="timeline">
              {vnContents.map((c, i) => {
                const Icon = contentIcons[i] ?? Rocket;
                return (
                  <article className="timeline-item reveal" key={c.num}>
                    <div className="t-icon">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="t-title">
                        <span className="t-num-inline">{c.num}</span> {c.title}
                      </h3>
                      <p className="t-text">{c.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <KnowledgePanel
              oecd={knowledgeEconomy.oecd}
              traits={knowledgeEconomy.traits}
            />

            <p className="section-label reveal theory-sublabel">
              <Cpu /> Thích ứng cách mạng công nghiệp 4.0
            </p>
            <h2 className="reveal theory-h2">Bốn nhóm nội dung then chốt</h2>
            <Adapt40Grid items={adapt40} />
          </div>
        </section>

        <section className="section" id="bien-luan">
          <div className="wrap">
            <p className="section-label reveal">
              <Lightbulb /> IV · Biện luận
            </p>
            <h2 className="reveal">Vì sao không bắt buộc tuần tự như thế kỷ 19?</h2>
            <p className="lead reveal">
              Trả lời câu hỏi 01 — gắn đặc điểm CMCN 4.0 với lý luận đi tắt đón
              đầu.
            </p>

            <LeapfrogDiagram />

            <div className="card-grid two" style={{ marginTop: "2rem" }}>
              <article className="info-card reveal">
                <div className="card-icon">
                  <Hammer />
                </div>
                <h3>Thế kỷ 19: tuyến tính</h3>
                <p>
                  Tri thức và vốn lan truyền chậm. CNH gắn máy hơi nước / cơ khí
                  → trình tự gần như tuần tự: cơ khí → luyện kim → hóa chất →
                  điện…
                </p>
              </article>
              <article className="info-card reveal">
                <div className="card-icon svg-warm">
                  <Cpu />
                </div>
                <h3>CMCN 4.0: phân đoạn toàn cầu</h3>
                <p>
                  Chip, AI, phần mềm, dữ liệu là nền tảng xuyên ngành. Chuỗi cung
                  ứng tách thành design / fab / OSAT — nước đi sau có thể chiếm
                  một mắt xích trước khi hoàn thiện mọi “ốc vít”.
                </p>
              </article>
            </div>

            <blockquote className="quote-block reveal">
              Đi tắt đón đầu không phải bỏ qua nền tảng, mà là đổi thứ tự ưu tiên:
              chọn điểm đột phá có lan tỏa (bán dẫn + nhân lực) đồng thời nâng
              phụ trợ — nhảy vọt có điều kiện, không phải duy ý chí.
            </blockquote>

            <p className="body-text reveal" style={{ marginTop: "1.5rem" }}>
              Phản biện “duy ý chí” đúng nếu chỉ hô khẩu hiệu không có lộ trình
              năng lực. Sai nếu hiểu nhảy vọt = nhảy có điều kiện: nhân lực, thể
              chế, FDI có lan tỏa, hạ tầng. Chiến lược Việt Nam không phải “bỏ
              ốc vít làm chip”, mà “làm chip như đòn bẩy kéo phụ trợ và nhân lực
              lên”.
            </p>

            <p className="section-label reveal" style={{ marginTop: "3.5rem" }}>
              <Users /> V · Nhân lực
            </p>
            <h2 className="reveal">Cốt lõi là con người — không phải máy</h2>
            <p className="lead reveal">
              Trả lời câu hỏi 02 — chip là ngành tri thức–cường độ cao.
            </p>

            <HumanCoreDiagram />

            <div className="diagram">
              <div className="diagram-core reveal">
                <div className="core-icon">
                  <Users />
                </div>
                <h3>Nguồn nhân lực chất lượng cao</h3>
                <p>
                  Kỹ sư · kỹ thuật viên · hệ sinh thái đào tạo – doanh nghiệp
                </p>
              </div>
              <div className="diagram-row">
                <article className="info-card reveal">
                  <div className="card-icon">
                    <Factory />
                  </div>
                  <h3>Máy móc / vốn / FDI</h3>
                  <p>
                    Điều kiện cần: mua được thiết bị, thu hút nhà máy — nhưng
                    không tự tạo năng lực cạnh tranh bền vững.
                  </p>
                </article>
                <article className="info-card reveal">
                  <div className="card-icon svg-warm">
                    <FlaskConical />
                  </div>
                  <h3>Hấp thụ & giữ giá trị</h3>
                  <p>
                    Chỉ con người mới thiết kế IC, vận hành quy trình, R&D và lan
                    tỏa tri thức vào công nghiệp phụ trợ.
                  </p>
                </article>
              </div>
            </div>

            <blockquote className="quote-block reveal">
              Mục tiêu 50.000 kỹ sư bán dẫn = đầu tư vào lực lượng sản xuất hiện
              đại đúng nghĩa CNH–HĐH trong kỷ nguyên CMCN 4.0.
            </blockquote>

            <p className="section-label reveal" style={{ marginTop: "3rem" }}>
              <Rocket /> Tránh nóng vội
            </p>
            <div className="card-grid">
              {["Đào tạo", "Phụ trợ chọn lọc", "FDI lan tỏa"].map((title, i) => {
                const Icon = pillarIcons[i];
                const texts = [
                  "Chương trình chuẩn quốc tế, thực tập doanh nghiệp — không chỉ con số trên giấy.",
                  "Nâng vật liệu, cơ khí chính xác, logistics theo nhu cầu chuỗi bán dẫn — không đợi “xong hết” mới bắt đầu.",
                  "Ép chuyển giao tri thức và liên kết địa phương — tránh chỉ thuê lao động giá rẻ.",
                ];
                return (
                  <article className="info-card reveal" key={title}>
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <h3>{title}</h3>
                    <p>{texts[i]}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-alt closing" id="ket-luan">
          <div className="wrap">
            <p className="section-label reveal">
              <CheckCircle2 /> VI · Kết luận
            </p>
            <h2 className="reveal">Ba điểm then chốt</h2>
            <div className="closing-points">
              <article className="reveal">
                <span className="idx">01</span>
                <p>
                  CMCN là nhảy vọt tư liệu lao động; mỗi cuộc đổi cách sản xuất.
                  4.0 lấy tri thức–công nghệ–đổi mới làm động lực — nước đi sau
                  có cửa sổ rút ngắn khoảng cách.
                </p>
              </article>
              <article className="reveal">
                <span className="idx">02</span>
                <p>
                  CNH có nhiều mô hình; Việt Nam học bài rút ngắn của Nhật/NICs —
                  chiến lược công nghệ nhiều tầng, hội nhập và nội lực.
                </p>
              </article>
              <article className="reveal">
                <span className="idx">03</span>
                <p>
                  CNH–HĐH ở VN là tất yếu để xây CSVCKT CNXH. Trong 4.0: thể chế
                  sáng tạo + kinh tế tri thức + nhân lực CLC là then chốt — máy
                  móc/FDI chỉ phát huy khi có năng lực hấp thụ.
                </p>
              </article>
            </div>

            <p className="poem reveal">
              Không phải bỏ ốc vít để mơ chip —
              <br />
              mà làm chip để kéo cả nền tảng lên.
              <br />
              Nhảy vọt chỉ bền khi có người đủ sức giữ lấy nó.
            </p>

            <p className="thanks reveal">
              Cảm ơn — sẵn sàng Q&A <Sparkles />
            </p>

            <ul className="sources reveal">
              <li>
                • Giáo trình Kinh tế chính trị Mác – Lênin (Bộ GDĐT) — Chương 6;
                Session 24–26: CMCN, mô hình CNH, tất yếu & nội dung CNH–HĐH ở
                Việt Nam.
              </li>
              <li>
                • Tình huống 50.000 kỹ sư bán dẫn: giả định phục vụ thảo luận học
                thuật.
              </li>
              <li>
                • Ảnh nền: mạch điện / nhà máy công nghệ (Unsplash) — minh họa
                chủ đề bán dẫn & CNH.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        CNH–HĐH & chiến lược bán dẫn Việt Nam · Kinh tế chính trị Mác – Lênin
      </footer>
    </>
  );
}
