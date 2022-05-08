import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// Types
import type { NextPage } from "next";

// Components
import { IframeCard } from "../components/Card/Iframe";

// Data
import { gallery } from "../data/gallery";

const GalleryPage: NextPage = () => {
  const [category, setCategory] = useState<"images" | "videos">("images");
  const { images, videos } = gallery;

  const staggeredContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="container py-16 mx-auto space-y-8 text-2xl">
      <header>
        <Link href="/">
          <a className="flex items-center space-x-2 transition-colors w-max text-white/50 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            <span>Ana Sayfaya Dön</span>
          </a>
        </Link>

        <div className="flex items-center justify-between font-inter">
          <h1 className="font-black text-yellow-500 text-8xl">Galeri</h1>

          <div className="flex items-center text-sm rounded-full cursor-pointer select-none ring-1 ring-yellow-500">
            <button
              type="button"
              className={`px-6 py-4 font-bold uppercase transition-colors rounded-l-full hover:bg-yellow-500
              ${category === "images" ? "bg-yellow-500" : ""}`}
              onClick={() => setCategory("images")}
            >
              Resimler
            </button>

            <button
              type="button"
              className={`px-6 py-4 font-bold uppercase transition-colors rounded-r-full hover:bg-yellow-500
              ${category === "videos" ? "bg-yellow-500" : ""}`}
              onClick={() => setCategory("videos")}
            >
              Videolar
            </button>
          </div>
        </div>
      </header>

      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        variants={staggeredContainer}
        initial="hidden"
        animate="show"
      >
        {category === "images"
          ? images.map((item, index) => (
              <motion.div
                key={`gallery-page-${index}`}
                className="w-full bg-center bg-cover rounded-lg h-52"
                style={{
                  backgroundImage: `url('${item}')`,
                }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                }}
              />
            ))
          : videos.map((video, index) => (
              <IframeCard
                key={`gallery-page-video-${index}`}
                src={`https://player.vimeo.com/video/${video.videoId}`}
                poster={video.poster}
              />
            ))}
      </motion.div>
    </main>
  );
};

export default GalleryPage;
