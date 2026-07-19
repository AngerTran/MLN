export type SlideKind =
  | "title"
  | "situation"
  | "debate"
  | "questions"
  | "theory"
  | "diagram"
  | "closing"
  | "sources";

export interface TitleSlide {
  kind: "title";
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: string[];
}

export interface SituationSlide {
  kind: "situation";
  eyebrow: string;
  title: string;
  lead: string;
  bullets: string[];
  aside: { label: string; value: string; note: string }[];
}

export interface DebateSlide {
  kind: "debate";
  eyebrow: string;
  title: string;
  oppose: { label: string; body: string; quote: string };
  support: { label: string; body: string; quote: string };
}

export interface QuestionsSlide {
  kind: "questions";
  eyebrow: string;
  title: string;
  items: { num: string; text: string }[];
}

export interface TheorySlide {
  kind: "theory";
  eyebrow: string;
  title: string;
  bullets: string[];
  asideTitle?: string;
  aside?: { label: string; text: string }[];
}

export interface DiagramSlide {
  kind: "diagram";
  eyebrow: string;
  title: string;
  lead: string;
  core: { title: string; text: string };
  nodes: { title: string; text: string }[];
  note: string;
}

export interface ClosingSlide {
  kind: "closing";
  eyebrow: string;
  title: string;
  points: string[];
  thanks: string;
}

export interface SourcesSlide {
  kind: "sources";
  eyebrow: string;
  title: string;
  sources: string[];
  note: string;
}

export type Slide =
  | TitleSlide
  | SituationSlide
  | DebateSlide
  | QuestionsSlide
  | TheorySlide
  | DiagramSlide
  | ClosingSlide
  | SourcesSlide;

