export interface TouristLocation {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  address: string;
  bestTimeToVisit: string;
  activities: string[];
}

export const locations: TouristLocation[] = [
  {
    id: "bien-ho",
    name: "Biển Hồ",
    description: "Hồ nước ngọt tự nhiên lớn nhất Tây Nguyên, được hình thành từ miệng núi lửa đã ngưng hoạt động.",
    longDescription: "Biển Hồ là một trong những điểm du lịch nổi tiếng nhất của Gia Lai. Với diện tích khoảng 250ha, hồ nước trong xanh được bao quanh bởi những đồi chè xanh mướt và rừng thông. Đây là điểm đến lý tưởng cho các hoạt động dã ngoại, chèo thuyền và ngắm cảnh.",
    image: "https://images.unsplash.com/photo-1580745389029-c47706b93ff0?auto=format&fit=crop&w=1200",
    address: "Xã Biển Hồ, TP. Pleiku, Gia Lai",
    bestTimeToVisit: "Tháng 11 đến tháng 4",
    activities: ["Chèo thuyền", "Cắm trại", "Ngắm cảnh", "Chụp ảnh"]
  },
  {
    id: "cong-vien-dong-xanh",
    name: "Công viên Đồng Xanh",
    description: "Công viên sinh thái với không gian xanh rộng lớn và nhiều hoạt động giải trí.",
    longDescription: "Công viên Đồng Xanh là điểm đến lý tưởng cho gia đình với không gian xanh mát, khu vui chơi trẻ em, và nhiều hoạt động giải trí thú vị. Công viên còn có hồ nước nhân tạo và khu ẩm thực phong phú.",
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=1200",
    address: "Phường Thống Nhất, TP. Pleiku, Gia Lai",
    bestTimeToVisit: "Quanh năm",
    activities: ["Picnic", "Vui chơi trẻ em", "Thể thao", "Ẩm thực"]
  },
  {
    id: "thac-phu-cuong",
    name: "Thác Phú Cường",
    description: "Thác nước hùng vĩ với độ cao 40m, là điểm du lịch sinh thái nổi tiếng.",
    longDescription: "Thác Phú Cường là một trong những thác nước đẹp nhất Tây Nguyên. Thác có độ cao 40m với dòng nước trắng xóa đổ xuống tạo nên cảnh quan hùng vĩ. Xung quanh thác là rừng nguyên sinh với hệ động thực vật phong phú.",
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=1200",
    address: "Xã Ia Dreng, Huyện Chư Păh, Gia Lai",
    bestTimeToVisit: "Tháng 5 đến tháng 10",
    activities: ["Tắm thác", "Leo núi", "Khám phá rừng", "Cắm trại"]
  }
];