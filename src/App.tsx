import { useEffect, useState } from "react";
import {
  ArrowDown,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
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
  answerQuestion1,
  answerQuestion2,
  cmcnDefinition,
  industrializationDef,
  knowledgeEconomy,
  marxQuote,
  navItems,
  revolutions,
  rolesOfRevolution,
  sessionQuestions,
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
          <div className="brand-title">Công nghiệp hóa, hiện đại hóa Việt Nam</div>
          <div className="brand-sub">Mục 6.1.1 – 6.1.2</div>
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
              Từ cách mạng công nghiệp đến công nghiệp hóa, hiện đại hóa trong bối
              cảnh Cách mạng công nghiệp lần thứ tư — gắn chiến lược bán dẫn Việt Nam
            </p>
            <div className="hero-meta">
              <span className="hero-chip">
                <BookOpen /> Mục 6.1.1 – 6.1.2
              </span>
              <span className="hero-chip">
                <Sparkles /> 10–15 phút
              </span>
              <span className="hero-chip">
                <HelpCircle /> Tình huống · biện luận
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
              <Sparkles /> Tình huống
            </p>
            <h2 className="reveal">50.000 kỹ sư bán dẫn và chuỗi cung ứng toàn cầu</h2>
            <div className="story-grid">
              <article className="story-card reveal">
                <p className="kicker">
                  <Cpu /> Tình huống
                </p>
                <h3>Việt Nam tham gia chuỗi chip toàn cầu</h3>
                <p className="body-text">
                  Việt Nam đặt mục tiêu đào tạo 50.000 kỹ sư bán dẫn và tham gia
                  chuỗi cung ứng chip toàn cầu. Bán dẫn là hạ tầng của Cách mạng
                  công nghiệp lần thứ tư, gắn với trí tuệ nhân tạo, điện toán và
                  tự động hóa.
                </p>
                <p className="body-text">
                  Hai quan điểm đối lập: một bên cảnh báo nguy cơ duy ý chí khi
                  công nghiệp phụ trợ còn hạn chế; một bên khẳng định Cách mạng
                  công nghiệp lần thứ tư tạo điều kiện đi tắt đón đầu.
                </p>
              </article>
              <div className="stat-stack reveal">
                <div className="stat">
                  <div className="stat-icon">
                    <GraduationCap />
                  </div>
                  <strong>50.000</strong>
                  <span>kỹ sư bán dẫn — mục tiêu</span>
                </div>
                <div className="stat">
                  <div className="stat-icon">
                    <Link2 />
                  </div>
                  <strong>Mắt xích</strong>
                  <span>thiết kế · sản xuất chip · đóng gói kiểm thử</span>
                </div>
                <div className="stat">
                  <div className="stat-icon">
                    <Brain />
                  </div>
                  <strong>Cách mạng công nghiệp lần thứ tư</strong>
                  <span>trí tuệ nhân tạo · dữ liệu lớn · kết nối</span>
                </div>
              </div>
            </div>

            <div className="debate">
              <article className="debate-card oppose reveal">
                <span className="tag">
                  <MessageCircleWarning /> Phản biện
                </span>
                <h3>Nguy cơ duy ý chí</h3>
                <p>
                  Công nghiệp cơ khí và phụ trợ còn hạn chế. Chiến lược bán dẫn
                  có nguy cơ duy ý chí nếu thiếu nền tảng và lộ trình năng lực.
                </p>
              </article>
              <article className="debate-card support reveal">
                <span className="tag">
                  <Rocket /> Ủng hộ
                </span>
                <h3>Đi tắt đón đầu</h3>
                <p>
                  Chờ hoàn thiện toàn bộ công nghiệp phụ trợ rồi mới phát triển
                  bán dẫn sẽ kéo dài khoảng cách. Cách mạng công nghiệp lần thứ tư
                  tạo điều kiện cho nước đi sau bứt phá có chọn lọc.
                </p>
              </article>
            </div>

            <div className="questions">
              {sessionQuestions.map((q) => (
                <article className="q-card reveal" key={q.id}>
                  <span className="q-num">{q.num}</span>
                  <p>{q.question}</p>
                  <a className="q-jump" href={`#tra-loi-${q.id}`}>
                    Đến phần trả lời
                  </a>
                </article>
              ))}
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
              Cách mạng công nghiệp · mô hình công nghiệp hóa thế giới · tính tất
              yếu và nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối
              cảnh Cách mạng công nghiệp lần thứ tư.
            </p>

            <TheoryAgenda items={theoryAgenda} />

            {/* —— 6.1.1.1 Cách mạng công nghiệp —— */}
            <p className="section-label reveal theory-sublabel">
              <Hammer /> 6.1.1.1 · Cách mạng công nghiệp
            </p>
            <h2 className="reveal theory-h2">Khái niệm và lịch sử các cuộc cách mạng công nghiệp</h2>
            <p className="lead reveal">{cmcnDefinition}</p>

            <blockquote className="quote-block reveal">
              Bản chất: nhảy vọt về chất của tư liệu lao động và thay đổi phân
              công lao động xã hội.
            </blockquote>

            <RevolutionPath />
            <Box61Table />
            <MarxStages />

            <div className="media-row">
              <FigureImage
                src="/images/theory-industry.jpg"
                alt="Công nghiệp và máy móc"
                caption="Cách mạng công nghiệp lần thứ nhất và thứ hai: cơ giới hóa và điện – cơ khí thay đổi tư liệu lao động."
              />
              <FigureImage
                src="/images/theory-ai.jpg"
                alt="Công nghệ số và AI"
                caption="Cách mạng công nghiệp lần thứ ba và thứ tư: công nghệ thông tin, số hóa rồi trí tuệ nhân tạo, Internet kết nối vạn vật, dữ liệu lớn."
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
              <Workflow /> Vai trò của cách mạng công nghiệp đối với phát triển
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

            {/* —— 6.1.1.2 Công nghiệp hóa —— */}
            <p className="section-label reveal theory-sublabel">
              <Factory /> 6.1.1.2 · Công nghiệp hóa
            </p>
            <h2 className="reveal theory-h2">Công nghiệp hóa và các mô hình trên thế giới</h2>
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
            <h2 className="reveal">Vì sao Việt Nam phải công nghiệp hóa, hiện đại hóa?</h2>
            <p className="lead reveal">{vnCnhDef}</p>
            <NecessityPair items={vnNecessity} />
            <p className="body-text reveal nec-close">
              Mỗi bước công nghiệp hóa, hiện đại hóa là một bước tăng cường cơ sở vật chất – kỹ thuật
              của chủ nghĩa xã hội, hoàn thiện quan hệ sản xuất xã hội chủ nghĩa và nâng cao
              đời sống nhân dân — nhân tố quyết định thắng lợi con đường đi lên
              chủ nghĩa xã hội.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="section-label reveal">
              <CheckCircle2 /> Đặc điểm công nghiệp hóa, hiện đại hóa ở Việt Nam
            </p>
            <h2 className="reveal">Bốn đặc trưng</h2>
            <FigureImage
              src="/images/theory-modern.jpg"
              alt="Đô thị và hiện đại hóa"
              caption="Công nghiệp hóa, hiện đại hóa gắn hội nhập, kinh tế tri thức và mục tiêu dân giàu, nước mạnh."
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
            <h2 className="reveal">Nội dung công nghiệp hóa, hiện đại hóa ở Việt Nam</h2>
            <p className="lead reveal">
              Từ tạo lập điều kiện chuyển đổi đến thích ứng Cách mạng công nghiệp
              lần thứ tư — gắn kinh tế tri thức và nhân lực chất lượng cao.
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
              <Cpu /> Thích ứng Cách mạng công nghiệp lần thứ tư
            </p>
            <h2 className="reveal theory-h2">Bốn nhóm nội dung then chốt</h2>
            <Adapt40Grid items={adapt40} />
          </div>
        </section>

        <section className="section" id="bien-luan">
          <div className="wrap">
            <p className="section-label reveal">
              <Lightbulb /> Biện luận
            </p>
            <h2 className="reveal">Trả lời hai câu hỏi</h2>
            <p className="lead reveal">
              Dựa trên đặc điểm Cách mạng công nghiệp lần thứ tư, lý luận đi tắt
              đón đầu, mô hình công nghiệp hóa rút ngắn, kinh tế tri thức và nội
              dung công nghiệp hóa, hiện đại hóa ở Việt Nam.
            </p>

            {/* —— Câu hỏi 01 —— */}
            <article className="answer-block reveal" id="tra-loi-q1">
              <header className="answer-head">
                <span className="answer-badge">Câu hỏi 01</span>
                <h3>{sessionQuestions[0].question}</h3>
              </header>

              <div className="answer-verdict">
                <strong>Kết luận trả lời</strong>
                <p>{answerQuestion1.verdict}</p>
              </div>

              <p className="answer-label">Cơ sở lý thuyết</p>
              <div className="answer-theory-grid">
                {answerQuestion1.theoryHooks.map((hook) => (
                  <div className="answer-theory-card" key={hook.title}>
                    <BookOpen />
                    <h4>{hook.title}</h4>
                    <p>{hook.text}</p>
                  </div>
                ))}
              </div>

              <LeapfrogDiagram />

              <p className="answer-label">Các luận điểm biện luận</p>
              <ol className="answer-steps">
                {answerQuestion1.arguments.map((arg, i) => (
                  <li key={arg.title}>
                    <span className="step-num">0{i + 1}</span>
                    <div>
                      <h4>{arg.title}</h4>
                      <p>{arg.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="answer-close">
                <CheckCircle2 />
                <p>{answerQuestion1.conclusion}</p>
              </div>
            </article>

            {/* —— Câu hỏi 02 —— */}
            <article className="answer-block reveal" id="tra-loi-q2">
              <header className="answer-head">
                <span className="answer-badge warm">Câu hỏi 02</span>
                <h3>{sessionQuestions[1].question}</h3>
              </header>

              <div className="answer-verdict warm">
                <strong>Kết luận trả lời</strong>
                <p>{answerQuestion2.verdict}</p>
              </div>

              <p className="answer-label">Cơ sở lý thuyết</p>
              <div className="answer-theory-grid three">
                {answerQuestion2.theoryHooks.map((hook) => (
                  <div className="answer-theory-card" key={hook.title}>
                    <BookOpen />
                    <h4>{hook.title}</h4>
                    <p>{hook.text}</p>
                  </div>
                ))}
              </div>

              <HumanCoreDiagram />

              <div className="compare-core">
                <article className="compare-side need">
                  <Factory />
                  <h4>Máy móc — điều kiện cần</h4>
                  <p>{answerQuestion2.machineRole}</p>
                </article>
                <article className="compare-side core">
                  <Users />
                  <h4>Con người — yếu tố cốt lõi</h4>
                  <p>{answerQuestion2.humanRole}</p>
                </article>
              </div>

              <div className="answer-close">
                <CheckCircle2 />
                <p>{answerQuestion2.conclusion}</p>
              </div>
            </article>

            <p className="section-label reveal" style={{ marginTop: "3rem" }}>
              <Rocket /> Điều kiện bảo đảm tính khả thi
            </p>
            <div className="card-grid">
              {[
                "Đào tạo gắn chuẩn mực chuyên môn và thực tiễn doanh nghiệp.",
                "Phát triển công nghiệp phụ trợ có chọn lọc theo nhu cầu chuỗi bán dẫn.",
                "Thu hút đầu tư nước ngoài gắn chuyển giao tri thức và liên kết địa phương.",
              ].map((text, i) => {
                const titles = [
                  "Đào tạo",
                  "Phụ trợ chọn lọc",
                  "Đầu tư lan tỏa",
                ];
                const Icon = pillarIcons[i];
                return (
                  <article className="info-card reveal" key={titles[i]}>
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <h3>{titles[i]}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-alt closing" id="ket-luan">
          <div className="wrap">
            <p className="section-label reveal">
              <CheckCircle2 /> Kết luận
            </p>
            <h2 className="reveal">Hai điểm then chốt</h2>
            <div className="closing-points">
              <article className="reveal">
                <span className="idx">01</span>
                <p>
                  Công nghiệp hóa, hiện đại hóa không bắt buộc tuân trình tự thế
                  kỷ 19. Cách mạng công nghiệp lần thứ tư và lý luận đi tắt đón đầu
                  cho phép lựa chọn mắt xích đột phá, đồng thời củng cố nền tảng —
                  phù hợp chiến lược của Việt Nam.
                </p>
              </article>
              <article className="reveal">
                <span className="idx">02</span>
                <p>
                  Trong phát triển bán dẫn, yếu tố cốt lõi là nguồn nhân lực chất
                  lượng cao. Máy móc là điều kiện cần; nhân lực quyết định hấp thụ
                  công nghệ và giữ giá trị gia tăng.
                </p>
              </article>
            </div>

            <p className="thanks reveal">
              Cảm ơn quý thầy cô và các bạn <Sparkles />
            </p>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        Công nghiệp hóa, hiện đại hóa ở Việt Nam · Kinh tế chính trị Mác – Lênin
      </footer>
    </>
  );
}
