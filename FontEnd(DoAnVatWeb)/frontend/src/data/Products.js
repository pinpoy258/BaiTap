const products = [
  {
    _id: "1",
    name: "Trà sữa",
    image: "/images/6.png",
    description:
      "Trà sũa không tự sinh ra và cũng không tự mất đi nó chỉ chuyển từ người này sang người khác ,ở đây chúng tôi có bán mọi loại trà sữa ,với đầy đủ các hương vị tha hồ bạn lựa chọn",
    price: 20000,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    type:
    "Trà sữa",
  },
  {
    _id: "2",
    name: "Đồ ăn vặt",
    image: "/images/5.png",
    description:
      "Trước con đói đang réo gọi mỗi giây, tình yêu chỉ là hạt cơm không lấp đầy được bao tử! Các món ăn luôn là các chủ đề thú vị được bạn bè quan tâm, đặc biệt trong câu hỏi mà mỗi người hay gặp phải “hôm nay ăn gì?” ở đây chúng tôi lun có mọi thể loai đồ ăn vặt mà bạn cần ",
    price: 50000,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
    type:
    "bánh kẹo",
  },
  {
    _id: "3",
    name: "Hộp bánh",
    image: "/images/4.png",
    description:
      "Ngoài việc tặng cho nhau những hộp quà bánh vào những ngày lễ tết ,thì những hộp quà bánh cũng là những vật phẩm trong cuộc sống hằng ngày nói chung và là đồ ăn vặt nói riêng vì vậy khi bạn cần chúng tôi lun có ,chúng tôi có tất cả các loại bánh mà bạn cần",
    price: 100000,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
    type:
    "Bánh kẹo",
  },
  {
    _id: "4",
    name: "Nước giải khác",
    image: "/images/3.png",
    description:
      "Với thời tiết hiện nay , đặt biệt là những ngày hè nóng bức vì vậy tại sao bạn không đến với chúng tôi ,chúng tôi chuyên cung cấp đầy đủ các mặt hàng nước giải khác thiết yếu cho cuộc sống hằng ngày",
    price: 15000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
    type:
    "Nước giải khác",
  },
  {
    _id: "5",
    name: "Topokki chiên",
    image: "/images/2.png",
    description:
      "Nếu bạn muốn ăn những món ăn Hàn Quốc ? thì còn ngần ngại gì mà không đến với chúng tôi ở đây chúng tôi chuyên cung cấp các loại topokki",
    price: 30000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
    type:
    "Bánh",
  },
  {
    _id: "6",
    name: "Bánh tráng trộn",
    image: "/images/1.png",
    description:
      "chúng tôi chuyên cung cấp đầy dủ các mặt hàng về bánh tráng trộn ,với nhiều loại nhìu hương vị khác nhau đảm bảo đem đến cho bạn những cảm giác tuyệt vời nhất",
    price: 15000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    type:
    "Bánh",
  },
  {
    _id: "7",
    name: "Xiên nướng",
    image: "/images/7.png",
    description:
      "chúng tôi có đầy đủ các loại xiên đảm bảo đáp ứng đầy đủ mọi thể loại cho bạn ",
    price: 15000,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    type:
    "bánh",
  },
  {
    _id: "8",
    name: "Topoki",
    image: "/images/8.png",
    description:
      "Nếu bạn muốn ăn những món ăn Hàn Quốc ? thì còn ngần ngại gì mà không đến với chúng tôi ở đây chúng tôi chuyên cung cấp các loại topokki ",
    price: 35000,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
    type:
    "Thức ăn",
  },
  {
    _id: "9",
    name: "Gỏi cuốn",
    image: "/images/9.png",
    description:
      "Trước con đói đang réo gọi mỗi giây, tình yêu chỉ là hạt cơm không lấp đầy được bao tử! Các món ăn luôn là các chủ đề thú vị được bạn bè quan tâm, đặc biệt trong câu hỏi mà mỗi người hay gặp phải “hôm nay ăn gì?” ở đây chúng tôi lun có mọi thể loai đồ ăn vặt mà bạn cần",
    price: 6000,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
    type:
    "Bánh",
  },
  {
    _id: "10",
    name: "Bánh flan ",
    image: "/images/10.png",
    description:
      "Với thời tiết hiện nay , đặt biệt là những ngày hè nóng bức vì vậy tại sao bạn không đến với chúng tôi ,chúng tôi đảm bảo sẽ giúp bạn giải tỏa một ngày nắng nóng",
    price: 15000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
    type:
    "Bánh",
  },
  {
    _id: "11",
    name: "Bento",
    image: "/images/11.png",
    description:
      "Nếu bạn muốn ăn những món ăn trở lại với tuổi thơ ? thì còn ngần ngại gì mà không đến với chúng tôi ở đây chúng tôi chuyên cung cấp các loại bánh ",
    price: 5000,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
    type:
    "Bánh",
  },
  {
    _id: "12",
    name: "takoyaki",
    image: "/images/12.png",
    description:
    "Nếu bạn muốn ăn những món ăn Nhật ? thì còn ngần ngại gì mà không đến với chúng tôi ở đây chúng tôi chuyên cung cấp các loại takoyaki ",
    price: 35000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    type:
    "Bánh",
  },
];

export default products;
