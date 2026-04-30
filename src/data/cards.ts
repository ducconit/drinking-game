export type CardTag = '18+' | 'Thật' | 'Thách' | 'Chưa bao giờ' | 'Đã từng' | 'Miễn trừ' | 'Bùa' | 'Bắt buộc' | 'Tương tác' | 'Giải trí' | 'Trí Tuệ' | 'Đồng Đội' | 'Bóc Phốt' | 'Sát Phạt'

export interface CardModel {
  id?: number | string
  content: string
  tags: CardTag[]
  image?: string
  sound?: string
}

export const INITIAL_CARDS: CardModel[] = [
  {
    content: "Kể tên người bạn đang để ý trong phòng này, hoặc uống 2 ly.",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Chia sẻ điều xấu hổ nhất bạn từng làm khi say.",
    tags: [
      "Thật",
      "Giải trí"
    ]
  },
  {
    content: "Đọc to tin nhắn gần nhất bạn gửi cho mẹ hoặc người thân.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Đổi áo với người bên cạnh.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Hát một bài hát thiếu nhi bằng giọng điệu quyến rũ.",
    tags: [
      "Thách",
      "Giải trí"
    ]
  },
  {
    content: "Uống 1 ly và nhảy điệu múa quạt trong 15 giây.",
    tags: [
      "Thách",
      "Bắt buộc"
    ]
  },
  {
    content: "Chưa bao giờ tôi... bị công an tuýt còi. Ai đã từng thì uống 1 ly!",
    tags: [
      "Chưa bao giờ"
    ]
  },
  {
    content: "Chưa bao giờ tôi... hôn người yêu cũ sau khi chia tay. Ai đã từng thì cạn ly!",
    tags: [
      "Chưa bao giờ",
      "18+"
    ]
  },
  {
    content: "Ai đã từng nói dối sếp/giáo viên để xin nghỉ, tự giác uống 1 ly.",
    tags: [
      "Đã từng"
    ]
  },
  {
    content: "Đã từng ăn trộm ngô (hoặc ăn trộm hoa quả nhà hàng xóm). Ai có tuổi thơ dữ dội thì cạn ly!",
    tags: [
      "Đã từng",
      "Giải trí"
    ]
  },
  {
    content: "Kim Bài Miễn Tử: Có thể dùng để bỏ qua 1 hình phạt bất kỳ trong tương lai. Có thể chuyển nhượng.",
    tags: [
      "Miễn trừ",
      "Bùa"
    ]
  },
  {
    content: "Bùa phản đòn: Chỉ định 1 người phải uống thay bạn trong lượt này.",
    tags: [
      "Bùa",
      "Tương tác"
    ]
  },
  {
    content: "Tất cả những ai đang mặc đồ màu đen: Uống 1 ly!",
    tags: [
      "Bắt buộc"
    ]
  },
  {
    content: "Người chơi lật lá bài này phải cạn ly ngay lập tức.",
    tags: [
      "Bắt buộc"
    ]
  },
  {
    content: "Trong số những người đang ngồi đây, ai là người bạn muốn đổi cuộc sống nhất? Tại sao?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Điều xấu hổ nhất bạn từng làm khi say là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã bao giờ nói dối để hủy một cuộc hẹn chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Ai là người đầu tiên bạn từng hôn?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Bạn đã từng thích thầm ai trong nhóm này chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Điều gì khiến bạn cảm thấy khó chịu nhất ở người yêu cũ?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Bạn đã từng làm điều gì vi phạm pháp luật chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Lần gần nhất bạn khóc vì chuyện tình cảm là khi nào?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Nếu được chọn một người trong phòng để cùng đi hoang đảo, bạn chọn ai?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Tật xấu lớn nhất mà bạn chưa bao giờ dám công khai là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Kể tên người bạn ghét nhất trong công ty/lớp học hiện tại.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng 'bắt cá hai tay' bao giờ chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Nếu trúng số 10 tỷ, bạn sẽ không chia cho ai trong bàn này?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Nêu một đặc điểm cơ thể mà bạn tự ti nhất.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Tin nhắn gần nhất bạn gửi cho người khác giới (không phải người thân) là gì?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Số tiền lớn nhất bạn từng mượn người khác mà chưa trả là bao nhiêu?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bí mật đen tối nhất trong điện thoại của bạn là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng ngoại tình trong tư tưởng chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Điểm yếu lớn nhất của bạn trong mắt người khác là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Đánh giá nhan sắc của người đối diện theo thang điểm 10.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng hack mật khẩu Facebook/điện thoại của người yêu chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Lời nói dối lớn nhất mà bạn từng nói với bố mẹ là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Nếu phải kết hôn với một người trong bàn này, bạn sẽ chọn ai?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Giấc mơ kỳ quái nhất bạn từng có là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn từng có nụ hôn đồng giới nào chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Số người bạn đã từng hẹn hò chính thức là bao nhiêu?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Một thói quen kỳ cục khi bạn ở một mình là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng giả vờ ốm để xin nghỉ học/nghỉ làm chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Ai là người bạn tin tưởng nhất trong bàn nhậu này?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng nhắn tin lúc say và sáng hôm sau hối hận chưa? Kể chi tiết.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn có bao giờ chê bai quà tặng của người yêu sau lưng họ chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng tè dầm khi đã lớn chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Món đồ đắt tiền nhất bạn từng mua mà không dám nói cho gia đình biết là gì?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Bạn đã từng trải qua 'tình một đêm' chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Cảm giác lúc này của bạn đối với người ngồi bên trái là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã bao giờ thả rắm ở nơi công cộng rồi đổ tội cho người khác chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Câu thả thính 'phèn' nhất bạn từng dùng là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã từng tra google tên người yêu cũ bao nhiêu lần trong tháng qua?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Điều ngu ngốc nhất bạn từng làm vì tình yêu là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Ai trong bàn này có khả năng thành công thấp nhất theo đánh giá của bạn?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã bao giờ nhìn lén người khác thay đồ chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Nơi kỳ quặc nhất bạn từng quan hệ là ở đâu?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Bạn có muốn quay lại với người yêu cũ không?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Bạn đã từng bị cắm sừng chưa?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Điều hối hận nhất trong cuộc đời bạn tính đến thời điểm này là gì?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Số dư tài khoản ngân hàng hiện tại của bạn là bao nhiêu?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn đã bao giờ khóc vì một lý do vô cùng ngớ ngẩn chưa?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Kể tên một người bạn từng rất thân nhưng nay đã cạch mặt.",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Bạn có tin vào ma quỷ không? Vì sao?",
    tags: [
      "Thật",
      "18+"
    ]
  },
  {
    content: "Nếu ngày mai tận thế, bạn muốn ở cạnh ai đêm nay?",
    tags: [
      "Thật"
    ]
  },
  {
    content: "Gọi điện cho người yêu cũ và nói một câu bất kỳ do nhóm chọn.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Bắt chước điệu bộ của một người trong nhóm cho đến khi mọi người đoán đúng.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Chụp một bức ảnh tự sướng 'xấu lạ' và đăng lên story Facebook/Instagram.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Để người ngồi bên cạnh kiểm tra lịch sử trình duyệt web trên điện thoại.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Đưa điện thoại cho người bên phải đọc 3 tin nhắn gần nhất.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nhảy một điệu nhảy sexy tự do trong vòng 30 giây.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Hôn lên má hoặc mu bàn tay của người ngồi bên phải.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Đứng dậy và hát to một bài hát yêu thích không nhạc đệm.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Giả làm một con vật do nhóm chỉ định trong vòng 1 phút.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Đọc tin nhắn cuối cùng bạn nhận được bằng giọng của một nhân vật hoạt hình.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Cầm ly rượu/bia lên và múa quạt trong 15 giây.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Post status 'Tôi đang ế, ai hốt dùm' lên Facebook và không được xóa trong 1h.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Đổi áo ngoài với người đối diện (áp dụng nếu cùng giới).",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Gửi một icon trái tim cho người khác giới ngẫu nhiên trong danh bạ.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Cho người bên trái vẽ một hình bằng bút bi lên mặt bạn.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Uống cạn ly của người ngồi bên trái.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Gọi điện cho mẹ/bố và nói 'Con yêu bố/mẹ' rồi cúp máy luôn.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Chạy ra ngoài và hét to 'Tôi bị điên' 3 lần.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nhai một tép tỏi sống hoặc miếng ớt (nếu có).",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Thực hiện 20 cái chống đẩy ngay lập tức.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Để người đối diện đổ một ít nước (không lạnh) lên đầu bạn.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Ngậm một ngụm bia/nước và hát một bài hát.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nói bằng giọng chóp chép như không có răng trong 3 vòng tới.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Đút mồi (đồ ăn) cho người ngồi đối diện một cách tình cảm.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Liếm khuỷu tay của chính mình. (Thử thách bất khả thi).",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nhắm mắt và để người khác cho bạn ăn một món bất kỳ trên bàn.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Đi catwalk một vòng quanh bàn nhậu.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nói 3 câu khen ngợi chân thành với người bạn ghét nhất trong bàn.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Tạo dáng như một bức tượng thạch cao và giữ nguyên trong 1 phút.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Giả vờ khóc lóc thảm thiết và kể lể về việc mất 10 ngàn đồng.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Làm một biểu cảm khuôn mặt xấu nhất và giữ trong 10 giây cho mọi người chụp hình.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Quay video 15 giây tỏ tình với cái chai bia và gửi vào group chat chung.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Làm theo mọi hành động của người bên phải trong 2 lượt tới.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Đội quần áo (hoặc túi nilon) của ai đó trên đầu trong vòng 5 phút.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Kể một câu chuyện cười. Nếu không ai cười, bạn phải nốc.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Dùng miệng (không dùng tay) gắp một miếng mồi đút cho người khác.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Đoán size giày của tất cả mọi người trong bàn. Đoán sai uống.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Để mọi người vote: Nếu quá nửa nói bạn 'nhạt', bạn uống 2 ly.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Massage vai cho người ngồi bên trái trong 2 phút.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Gửi tin nhắn 'Em nhớ anh/Anh nhớ em' cho số điện thoại thứ 5 trong danh bạ.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Để người khác kiểm tra thư viện ảnh trong 30 giây.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Tháo tất (vớ) bằng răng.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nói 1 câu tiếng Anh bằng ngữ điệu Ấn Độ.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Gọi điện thoại cho số giao hàng gần nhất nói 'Tôi yêu bạn' rồi tắt máy.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Uống bằng tay trái (tay không thuận) trong phần còn lại của trò chơi.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Để một viên đá lạnh vào trong áo (sau lưng) cho đến khi nó tan hết.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Làm điệu bộ của một YouTuber đang review món nhậu trên bàn.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Nói chuyện bằng giọng miền khác (Bắc/Trung/Nam) trong vòng 3 phút.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Xoay 10 vòng tại chỗ rồi đi thẳng một đường dài 2 mét.",
    tags: [
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Cắn một miếng chanh tươi mà không được nhăn mặt.",
    tags: [
      "Thách",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Ai đã từng yêu người yêu cũ của bạn thân hãy nốc 1 ly.",
    tags: [
      "Đã từng",
      "Tương tác"
    ]
  },
  {
    content: "Tất cả phái nam trong bàn nâng ly 100%.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người đeo kính nốc 1 ly. Nếu không ai đeo kính, bạn phải nốc 2 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Chỉ định người ngồi bên trái bạn nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Đếm số 1, 2, 3 dzo! Người cuối cùng không hô phải nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Tất cả những ai mặc áo màu đen/trắng nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Ai đang FA (độc thân) nâng ly tự ái 100%.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người bốc lá bài này phải tự nốc 2 ly không nói nhiều.",
    tags: [
      "Bắt buộc",
      "Tương tác",
      "18+"
    ]
  },
  {
    content: "Uống rượu giao bôi với người ngồi đối diện.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Mọi người cùng chỉ tay vào một người. Ai bị chỉ nhiều nhất nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Tất cả các bạn nữ trong bàn uống 50%.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Ai có chữ cái đầu của tên là nguyên âm (A, E, I, O, U) uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người nào lớn tuổi nhất bàn phải uống 1 ly kính lão đắc thọ.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Ai là em út (nhỏ tuổi nhất) trong bàn uống 1 ly ra mắt.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Những ai đang thất nghiệp hoặc lương tháng dưới 10 triệu nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Ai đang đi xe tay ga uống 1 ly. Xe số uống 2 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người nào có hình xăm nốc 1 ly cho mỗi hình xăm trên người (tối đa 3 ly).",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Những ai đã từng rớt môn (hoặc trượt đại học) nốc 1 ly.",
    tags: [
      "Đã từng",
      "Tương tác"
    ]
  },
  {
    content: "Tất cả mọi người dùng iPhone uống 1 ly. Android an toàn.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Chỉ định 2 người phải cạn ly 100% cùng nhau ngay bây giờ.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người ngồi đối diện bạn được phép đổ thêm rượu/bia vào ly của bạn. Bạn phải uống cạn.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Ai chưa tắm trước khi đến đây tự giác uống 2 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người vừa cãi nhau với người yêu trong tuần này uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Người nào có số đuôi điện thoại là số lẻ nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Mọi người cạn ly 100%! Cheers!",
    tags: [
      "Bắt buộc",
      "Tương tác"
    ]
  },
  {
    content: "Cấm nói từ 'Uống' hoặc 'Nhậu' trong 3 vòng tới. Ai vi phạm tự động nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Khi ai đó chuẩn bị uống, tất cả phải giơ ngón út lên. Người giơ cuối cùng phạt 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật T-Rex: Từ giờ mọi người phải khép chặt nách vào mạng sườn khi cầm ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Không được gọi tên thật của nhau. Ai gọi tên thật phạt 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Cấm chỉ tay: Không ai được dùng ngón trỏ để chỉ. Vi phạm uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật nói ngọng: Người rút lá này phải thêm từ 'meo' vào cuối mỗi câu nói.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Chúa tể ngón cái: Bất cứ khi nào bạn đặt ngón cái lên mép bàn, những người khác làm theo. Chậm nhất uống.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật tay trái: Mọi người chỉ được cầm ly bằng tay trái. Cầm tay phải phạt 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Cấm chửi thề: Bất kỳ ai văng tục từ giờ đến hết game đều phải nốc 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật đứng lên: Mỗi khi muốn nói chuyện với người đối diện, phải đứng lên. Quên uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Cấm sử dụng điện thoại di động trên bàn nhậu trong 15 phút. Cầm vào điện thoại nốc 3 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Cấm dùng từ 'Tôi' hoặc 'Mình'. Phải xưng tên. Vi phạm uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật hoàng gia: Bạn là vua trong 1 vòng. Bất cứ ai muốn làm gì phải xin phép bạn.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Người bị ngọng chữ L/N trong bàn (nếu có) bị phạt uống 1 ly. Nếu không có, tự uống.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Luật ma nơ canh: Khi bạn đóng băng bất ngờ, tất cả phải đóng băng theo. Chậm nhất uống 1 ly.",
    tags: [
      "Bắt buộc",
      "Giải trí"
    ]
  },
  {
    content: "Mini Game: Nối từ. Bắt đầu với 1 từ ghép, đi theo vòng. Ai không nối được nốc.",
    tags: [
      "Giải trí",
      "Tương tác"
    ]
  },
  {
    content: "Mini Game: Danh mục. Đọc tên các hãng xe ô tô. Ai bị trùng hoặc bí từ nốc.",
    tags: [
      "Giải trí"
    ]
  },
  {
    content: "Mini Game: Never Have I Ever. Kể 1 việc bạn chưa từng làm. Ai đã làm phải uống.",
    tags: [
      "Chưa bao giờ",
      "Tương tác"
    ]
  },
  {
    content: "Mini Game: Vỗ tay theo nhịp. Người sau thêm 1 nhịp. Ai sai uống.",
    tags: [
      "Giải trí",
      "Bắt buộc"
    ]
  },
  {
    content: "Mini Game: Oẳn tù tì tập thể. Tất cả cùng ra. Bạn thuộc nhóm thiểu số? Uống 1 ly.",
    tags: [
      "Tương tác",
      "Giải trí"
    ]
  },
  {
    content: "Miễn tử kim bài: Giữ lá bài này, bạn được quyền từ chối 1 lần uống rượu bất kỳ lúc nào.",
    tags: [
      "Miễn trừ",
      "Bùa"
    ]
  },
  {
    content: "Chuyển nghiệp: Khi bạn bị phạt uống, dùng lá này để ép một người khác uống thay.",
    tags: [
      "Bùa",
      "Tương tác"
    ]
  },
  {
    content: "Bá chủ: Bạn được quyền ra một luật mới ngay bây giờ và áp dụng đến cuối game.",
    tags: [
      "Bùa",
      "Tương tác"
    ]
  },
  {
    content: "Tưới nước: Chỉ định 2 người bất kỳ trong bàn cụng ly và uống 100%.",
    tags: [
      "Tương tác"
    ]
  },
  {
    content: "Sao quả tạ: Trong vòng tiếp theo, ai bị phạt uống, bạn đều phải uống ké 1 ly.",
    tags: [
      "Bắt buộc"
    ]
  },
  {
    content: "Thẻ Thanh Tẩy: Vô hiệu hóa toàn bộ các luật lệ đang ám lên bạn (ví dụ: cấm xưng 'tôi', luật nói ngọng...).",
    tags: [
      "Miễn trừ",
      "Bùa"
    ]
  },
  {
    content: "Thẻ Đổi Đào: Dùng lá bài này để bỏ qua một thử thách (Dare) và ép người bên cạnh làm thay bạn.",
    tags: [
      "Miễn trừ",
      "Bùa",
      "Tương tác"
    ]
  },
  {
    content: "Hộ Thể Nhẫn: Cất lá bài này đi. Bất cứ khi nào bạn muốn, dùng nó để block 1 lần bị phạt uống và bắt người vừa ép bạn tự uống 2 ly.",
    tags: [
      "Miễn trừ",
      "Bùa",
      "Tương tác"
    ]
  },
  {
    content: "Thẻ Phắn Nhanh (Sủi): Bạn được quyền đứng dậy rời khỏi bàn (đi vệ sinh, nghe điện thoại) tối đa 15 phút mà không bị ai phạt.",
    tags: [
      "Miễn trừ",
      "Giải trí"
    ]
  },
  {
    content: "Giảm án tử hình: Khi bạn bị ép cạn ly (100%), đưa lá này ra để được giảm án xuống chỉ uống đúng 1 ngụm nhỏ.",
    tags: [
      "Miễn trừ"
    ]
  },
  {
    content: "Đọc ngược bảng chữ cái từ Z về A trong 15 giây. Sai hoặc quá giờ uống 1 ly.",
    tags: [
      "Trí Tuệ",
      "Thách"
    ]
  },
  {
    content: "Tính nhanh: 8 x 7 + 12 - 5 = ? Trả lời sai trong 3 giây uống 1 ly.",
    tags: [
      "Trí Tuệ"
    ]
  },
  {
    content: "Kể tên 5 thủ đô ở Châu Âu trong 10 giây. Không được ngập ngừng. Sai uống 1 ly.",
    tags: [
      "Trí Tuệ"
    ]
  },
  {
    content: "Đọc to câu líu lưỡi: 'Buổi trưa ăn bưởi chua' 3 lần thật nhanh. Vấp uống 1 ly.",
    tags: [
      "Trí Tuệ",
      "Giải trí"
    ]
  },
  {
    content: "Kể tên 3 người yêu cũ của một người bất kỳ trong bàn. Đoán sai uống 2 ly.",
    tags: [
      "Trí Tuệ",
      "Bóc Phốt"
    ]
  },
  {
    content: "Chọn 1 người làm 'bạn cùng tiến'. Kể từ giờ, mỗi khi bạn bị phạt uống, người đó cũng phải uống cùng (Áp dụng 3 vòng).",
    tags: [
      "Đồng Đội",
      "Tương tác"
    ]
  },
  {
    content: "Bạn và người ngồi bên phải phải cùng cụng ly uống 100% tình anh em ngay bây giờ.",
    tags: [
      "Đồng Đội",
      "Sát Phạt"
    ]
  },
  {
    content: "Oẳn tù tì với người ngồi đối diện. Ai thua nốc 2 ly. Cả hai cùng ra giống nhau thì cả hai cùng nốc.",
    tags: [
      "Đồng Đội",
      "Giải trí"
    ]
  },
  {
    content: "Kẹp 1 tờ giấy ăn giữa trán bạn và trán người bên trái trong 1 phút. Rớt giấy cả hai uống 1 ly.",
    tags: [
      "Đồng Đội",
      "Thách"
    ]
  },
  {
    content: "Hai người ngồi cạnh nhau phải đút nhau ăn xong 1 miếng mồi mà không được dùng tay.",
    tags: [
      "Đồng Đội",
      "Thách",
      "Tương tác"
    ]
  },
  {
    content: "Đếm 1, 2, 3 tất cả cùng chỉ tay vào người mà bạn nghĩ là 'lăng nhăng' nhất. Ai bị chỉ nhiều nhất uống 2 ly.",
    tags: [
      "Bóc Phốt",
      "Tương tác"
    ]
  },
  {
    content: "Chỉ tay vào người ở dơ nhất bàn. Kẻ đó phải uống 1 ly.",
    tags: [
      "Bóc Phốt"
    ]
  },
  {
    content: "Vote xem ai là người có nguy cơ 'mất liêm sỉ' nhất đêm nay. Người đó tự nốc 1 ly.",
    tags: [
      "Bóc Phốt"
    ]
  },
  {
    content: "Chỉ tay vào người mà bạn nghĩ có nhiều bí mật đen tối nhất trong điện thoại. Người bị chỉ uống 1 ly.",
    tags: [
      "Bóc Phốt"
    ]
  },
  {
    content: "Đếm 1, 2, 3 chỉ tay vào người giàu nhất bàn. Người đó được quyền uống hoặc thanh toán bill (đùa thôi, uống 1 ly).",
    tags: [
      "Bóc Phốt",
      "Giải trí"
    ]
  },
  {
    content: "Xoay vòng quay tử thần: Không nói nhiều, bốc được lá này thì tự giác cạn ly 100%.",
    tags: [
      "Sát Phạt",
      "Bắt buộc"
    ]
  },
  {
    content: "Uống ly pha trộn: Mỗi người trong bàn đổ một ít đồ uống của họ vào ly của bạn. Bạn phải nốc cạn nó.",
    tags: [
      "Sát Phạt",
      "Thách"
    ]
  },
  {
    content: "Boom! Bắt đầu từ bạn, đếm số theo vòng tròn. Ai trúng số chia hết cho 3 phải nốc 1 ly ngay lập tức. Ai làm gián đoạn uống 3 ly.",
    tags: [
      "Sát Phạt",
      "Trí Tuệ"
    ]
  },
  {
    content: "Thử thách tử thần: Bạn có thể chọn uống 3 ly hoặc kết thúc game của mình tại đây (ngủ).",
    tags: [
      "Sát Phạt",
      "Thách"
    ]
  },
  {
    content: "Quân lệnh như sơn: Chỉ định 1 người bất kỳ nốc 100% ly của họ, không được phản kháng.",
    tags: [
      "Sát Phạt",
      "Bùa"
    ]
  }

]

export const TAGS_AVAILABLE: { id: CardTag; label: string; emoji: string; color: string }[] = [
  { id: '18+', label: '18+', emoji: '🔞', color: '#FF0077' },
  { id: 'Thật', label: 'Sự thật', emoji: '🤫', color: '#00F5FF' },
  { id: 'Thách', label: 'Thử thách', emoji: '🔥', color: '#FF9A1F' },
  { id: 'Chưa bao giờ', label: 'Chưa bao giờ', emoji: '🙅‍♂️', color: '#A020F0' },
  { id: 'Đã từng', label: 'Đã từng', emoji: '🙋‍♀️', color: '#FFD700' },
  { id: 'Bắt buộc', label: 'Bắt buộc', emoji: '‼️', color: '#FF3333' },
  { id: 'Bùa', label: 'Lá bùa', emoji: '🍀', color: '#00FF00' },
  { id: 'Miễn trừ', label: 'Miễn trừ', emoji: '🛡️', color: '#4444FF' },
  { id: 'Tương tác', label: 'Tương tác', emoji: '🤝', color: '#FF8800' },
  { id: 'Giải trí', label: 'Giải trí', emoji: '🎭', color: '#FF00FF' },
  { id: 'Trí Tuệ', label: 'Trí Tuệ', emoji: '🧠', color: '#00FFFF' },
  { id: 'Đồng Đội', label: 'Đồng Đội', emoji: '👥', color: '#32CD32' },
  { id: 'Bóc Phốt', label: 'Bóc Phốt', emoji: '🎯', color: '#FF4500' },
  { id: 'Sát Phạt', label: 'Sát Phạt', emoji: '☠️', color: '#8B0000' },
]
