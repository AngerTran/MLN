export const navItems = [
  { id: "mo-dau", label: "Mở đầu" },
  { id: "tinh-huong", label: "Tình huống" },
  { id: "ly-thuyet", label: "Lý thuyết" },
  { id: "bien-luan", label: "Biện luận" },
  { id: "ket-luan", label: "Kết luận" },
];

/** Định nghĩa CMCN — giáo trình 6.1.1.1 */
export const cmcnDefinition =
  "Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ, kéo theo sự thay đổi căn bản về phân công lao động xã hội cũng như tạo bước phát triển năng suất lao động cao hơn hẳn nhờ áp dụng phổ biến những tính năng mới vào đời sống xã hội.";

export const revolutions = [
  {
    num: "01",
    title: "CMCN lần thứ nhất",
    period: "Giữa thế kỷ XVIII – giữa XIX · Anh",
    core: "Cơ giới hóa",
    energy: "Nước & hơi nước",
    text: "Khởi phát từ dệt vải; chuyển lao động thủ công sang máy móc. Phát minh then chốt: thoi bay, xe kéo sợi Jenny, máy dệt Cartwright, máy hơi nước James Watt.",
    mark: "C.Mác: hiệp tác giản đơn → công trường thủ công → đại công nghiệp.",
  },
  {
    num: "02",
    title: "CMCN lần thứ hai",
    period: "Nửa cuối XIX – đầu XX",
    core: "Điện – cơ khí",
    energy: "Điện & động cơ điện",
    text: "Dây chuyền chuyên môn hóa cao; sản xuất cơ khí → điện–cơ khí và tự động hóa cục bộ. Ô tô, điện thoại, quản lý dây chuyền Ford–Taylor.",
    mark: "Tiếp nối CMCN 1 với điện, xăng dầu, động cơ đốt trong.",
  },
  {
    num: "03",
    title: "CMCN lần thứ ba",
    period: "Thập niên 1960 – cuối XX",
    core: "Tự động hóa",
    energy: "CNTT & máy tính",
    text: "Chất bán dẫn, siêu máy tính, PC, Internet. Hệ thống mạng, thiết bị số và robot công nghiệp.",
    mark: "Hạ tầng điện tử – máy tính – số hóa xúc tác toàn bộ.",
  },
  {
    num: "04",
    title: "CMCN lần thứ tư",
    period: "Hannover 2011 · Kế hoạch Đức 2012",
    core: "Thông minh · thực–ảo",
    energy: "IoT · AI · big data",
    text: "Hình thành trên cách mạng số và Internet of Things. Công nghệ đột phá: trí tuệ nhân tạo, big data, in 3D…",
    mark: "Liên kết thế giới thực và ảo để làm việc thông minh, hiệu quả nhất.",
  },
];

/** Hộp 6.1 — đặc trưng tóm tắt */
export const box61 = [
  {
    rev: "Lần 1",
    feature: "Năng lượng nước và hơi nước → cơ khí hóa sản xuất",
  },
  {
    rev: "Lần 2",
    feature: "Năng lượng điện và động cơ điện → dây chuyền sản xuất hàng loạt",
  },
  {
    rev: "Lần 3",
    feature: "Công nghệ thông tin và máy tính → tự động hóa sản xuất",
  },
  {
    rev: "Lần 4",
    feature: "Liên kết thế giới thực và ảo → công việc thông minh, hiệu quả nhất",
  },
];

export const rolesOfRevolution = [
  {
    title: "Thúc đẩy lực lượng sản xuất",
    text: "Đổi tư liệu lao động, nhân lực và đối tượng lao động. 4.0 làm suy giảm lợi thế truyền thống (nhân công rẻ, tài nguyên). Nước đi sau có cửa sổ tiếp cận thành tựu mới, rút ngắn khoảng cách.",
    points: [
      "Máy móc → máy tính → tự động hóa; tài sản cố định thường xuyên đổi mới",
      "Đòi hỏi và đồng thời tạo điều kiện phát triển nguồn nhân lực",
      "Của cải phụ thuộc ngày càng nhiều vào ứng dụng khoa học vào sản xuất (C.Mác)",
    ],
  },
  {
    title: "Hoàn thiện quan hệ sản xuất",
    text: "Nhảy vọt LLSX tất yếu dẫn đến điều chỉnh sở hữu, phân phối, thể chế và quản trị. 4.0 nâng đời sống nhưng cũng tăng rủi ro thất nghiệp, bất bình đẳng.",
    points: [
      "Sản xuất lớn thay thế sản xuất nhỏ phân tán; đa dạng hóa sở hữu",
      "Hoàn thiện thể chế kinh tế thị trường và hội nhập",
      "Điều chỉnh chính sách phân phối thu nhập và an sinh xã hội",
    ],
  },
  {
    title: "Đổi mới quản trị phát triển",
    text: "Chính phủ điện tử, đô thị thông minh; doanh nghiệp số hóa quản trị. Cạnh tranh bằng tri thức–công nghệ–đổi mới sáng tạo.",
    points: [
      "Kết nối toàn cầu → “thế giới phẳng”; kinh tế tri thức",
      "Quản trị nhà nước qua hạ tầng số; người dân tham gia hoạch định rộng hơn",
      "Doanh nghiệp: chiến lược dựa công nghệ, trí tuệ, sáng tạo",
    ],
  },
];

