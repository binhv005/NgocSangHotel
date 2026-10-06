// Centralized Hotel Data

export const hotelInfo = {
  name: "Hệ Thống Khách Sạn Ngọc Sang Đà Lạt",
  tagline: "Không gian lưu trú tiện nghi giữa lòng Đà Lạt",
  description: "Khám phá Đà Lạt và tận hưởng không gian nghỉ ngơi thoải mái cùng Hệ Thống Khách Sạn Ngọc Sang.",
  hotline: "796792222",
  hotlineDisplay: "0796.792.222",
  zalo: "796792222",
  zaloLink: "https://zalo.me/796792222",
  messengerLink: "https://m.me/hethongkhachsanngocsangdalat",
  facebookLink: "https://www.facebook.com/hethongkhachsanngocsangdalat/?locale=vi_VN",
  googleMapsLink: "https://www.google.com/maps/place/Ng%E1%BB%8Dc+Sang+Hotel/data=!4m2!3m1!1s0x317113002f64f9cd:0x9b12f460a46e07bf?sa=X&ved=1t:242&ictx=111"
};

export const roomsData = [
  {
    id: "deluxe",
    name: "Phòng Deluxe",
    badge: "Deluxe",
    image: "/1d4787f9 - Copy.jpg",
    fallbackImage: "/3220a5b7.jpg",
    guests: "2 Khách",
    capacity: 2,
    area: "[Bổ sung diện tích]",
    bed: "1 Giường đôi King size hoặc 2 giường đơn",
    description: "Phòng Deluxe tại Hệ Thống Khách Sạn Ngọc Sang được bài trí theo phong cách hiện đại pha nét ấm áp đặc trưng của Đà Lạt, giúp quý khách có một giấc ngủ trọn vẹn và thư thái.",
    amenities: [
      "Wifi tốc độ cao miễn phí",
      "Điều hòa 2 chiều cao cấp",
      "Smart TV kết nối Internet",
      "Bình đun siêu tốc & trà/cà phê miễn phí",
      "Phòng tắm vòi sen nóng lạnh",
      "Máy sấy tóc & vật dụng cá nhân cao cấp"
    ]
  },
  {
    id: "superior",
    name: "Phòng Superior",
    badge: "Superior",
    image: "/95d2112f(1) - Copy.jpg",
    fallbackImage: "/fc4b26cb - Copy.jpg",
    guests: "2 Khách",
    capacity: 2,
    area: "[Bổ sung diện tích]",
    bed: "1 Giường đôi lớn êm ái",
    description: "Phòng Superior mang đến không gian nghỉ dưỡng tinh tế, thoáng đãng với ánh sáng tự nhiên và thiết kế mộc mạc thanh lịch, rất lý tưởng cho các cặp đôi hoặc du khách công tác.",
    amenities: [
      "Wifi tốc độ cao miễn phí",
      "Điều hòa 2 chiều",
      "Smart TV",
      "Bình đun siêu tốc & nước suối miễn phí",
      "Phòng tắm khép kín tiện nghi",
      "Tủ quần áo & két an toàn"
    ]
  },
  {
    id: "family",
    name: "Phòng Family",
    badge: "Family",
    image: "/8108207a - Copy.jpg",
    fallbackImage: "/3220a5b7.jpg",
    guests: "4 Khách",
    capacity: 4,
    area: "[Bổ sung diện tích]",
    bed: "2 Giường đôi cỡ lớn (Queen/King)",
    description: "Phòng Family được thiết kế đặc biệt dành riêng cho các gia đình hoặc nhóm bạn đi du lịch cùng nhau. Đảm bảo sự riêng tư, ấm cúng và đầy đủ tiện nghi như ở nhà.",
    amenities: [
      "Wifi tốc độ cao cho nhiều thiết bị",
      "Điều hòa 2 chiều hiện đại",
      "Smart TV màn hình lớn",
      "Bình đun nước nóng, trà, cafe",
      "Phòng tắm rộng rãi, nóng lạnh",
      "Không gian sinh hoạt ấm cúng"
    ]
  }
];

