interface IPlaces {
  place: string;
  section?: string;
  date: string;
  image: string;
  background: string;
  expired?: boolean;
}

export const places: IPlaces[] = [
  {
    place: "Muş Alparslan Üniversitesi",
    section: "1071 Malazgirt Kongre ve Kültür Merkezi",
    date: "25 Mayıs 22 - 19:00",
    image: "https://i.imgur.com/PJWb5Fx.png",
    background: "#E31E24",
    expired: true,
  },
  {
    place: "Bitlis Eren Üniversitesi",
    section: "Merkezi Konferans Salonu",
    date: "26 Mayıs 22 - 18:00",
    image: "https://i.imgur.com/IMQjSSQ.png",
    background: "#16B1CE",
    expired: true,
  },
  {
    place: "Muş Kültür Merkezi",
    section: "Biletler: AY-KA Kırtasiye & Hayalperest Cafe",
    date: "11 Haziran 22 - 19.30",
    image: "https://i.imgur.com/iBP80q2.png",
    background: "#0EA5E9",
  },
];