export const marxQuote =
  "Theo đà phát triển của đại công nghiệp, việc tạo ra của cải sẽ trở nên ít phụ thuộc vào thời gian lao động và số lượng lao động đã chi phí mà phụ thuộc vào việc ứng dụng khoa học ấy vào sản xuất.";

export const industrializationDef =
  "Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội dựa chủ yếu trên lao động bằng máy móc nhằm tạo ra năng suất lao động xã hội cao.";

export const industrializationModels = [
  {
    title: "Mô hình cổ điển",
    subtitle: "Anh & tư bản cổ điển",
    path: "CN nhẹ (dệt) → nông nghiệp nguyên liệu → CN nặng (cơ khí)",
    time: "60–80 năm",
    text: "Gắn CMCN lần thứ nhất. Vốn chủ yếu từ bóc lột lao động thuê và thuộc địa → mâu thuẫn tư bản–lao động gay gắt.",
    tone: "a" as const,
  },
  {
    title: "Mô hình Liên Xô (cũ)",
    subtitle: "Ưu tiên công nghiệp nặng",
    path: "CN nặng · cơ khí chế tạo · kế hoạch hóa tập trung",
    time: "Nhanh nhưng cứng",
    text: "Xây CSVCKT to lớn trong thời gian ngắn. Cơ khí hóa cứng + kế hoạch hóa duy trì quá lâu → khó thích ứng tiến bộ KT–CN mới.",
    tone: "b" as const,
  },
  {
    title: "Nhật Bản & NICs",
    subtitle: "CNH rút ngắn — gợi ý cho VN",
    path: "Xuất khẩu + thay thế nhập khẩu + công nghệ nhiều tầng",
    time: "20–30 năm",
    text: "Tận dụng công nghệ nước đi trước, nội lực và nguồn lực bên ngoài. Kết hợp nghiên cứu nội địa với chuyển giao — đi tắt có chọn lọc.",
    tone: "c" as const,
  },
];

/** Ba con đường tiếp thu công nghệ (Nhật/NICs) */
export const techPaths = [
  {
    num: "01",
    title: "Tự nghiên cứu chế tạo",
    text: "Hoàn thiện dần từ thấp đến cao — lâu, tổn thất nhiều khi thử nghiệm.",
  },
  {
    num: "02",
    title: "Chỉ nhận chuyển giao",
    text: "Cần nhiều vốn–ngoại tệ; dễ phụ thuộc nước ngoài.",
  },
  {
    num: "03",
    title: "Chiến lược nhiều tầng",
    text: "Kết hợp truyền thống & hiện đại, nghiên cứu & chuyển giao — vững chắc và đi tắt. Nhật/NICs đi đường này.",
    highlight: true,
  },
];

export const vnCnhDef =
  "Công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh, dịch vụ và quản lý kinh tế – xã hội, từ sử dụng sức lao động thủ công là chính sang sử dụng phổ biến sức lao động với công nghệ, phương tiện, phương pháp tiên tiến hiện đại, dựa trên sự phát triển của công nghiệp và tiến bộ khoa học công nghệ, nhằm tạo ra năng suất lao động xã hội cao.";

export const vnNecessity = [
  {
    num: "01",
    title: "Quy luật phổ biến",
    text: "CNH là quy luật phổ biến phát triển lực lượng sản xuất — mọi quốc gia đều trải qua, dù đi trước hay đi sau.",
  },
  {
    num: "02",
    title: "Xây CSVCKT từ đầu",
    text: "Nước kém phát triển quá độ lên CNXH phải xây cơ sở vật chất – kỹ thuật của chủ nghĩa xã hội từ đầu thông qua CNH–HĐH.",
  },
];

