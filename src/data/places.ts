interface IPlaces {
  place: string;
  section: string;
  date: string;
  image: string;
  background: string;
}

export const places: IPlaces[] = [
  {
    place: "Muş Alparslan Üniversitesi",
    section: "1071 Malazgirt Kongre ve Kültür Merkezi",
    date: "25 Mayıs 22 - 19:00",
    image: "https://i.imgur.com/PJWb5Fx.png",
    background: "#E31E24",
  },
  {
    place: "Bitlis Eren Üniversitesi",
    section: "Merkezi Konferans Salonu",
    date: "26 Mayıs 22 - 18:00",
    image: "https://i.imgur.com/IMQjSSQ.png",
    background: "#16B1CE",
  },
];
