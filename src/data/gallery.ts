interface VideoItem {
  poster: string;
  videoId: string;
}

interface GalleryItems {
  images: string[];
  videos: VideoItem[];
}

const images: string[] = [
  "/previews/1.jpg",
  "/previews/2.jpg",
  "/previews/3.jpg",
  "/previews/4.jpg",
  "/previews/5.jpg",
  "/previews/6.jpg",
  "https://i.imgur.com/RylvfA4.jpg",
  "https://i.imgur.com/t8zOLDW.jpg",
  "https://i.imgur.com/qACtImr.jpg",
  "https://i.imgur.com/Gp0Sq2i.jpg",
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
  videos,
};

export default gallery;
