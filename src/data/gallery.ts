interface VideoItem {
  poster: string;
  videoId: string;
}

interface GalleryItems {
  images: string[];
  posters: string[];
  videos: VideoItem[];
}

const images = [
  "https://i.imgur.com/RylvfA4.jpg",
  "https://i.imgur.com/t8zOLDW.jpg",
  "https://i.imgur.com/qACtImr.jpg",
  "https://i.imgur.com/GRc2SFK.jpg",
  "https://i.imgur.com/VUxJcq1.jpg",
  "https://i.imgur.com/Li07W77.jpg",
  "https://i.imgur.com/Mc7wrPr.jpg",
  "https://i.imgur.com/IoAPaMV.jpg",
  "https://i.imgur.com/KmrcIs6.jpg",
  "https://i.imgur.com/ijtiHk2.jpg",
  "https://i.imgur.com/j8HFASU.jpg",
  "https://i.imgur.com/Zzi0zd5.jpg",
  "https://i.imgur.com/FfP7SGG.jpg",
  "https://i.imgur.com/IDa5PRg.jpg",
  "https://i.imgur.com/qxlEfPz.jpg",
  "https://i.imgur.com/n2LjSBS.jpg",
  "https://i.imgur.com/mwDa0HW.jpg",
  "https://i.imgur.com/DSmYjqx.jpg",
];

const posters = [
  "https://i.imgur.com/NgnY5Bz.jpg",
  "https://i.imgur.com/kdz7u0D.png",
  "https://i.imgur.com/goJJR5x.png",
  "https://i.imgur.com/v5qoTPU.png",
];

const videos: VideoItem[] = [
  {
    poster: "https://i.imgur.com/cf8wHQk.jpg",
    videoId: "719561631",
  },
  {
    poster: "https://i.imgur.com/DKtwEbh.jpg",
    videoId: "707516501",
  },
  {
    poster: "https://i.imgur.com/Jx9A6fd.jpg",
    videoId: "707503958",
  },
  {
    poster: "https://i.imgur.com/un0mbBH.jpg",
    videoId: "707504529",
  },
  {
    poster: "https://i.imgur.com/Uun3418.jpg",
    videoId: "707504815",
  },
];

export const gallery: GalleryItems = {
  images,
  posters,
  videos,
};

export default gallery;
