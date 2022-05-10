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
  "https://i.imgur.com/Li07W77.jpg",
  "https://i.imgur.com/h03xZ0z.jpg",
  "https://i.imgur.com/Mc7wrPr.jpg",
  "https://i.imgur.com/FfP7SGG.jpg",
  "https://i.imgur.com/qxlEfPz.jpg",
  "https://i.imgur.com/n2LjSBS.jpg",
  "https://i.imgur.com/RylvfA4.jpg",
  "https://i.imgur.com/t8zOLDW.jpg",
  "https://i.imgur.com/qACtImr.jpg",
  "https://i.imgur.com/Gp0Sq2i.jpg",
];

const posters = [
  "https://i.imgur.com/NgnY5Bz.jpg",
  "https://i.imgur.com/r63xhQy.png",
  "https://i.imgur.com/DkSfo7P.png",
];

const videos: VideoItem[] = [
  {
    poster: "https://i.imgur.com/Uun3418.jpg",
    videoId: "707504815",
  },
  {
    poster: "https://i.imgur.com/un0mbBH.jpg",
    videoId: "707504529",
  },
  {
    poster: "https://i.imgur.com/Jx9A6fd.jpg",
    videoId: "707503958",
  },
  {
    poster: "https://i.imgur.com/DKtwEbh.jpg",
    videoId: "707516501",
  },
];

export const gallery: GalleryItems = {
  images,
  posters,
  videos,
};

export default gallery;
