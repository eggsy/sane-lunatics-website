interface IPeople {
  title: string;
  people: string[];
}

const people: IPeople[] = [
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
    title: "Işık ve Ses",
    people: ["Batuhan Karadaş", "Abdulbaki Dursun"],
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
    image: "/erdinc.jpeg",
  },
  {
    name: "Ayça Kartal",
    role: "Reji Asistanı",
    image: "/ayca.jpeg",
  },
  {
    name: "Mehmet Rıfkı Baba",
    role: "Sahne Amiri",
    image: "/11.jpg",
  },
  {
    name: "Adem Kaplan",
    role: "Sahne Amiri",
    image: "/8.jpg",
  },
  {
    name: "Zeyneb Türkoğlu",
    role: "Müzik Yönetmeni",
    image: "/zeyneb.jpeg",
  },
  {
    name: "Batuhan Karadaş",
    role: "Işık, Ses & Teknik",
    image: "/batu.jpg",
  },
  {
    name: "Abdulbaki Dursun",
    role: "Işık, Ses & Teknik",
    image: "/baki.jpg",
  },
];

export default people;
