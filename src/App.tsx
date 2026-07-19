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
  navItems,
  revolutions,
  rolesOfRevolution,
  vnContents,
  vnFeatures,
} from "./data/content";
import { FloatingChips } from "./components/FloatingChips";
import { PillNav } from "./components/PillNav";
import {
  ContentFlow,
  FigureImage,
  HumanCoreDiagram,
  LeapfrogDiagram,
  ModelCompare,
  RevolutionPath,
  RoleCycle,
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
const contentIcons = [Rocket, Microscope, Workflow, Cpu];
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
          <div className="brand-title">Chip & CNH–HĐH VN</div>
          <div className="brand-sub">Đi tắt đón đầu trong kỷ nguyên 4.0</div>
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
            <h1>Công nghiệp hóa, hiện đại hóa và chiến lược bán dẫn</h1>
            <p className="hero-sub">
              Từ ốc vít đến chip — biện luận “đi tắt đón đầu” khi Việt Nam muốn
              trở thành mắt xích trong chuỗi cung ứng toàn cầu
            </p>
            <div className="hero-meta">
              <span className="hero-chip">
                <Cpu /> Session 24 – 26
              </span>
              <span className="hero-chip">
                <Sparkles /> Progress Test · ~10 phút
              </span>
              <span className="hero-chip">
                <HelpCircle /> Tình huống giả định
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
              <BookOpen /> I · Session 24
            </p>
            <h2 className="reveal">Khái quát cách mạng công nghiệp</h2>
            <p className="lead reveal">
              Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất
              trình độ tư liệu lao động, kéo theo thay đổi căn bản phân công lao
              động xã hội và năng suất lao động cao hơn hẳn.
            </p>

            <blockquote className="quote-block reveal">
              “Áp dụng phổ biến những tính năng mới trong kỹ thuật – công nghệ
              vào đời sống xã hội — đó là bản chất của mỗi cuộc cách mạng công
              nghiệp.”
            </blockquote>

            <RevolutionPath />

            <div className="timeline">
              {revolutions.map((r, i) => {
                const Icon = revIcons[i] ?? Cpu;
                return (
                  <article className="timeline-item reveal" key={r.num}>
                    <div className="t-icon">
                      <Icon />
                    </div>
                    <div>
                      <p className="t-period">{r.period}</p>
                      <h3 className="t-title">{r.title}</h3>
                      <p className="t-text">{r.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="section-label reveal" style={{ marginTop: "3rem" }}>
              <Workflow /> Vai trò của CMCN
            </p>
            <h2 className="reveal" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}>
              Ba tác động then chốt tới phát triển
            </h2>
            <RoleCycle />
            <div className="card-grid">
              {rolesOfRevolution.map((item, i) => {
                const Icon = roleIcons[i] ?? Factory;
                return (
                  <article className="info-card reveal" key={item.title}>
                    <div className="card-icon">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>

            <p className="section-label reveal" style={{ marginTop: "3.5rem" }}>
              <Factory /> Công nghiệp hóa
            </p>
            <h2 className="reveal">CNH là gì — và các mô hình trên thế giới</h2>
            <p className="body-text reveal" style={{ marginTop: "1rem" }}>
              Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa
              trên lao động thủ công là chính sang chủ yếu dựa trên lao động máy
              móc, nhằm tạo ra năng suất lao động xã hội cao.
            </p>
            <ModelCompare />
          </div>
        </section>

        <section className="section section-band">
          <div className="wrap">
            <p className="section-label reveal">
              <Globe2 /> II · Session 25
            </p>
            <h2 className="reveal">Tính tất yếu khách quan của CNH–HĐH ở Việt Nam</h2>
            <p className="lead reveal">
              CNH–HĐH không phải “mốt” chính sách, mà là yêu cầu khách quan để
              nâng năng suất lao động, bảo vệ độc lập kinh tế và hội nhập chuỗi
              giá trị toàn cầu.
            </p>
            <p className="body-text reveal" style={{ marginTop: "1.25rem" }}>
              Công nghiệp hóa là quá trình chuyển đổi căn bản, toàn diện các
              hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế – xã hội,
              từ sử dụng sức lao động thủ công là chính sang sử dụng phổ biến sức
              lao động với công nghệ, phương tiện, biện pháp tiên tiến hiện đại,
              dựa trên phát triển công nghiệp và tiến bộ khoa học công nghệ.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="section-label reveal">
              <CheckCircle2 /> Đặc trưng ở Việt Nam
            </p>
            <FigureImage
              src="/images/theory-modern.jpg"
              alt="Đô thị và hiện đại hóa"
              caption="CNH–HĐH gắn hội nhập, kinh tế tri thức và mục tiêu dân giàu, nước mạnh."
            />
            <ul className="feature-list">
              {vnFeatures.map((f) => (
                <li className="reveal" key={f}>
                  <span className="fi">
                    <CheckCircle2 />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <p className="section-label reveal">
              <Layers /> III · Session 26
            </p>
            <h2 className="reveal">Nội dung CNH–HĐH ở Việt Nam</h2>
            <p className="lead reveal">
              Từ tạo lập điều kiện chuyển đổi đến sẵn sàng thích ứng CMCN 4.0 —
              đó là khung nội dung để hiểu chiến lược bán dẫn hôm nay.
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
                      <h3 className="t-title">{c.title}</h3>
                      <p className="t-text">{c.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
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
                  CMCN 4.0 và chuỗi phân đoạn toàn cầu khiến CNH–HĐH không bắt
                  buộc đi tuần tự như thế kỷ 19.
                </p>
              </article>
              <article className="reveal">
                <span className="idx">02</span>
                <p>
                  Đi tắt đón đầu hợp lý khi chọn điểm đột phá có lan tỏa và đầu
                  tư đủ điều kiện — nhân lực, thể chế, hấp thụ công nghệ.
                </p>
              </article>
              <article className="reveal">
                <span className="idx">03</span>
                <p>
                  Với chip: con người là cốt lõi; máy móc và FDI chỉ phát huy khi
                  có năng lực hấp thụ và giữ giá trị gia tăng.
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