export const slides: Slide[] = [
  {
    kind: "title",
    eyebrow: "Kinh tế chính trị Mác – Lênin · Chương 6",
    title: "CNH–HĐH & chiến lược bán dẫn Việt Nam",
    subtitle:
      "Biện luận “đi tắt đón đầu” trong bối cảnh Cách mạng công nghiệp 4.0 — từ tình huống giả định 50.000 kỹ sư chip.",
    meta: ["Buổi thuyết trình ~10 phút", "Progress Test · Session 6.1"],
  },
  {
    kind: "situation",
    eyebrow: "Tình huống giả định",
    title: "Việt Nam muốn vào chuỗi chip toàn cầu",
    lead:
      "Chính phủ đặt mục tiêu đào tạo 50.000 kỹ sư bán dẫn và trở thành mắt xích quan trọng cạnh các ông lớn như Nvidia, Intel.",
    bullets: [
      "Chip không chỉ là sản phẩm — mà là hạ tầng của CMCN 4.0: AI, điện toán, tự động hóa.",
      "Chuỗi cung ứng toàn cầu phân đoạn: thiết kế → sản xuất (fab) → đóng gói / kiểm thử (OSAT).",
      "Câu hỏi trung tâm: nhảy vào mắt xích cao có phải duy ý chí khi phụ trợ còn yếu?",
    ],
    aside: [
      {
        label: "Mục tiêu",
        value: "50.000",
        note: "kỹ sư bán dẫn",
      },
      {
        label: "Định vị",
        value: "Mắt xích",
        note: "trong chuỗi chip toàn cầu",
      },
    ],
  },
  {
    kind: "debate",
    eyebrow: "Hai luồng ý kiến",
    title: "Ốc vít trước, hay chip trước?",
    oppose: {
      label: "Phản biện",
      body: "Cơ khí còn yếu, ốc vít chưa chuẩn, công nghiệp phụ trợ lẹt đẹt. Nhảy vào chip — thứ khó nhất thế giới — là nóng vội.",
      quote: "“Đây có phải tư duy duy ý chí không?”",
    },
    support: {
      label: "Ủng hộ",
      body: "Nếu cứ đợi xong ốc vít mới làm chip thì mãi đi sau. CMCN 4.0 mở cửa sổ nhảy vọt cho nước đi sau.",
      quote: "“Đi tắt đón đầu là có cơ sở.”",
    },
  },
  {
    kind: "questions",
    eyebrow: "Yêu cầu phân tích",
    title: "Hai câu hỏi cần trả lời",
    items: [
      {
        num: "01",
        text: "Dựa trên đặc điểm CMCN 4.0 và lý luận “đi tắt đón đầu”, vì sao CNH–HĐH hôm nay không nhất thiết tuân trình tự tuần tự như thế kỷ 19?",
      },
      {
        num: "02",
        text: "Vai trò nguồn nhân lực chất lượng cao trong tình huống chip? Yếu tố cốt lõi là máy móc hay con người?",
      },
    ],
  },
  {
    kind: "theory",
    eyebrow: "Lý thuyết 6.1.1",
    title: "CMCN và công nghiệp hóa",
    bullets: [
      "Cách mạng công nghiệp là bước nhảy của lực lượng sản xuất: công cụ, năng lượng, tổ chức lao động và tri thức.",
      "Mỗi lần CMCN mở ra mô hình tăng trưởng mới — không chỉ “thêm máy”, mà đổi cấu trúc kinh tế.",
      "Công nghiệp hóa: chuyển từ nông nghiệp / thủ công sang công nghiệp – dịch vụ hiện đại, nâng năng suất lao động xã hội.",
      "Hiện đại hóa gắn CNH với khoa học – công nghệ tiên tiến và hội nhập quốc tế.",
    ],
    asideTitle: "Gợi nhớ",
    aside: [
      {
        label: "Lực lượng SX",
        text: "Con người + tư liệu sản xuất + tri thức khoa học.",
      },
      {
        label: "CNH–HĐH",
        text: "Không tách rời; là một quá trình thống nhất ở Việt Nam.",
      },
    ],
  },
  {
    kind: "theory",
    eyebrow: "Lý thuyết 6.1.2",
    title: "Tất yếu khách quan của CNH–HĐH ở VN",
    bullets: [
      "Nâng năng suất lao động — điều kiện vật chất để phát triển bền vững và cải thiện đời sống.",
      "Bảo vệ độc lập, tự chủ kinh tế trong hội nhập: tránh bị kẹt ở đáy chuỗi giá trị.",
      "Hội nhập kinh tế quốc tế đòi hỏi năng lực cạnh tranh dựa trên công nghệ và nhân lực.",
      "Nội dung: hiện đại hóa cơ cấu kinh tế, phát triển công nghiệp then chốt, gắn tăng trưởng với tiến bộ xã hội.",
    ],
    asideTitle: "Không phải “mốt”",
    aside: [
      {
        label: "Khách quan",
        text: "Do quy luật phát triển lực lượng sản xuất và yêu cầu hội nhập.",
      },
      {
        label: "Chủ động",
        text: "Chính sách chọn điểm đột phá — nhưng phải có lộ trình năng lực.",
      },
    ],
  },
  {
    kind: "theory",
    eyebrow: "Cách mạng công nghiệp 4.0",
    title: "Vì sao cửa sổ nhảy vọt mở ra?",
    bullets: [
      "Số hóa, AI, dữ liệu lớn, kết nối IoT — tri thức và mạng lưới lan truyền nhanh hơn thế kỷ 19.",
      "Chip / phần mềm / dữ liệu là nền tảng xuyên ngành, không chỉ một “ngành phụ”.",
      "Chuỗi cung ứng phân đoạn toàn cầu: nước đi sau có thể chiếm một mắt xích mà chưa cần làm hết hệ sinh thái.",
      "Chi phí tiếp cận tri thức giảm → cơ hội đi tắt có thật, nhưng cửa sổ hẹp và cạnh tranh khốc liệt.",
    ],
    asideTitle: "Khác thế kỷ 19",
    aside: [
      {
        label: "Trước đây",
        text: "Tri thức & vốn lan chậm → CNH gần như tuyến tính: cơ khí → luyện kim → điện…",
      },
      {
        label: "Hôm nay",
        text: "Có thể chọn điểm đột phá công nghệ cao song song với nâng nền tảng.",
      },
    ],
  },
  {
    kind: "theory",
    eyebrow: "Đi tắt đón đầu",
    title: "Nhảy vọt có điều kiện — không phải duy ý chí",
    bullets: [
      "Đi tắt đón đầu: nước đi sau bỏ qua một số bậc trung gian nhờ tiếp thu công nghệ, tri thức, thể chế mới.",
      "Không đồng nghĩa “bỏ qua nền tảng”: là đổi thứ tự ưu tiên và làm song song.",
      "Điều kiện: nhân lực, thể chế, hấp thụ FDI có lan tỏa, hạ tầng — thiếu thì đúng là nóng vội.",
      "Điểm đột phá phải có lan tỏa: bán dẫn kéo theo phụ trợ, chuẩn chất lượng, hệ sinh thái đào tạo.",
    ],
    asideTitle: "Ranh giới",
    aside: [
      {
        label: "Duy ý chí",
        text: "Hô khẩu hiệu chip, không lộ trình năng lực.",
      },
      {
        label: "Đúng hướng",
        text: "Chọn mắt xích khả thi + đầu tư nhân lực có hệ thống.",
      },
    ],
  },
  {
    kind: "theory",
    eyebrow: "Trả lời câu 1",
    title: "CNH hôm nay không bắt buộc tuần tự cũ",
    bullets: [
      "Thế kỷ 19: CNH gắn máy hơi nước / cơ khí; trình tự tuyến tính vì không có chuỗi toàn cầu phân đoạn.",
      "CMCN 4.0 cho phép chiếm mắt xích (thiết kế, OSAT, kiểm thử, nhân lực kỹ sư) trước khi hoàn thiện mọi “ốc vít”.",
      "Chiến lược VN: chip là đòn bẩy — không thay thế phụ trợ, mà kéo chuẩn mực và liên kết FDI lên.",
      "“Đợi xong ốc vít mới làm chip” = tự khóa mình ở đuôi chuỗi giá trị trong kỷ nguyên số.",
    ],
    asideTitle: "Khẩu hiệu then chốt",
    aside: [
      {
        label: "Không phải",
        text: "Bỏ ốc vít để mơ chip.",
      },
      {
        label: "Mà là",
        text: "Làm chip để kéo phụ trợ + nhân lực lên cùng lúc.",
      },
    ],
  },
  {
    kind: "diagram",
    eyebrow: "Trả lời câu 2",
    title: "Cốt lõi là con người — không phải máy",
    lead:
      "Chip là ngành tri thức–cường độ cao. Máy móc và FDI là điều kiện cần; nguồn nhân lực chất lượng cao là điều kiện đủ để hấp thụ công nghệ và giữ giá trị gia tăng.",
    core: {
      title: "Nguồn nhân lực chất lượng cao",
      text: "Kỹ sư · kỹ thuật viên · hệ sinh thái đào tạo – doanh nghiệp",
    },
    nodes: [
      {
        title: "Máy móc / vốn / FDI",
        text: "Điều kiện cần: mua được thiết bị, thu hút nhà máy — nhưng không tự tạo năng lực cạnh tranh.",
      },
      {
        title: "Hấp thụ & giữ giá trị",
        text: "Chỉ con người mới thiết kế IC, vận hành quy trình, R&D và lan tỏa tri thức vào phụ trợ.",
      },
    ],
    note: "Mục tiêu 50.000 kỹ sư = đầu tư vào lực lượng sản xuất hiện đại đúng nghĩa CNH–HĐH thời 4.0.",
  },
  {
    kind: "theory",
    eyebrow: "Phản biện lại phản biện",
    title: "Khi nào là nóng vội — và cách tránh",
    bullets: [
      "Phản biện đúng nếu: chỉ slogan, không đào tạo, không chuẩn phụ trợ chọn lọc, FDI lắp ráp thuần túy.",
      "Tránh nóng vội bằng lộ trình: đào tạo kỹ sư → liên kết trường–doanh nghiệp → chiếm mắt xích khả thi trước.",
      "Phụ trợ không cần “xong hết” mới làm chip — nhưng phải nâng có chọn lọc theo nhu cầu chuỗi bán dẫn.",
      "Thể chế + chất lượng + kiên trì: nhảy vọt là chiến lược dài hơi, không phải pháo hoa một nhiệm kỳ.",
    ],
    asideTitle: "Ba trụ",
    aside: [
      { label: "Đào tạo", text: "50.000 kỹ sư có chương trình, thực tập, chuẩn quốc tế." },
      { label: "Phụ trợ", text: "Chọn lọc: vật liệu, cơ khí chính xác, logistics." },
      { label: "FDI lan tỏa", text: "Ép chuyển giao tri thức, không chỉ thuê lao động giá rẻ." },
    ],
  },
  {
    kind: "closing",
    eyebrow: "Kết luận",
    title: "Ba điểm then chốt",
    points: [
      "CMCN 4.0 + chuỗi phân đoạn toàn cầu → CNH–HĐH không bắt buộc đi tuần tự như thế kỷ 19.",
      "Đi tắt đón đầu hợp lý khi chọn điểm đột phá có lan tỏa và đầu tư điều kiện (nhân lực, thể chế).",
      "Với chip: con người là cốt lõi; máy móc / FDI chỉ phát huy khi có năng lực hấp thụ.",
    ],
    thanks: "Cảm ơn — sẵn sàng Q&A",
  },
  {
    kind: "sources",
    eyebrow: "Tài liệu",
    title: "Nguồn & ghi chú",
    sources: [
      "Giáo trình Kinh tế chính trị Mác – Lênin (2021), khoảng trang 224–259 — Chương 6: CNH–HĐH và hội nhập kinh tế quốc tế.",
      "Nội dung 6.1.1–6.1.2: khái quát CMCN / CNH; tính tất yếu và nội dung CNH–HĐH ở Việt Nam.",
      "Tình huống chip / 50.000 kỹ sư: giả định phục vụ thảo luận học thuật, không phải tuyên bố chính sách chính thức trong bài này.",
    ],
    note: "Phím ← → hoặc Space để chuyển slide · Esc không dùng",
  },
];
