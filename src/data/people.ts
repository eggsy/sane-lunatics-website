interface IPeople {
  title: string;
  people: string[];
}

export const people: IPeople[] = [
  {
    title: "Yazan & Yöneten",
    people: ["Dr. Öğr. Üyesi Erdinç Öcal"],
  },
  {
    title: "Reji Asistanı",
    people: ["Doç. Dr. Ayça Kartal"],
  },
  {
    title: "Sahne Amiri",
    people: ["Mehmet Rıfkı Baba", "Adem Kaplan"],
  },
  {
    title: "Müzik Yönetmeni",
    people: ["Öğr. Gör. Zeyneb Türkoğlu"],
  },
  {
    title: "Işık, Ses & Teknik",
    people: ["Batuhan Karadaş", "Abdulbaki Dursun"],
  },
  {
    title: "Kostüm Tasarım",
    people: ["Meryem Öcal"],
  },
  {
    title: "Oyuncular",
    people: [
      "Dr. Erdinç Öcal",
      "Doç. Dr. Ayça Kartal",
      "Dr. Fatih Türkan",
      "Dr. Yusuf Öztürk",
      "Arş. Gör. Gülşah Kuru",
      "Azra Demircan",
      "Eda Çiçek",
      "Mehmet Rıfkı Baba",
      "Adem Kaplan",
      "Dilan Çelik",
      "Ercan Ateş",
      "Handan Demir",
      "Hüseyin Güden",
      "İslam Ayaz",
      "Mahfuz Ulaşkın",
      "Melek Yeşilkaya",
      "Mikail Artan",
      "Selma Akdemir",
      "Tunay Toptaş",
      "Ünzile Günöz",
      "Yeter Yanalak",
    ],
  },
];

interface IManegement {
  name: string;
  role: string;
  image: string;
}

export const management: IManegement[] = [
  {
    name: "Erdinç Öcal",
    role: "Yazan & Yöneten",
    image: "https://i.imgur.com/wb0l1ue.jpg",
  },
  {
    name: "Ayça Kartal",
    role: "Reji Asistanı",
    image: "https://i.imgur.com/aaygP4j.jpg",
  },
  {
    name: "Mehmet Rıfkı Baba",
    role: "Sahne Amiri",
    image: "https://i.imgur.com/6KtRKhY.jpg",
  },
  {
    name: "Adem Kaplan",
    role: "Sahne Amiri",
    image: "https://i.imgur.com/3edteG9.jpg",
  },
  {
    name: "Zeyneb Türkoğlu",
    role: "Müzik Yönetmeni",
    image: "https://i.imgur.com/poAWtfl.jpg",
  },
  {
    name: "Batuhan Karadaş",
    role: "Işık, Ses & Teknik",
    image: "https://i.imgur.com/5kSo4oJ.jpg",
  },
  {
    name: "Abdulbaki Dursun",
    role: "Işık, Ses & Teknik",
    image: "https://i.imgur.com/dvRl2m1.jpg",
  },
  {
    name: "Meryem Öcal",
    role: "Kostüm Tasarım",
    image: "https://i.imgur.com/C53m30n.jpg",
  },
];