export const amenitiesData = [
  { id: 1, title: "Phòng lưu trú", icon: "Bed" },
  { id: 2, title: "Dịch vụ tiện ích khách sạn", icon: "Utensils" },
  { id: 3, title: "Hỗ trợ khách hàng", icon: "Headphones" },
  { id: 4, title: "Hỗ trợ đặt phòng", icon: "CalendarCheck" },
  { id: 5, title: "Thông tin du lịch Đà Lạt", icon: "MapPin" }
];

export const whyChooseUsData = [
  { number: "01", title: "Vị trí tại Đà Lạt" },
  { number: "02", title: "Hệ thống phòng đa dạng" },
  { number: "03", title: "Phù hợp nhiều đối tượng khách" },
  { number: "04", title: "Hỗ trợ đặt phòng thuận tiện" }
];

export const travelGuideData = [
  {
    id: "diadiem",
    category: "Địa điểm du lịch",
    title: "Những địa điểm du lịch nổi bật tại Đà Lạt",
    desc: "Khám phá những địa điểm đẹp nhất không thể bỏ qua khi đến với xứ sở sương mù.",
    image: "/671968606_1547284297398232_3948701064605489812_n.jpg",
    content: `
      Đà Lạt nổi tiếng với vẻ đẹp mộng mơ, khí hậu ôn đới mát mẻ quanh năm cùng cảnh quan thiên nhiên trù phú. Dưới đây là những điểm đến không thể bỏ qua:
      • Hồ Xuân Hương & Quảng trường Lâm Viên: Trái tim của thành phố với nụ hoa Atiso khổng lồ và không gian dạo mát tuyệt vời.
      • Đỉnh Langbiang: Ngắm nhìn toàn cảnh cao nguyên Lâm Viên hùng vĩ từ độ cao hơn 2.000m.
      • Thung Lũng Tình Yêu & Đồi Mộng Mơ: Khung cảnh lãng mạn đặc trưng của phố núi.
      • Chùa Linh Phước (Chùa Ve Chai): Công trình kiến trúc khảm sành sứ độc nhất vô nhị.
    `
  },
  {
    id: "kinhnghiem",
    category: "Kinh nghiệm du lịch",
    title: "Kinh nghiệm du lịch Đà Lạt tự túc",
    desc: "Chuẩn bị hành trang cho chuyến đi tự túc tiết kiệm, thuận lợi và đầy đủ trải nghiệm.",
    image: "/670381558_1547284817398180_5339791227201017625_n.jpg",
    content: `
      Để có một chuyến du lịch Đà Lạt tự túc trọn vẹn và tiết kiệm, hãy lưu lại những mẹo nhỏ sau:
      • Thời điểm lý tưởng: Tháng 10 - tháng 4 là mùa khô, thời tiết se lạnh, nhiều loài hoa đua nở (dã quỳ, mai anh đào, cẩm tú cầu).
      • Trang phục: Chuẩn bị áo ấm, khăn choàng nhẹ vì buổi tối và sáng sớm nhiệt độ xuống khá thấp.
      • Di chuyển: Thuê xe máy là phương tiện linh hoạt và thú vị nhất để luồn lách qua các cung đường đèo thông reo.
      • Đặt phòng sớm: Nên đặt phòng trước ít nhất 1-2 tuần vào ngày thường và 1 tháng vào mùa cao điểm để có phòng đẹp giá tốt.
    `
  },
  {
    id: "anuong",
    category: "Địa điểm ăn uống",
    title: "Top quán ăn ngon tại Đà Lạt",
    desc: "Thưởng thức ẩm thực đặc trưng nóng hổi giữa tiết trời se lạnh của thành phố ngàn hoa.",
    image: "/673826437_1547285264064802_6657030247186080998_n.jpg",
    content: `
      Ẩm thực Đà Lạt mang nét cuốn hút khó cưỡng giữa tiết trời lành lạnh:
      • Lẩu gà lá é: Nước dùng ngọt thanh đậm đà từ nấm và vị the the của lá é tươi.
      • Lẩu bò Ba Toa: Nồi lẩu bò thơm lừng nghi ngút khói giữa chiều mưa phố núi.
      • Bánh tráng nướng Đà Lạt: "Pizza Việt Nam" giòn rụm với trứng, phô mai, tép khô, mỡ hành.
      • Bánh mì xíu mại & Sữa đậu nành nóng: Món điểm tâm quen thuộc tràn đầy hương vị ấm áp.
    `
  },
  {
    id: "checkin",
    category: "Điểm check-in",
    title: "Những điểm check-in đẹp ở Đà Lạt",
    desc: "Ghi lại những khoảnh khắc đáng nhớ với các góc chụp ảnh nên thơ và lãng mạn.",
    image: "/673519881_1547284407398221_1682807879044229732_n.jpg",
    content: `
      Đà Lạt là thiên đường của những bức ảnh sống ảo tuyệt đẹp:
      • Đồi chè Cầu Đất & Săn mây: Trải nghiệm đón bình minh trên thảm mây trắng bồng bềnh lúc 5:00 sáng.
      • Cánh đồng hoa Cẩm Tú Cầu: Những đóa hoa nở rộ đủ sắc màu giữa thung lũng xanh.
      • Ga Đà Lạt & Dinh Bảo Đại: Kiến trúc cổ kính thời Pháp thuộc với góc máy hoài niệm.
      • Các quán cafe view đồi thông: Thưởng thức ly cafe nóng và ngắm hoàng hôn buông xuống rừng thông.
    `
  },
  {
    id: "lichtrinh",
    category: "Gợi ý lịch trình",
    title: "Gợi ý lịch trình 3 ngày 2 đêm",
    desc: "Trải nghiệm trọn vẹn vẻ đẹp Đà Lạt với lộ trình di chuyển khoa học và thư thái.",
    image: "/671286789_1547284634064865_6044763171796841844_n.jpg",
    content: `
      Lịch trình gợi ý giúp bạn tối ưu thời gian và khám phá trọn vẹn nét đẹp Đà Lạt:
      • Ngày 1: Check-in Ngọc Sang Hotel → Dạo Hồ Xuân Hương → Chợ đêm Đà Lạt → Thưởng thức lẩu gà lá é.
      • Ngày 2: 5h00 Săn mây Cầu Đất → Tham quan Vườn hoa / Dinh thự → Chiều ngắm hoàng hôn tại quán cafe đồi thông → Ăn tối lẩu bò Ba Toa.
      • Ngày 3: Tham quan Ga Đà Lạt / Chùa Linh Phước → Mua đặc sản mứt & atiso về làm quà → Check-out.
    `
  },
  {
    id: "datphong",
    category: "Kinh nghiệm đặt phòng",
    title: "Kinh nghiệm đặt phòng khách sạn Đà Lạt",
    desc: "Đặt phòng dễ dàng, nhanh chóng và nhận ưu đãi tốt nhất khi liên hệ trực tiếp.",
    image: "/743763448_1627406919385969_3370956346219819057_n.jpg",
    content: `
      Để có kỳ nghỉ thoải mái và an tâm tuyệt đối:
      • Đặt trực tiếp với khách sạn: Giúp bạn nhận được sự tư vấn chi tiết nhất về loại phòng phù hợp và nhận nhiều hỗ trợ chu đáo.
      • Xác nhận trước ngày đi: Nhân viên Ngọc Sang sẽ liên hệ hỗ trợ hướng dẫn đường đi, check-in sớm nếu có phòng trống.
      • Liên hệ Hotline/Zalo: Luôn có nhân viên hỗ trợ 24/7 giải đáp mọi thắc mắc của bạn qua số 796792222.
    `
  }
];

export const galleryImages = [
  {
    src: "/1d4787f9 - Copy.jpg",
    caption: "Phòng nghỉ sang trọng, ấm cúng tại Hệ Thống Khách Sạn Ngọc Sang"
  },
  {
    src: "/w1531h2048x0y0-5135861d(1) - Copy.jpg",
    caption: "Không gian thoáng đãng, chan hòa cùng thiên nhiên Đà Lạt"
  },
  {
    src: "/887e2de6(1).jpg",
    caption: "Khu vực tiếp khách & thưởng thức cafe thư thái"
  },
  {
    src: "/743831011_1627406756052652_2799309997395742639_n.jpg",
    caption: "Tầm nhìn toàn cảnh thành phố Đà Lạt lung linh về đêm"
  },
  {
    src: "/743811613_1627406849385976_8468177036179748178_n.jpg",
    caption: "Khu vườn hoa rực rỡ và không gian nghỉ ngơi yên bình"
  },
  {
    src: "/3220a5b7.jpg",
    caption: "Không gian phòng nghỉ hiện đại, tiện nghi và ấm cúng"
  }
];