export const vnFeatures = [
  {
    title: "Định hướng XHCN",
    text: "Mục tiêu “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”.",
  },
  {
    title: "Gắn kinh tế tri thức",
    text: "CNH–HĐH gắn với phát triển kinh tế tri thức — tri thức là LLSX trực tiếp.",
  },
  {
    title: "KT thị trường ĐH XHCN",
    text: "Thực hiện trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa.",
  },
  {
    title: "Toàn cầu hóa & hội nhập",
    text: "Trong bối cảnh toàn cầu hóa và Việt Nam chủ động hội nhập kinh tế quốc tế.",
  },
];

export const knowledgeEconomy = {
  oecd:
    "Nền kinh tế tri thức là nền kinh tế trong đó sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế, tạo ra của cải, nâng cao chất lượng cuộc sống. (OECD, 1995)",
  traits: [
    "Tri thức trở thành lực lượng sản xuất trực tiếp — vốn quý nhất",
    "Ngành dựa vào tri thức và thành tựu KH–CN ngày càng chiếm đa số",
    "CNTT phủ khắp; thông tin là tài nguyên quan trọng",
    "Nhân lực được tri thức hóa; sáng tạo, học tập là yêu cầu thường xuyên",
    "Gắn chặt với toàn cầu hóa kinh tế",
  ],
};

export const vnContents = [
  {
    num: "01",
    title: "Tạo lập điều kiện chuyển đổi",
    text: "Tư duy phát triển, thể chế, nguồn lực, môi trường quốc tế, ý thức xã hội văn minh — làm đồng thời, không chờ “đủ điều kiện mới làm”.",
  },
  {
    num: "02",
    title: "Ứng dụng KH–CN & kinh tế tri thức",
    text: "Ứng dụng đồng bộ thành tựu hiện đại; tranh thủ đi tắt đón đầu; phát triển ngành và sản phẩm giá trị gia tăng cao dựa tri thức.",
  },
  {
    num: "03",
    title: "Chuyển đổi cơ cấu kinh tế",
    text: "Tăng tỷ trọng công nghiệp–dịch vụ, giảm tỷ trọng nông nghiệp trong GDP; cơ cấu hợp lý, hiện đại, hiệu quả, hội nhập.",
  },
  {
    num: "04",
    title: "Hoàn thiện quan hệ sản xuất",
    text: "Hoàn thiện quan hệ sở hữu, phân phối, quản lý, phân bổ nguồn lực — giải phóng sức sáng tạo của nhân dân.",
  },
  {
    num: "05",
    title: "Thích ứng CMCN 4.0",
    text: "Thể chế sáng tạo, ứng dụng thành tựu 4.0, hạ tầng số & an ninh mạng, chuyển đổi số, CNH nông nghiệp–nông thôn, nhân lực CLC.",
  },
];

export const adapt40 = [
  {
    title: "Thể chế & sáng tạo",
    text: "Hệ thống đổi mới sáng tạo quốc gia; khung pháp lý; vốn con người; liên kết đại học – viện – doanh nghiệp.",
  },
  {
    title: "Ứng dụng thành tựu 4.0",
    text: "Huy động nguồn lực nhà nước, toàn dân và quốc tế; tự động hóa, chuỗi cung ứng thông minh, an ninh mạng.",
  },
  {
    title: "Hạ tầng số & chuyển đổi số",
    text: "Hạ tầng CNTT–TT, nền tảng kinh tế số; số hóa quản trị; phát triển chọn lọc ngành công nghiệp hiện đại.",
  },
  {
    title: "Nhân lực chất lượng cao",
    text: "Đổi mới giáo dục–đào tạo; gắn đào tạo với doanh nghiệp; trọng dụng nhân tài — “hiền tài là nguyên khí quốc gia”.",
  },
];

export const theoryAgenda = [
  { time: "0–1'", label: "Mở đầu", tip: "3 câu hỏi xuyên suốt" },
  { time: "1–5'", label: "CMCN", tip: "Khái niệm · 4 cuộc · 3 vai trò" },
  { time: "5–8'", label: "CNH thế giới", tip: "Định nghĩa · 3 mô hình · 3 đường công nghệ" },
  { time: "8–13'", label: "CNH–HĐH VN", tip: "Tất yếu · đặc điểm · nội dung · 4.0" },
  { time: "13–15'", label: "Kết", tip: "3 luận điểm chốt" },
];
