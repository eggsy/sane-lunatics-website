import Link from "next/link";
import Head from "next/head";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Types
import type { NextPage } from "next";

// Components
import { IframeCard } from "../components/Card/Iframe";

// Functions
import { getProxiedImageUrl } from "../functions/getProxiedImageUrl";

// Data
import { gallery } from "../data/gallery";

const GalleryPage: NextPage = () => {
  const [category, setCategory] = useState<"images" | "videos" | "posters">(
    "images"
  );

  const baseButtonClasses =
    "px-4 py-2 lg:px-6 lg:py-4 font-bold uppercase transition-colors hover:bg-yellow-500";

  // Memo
  const getColsAmount = useMemo(() => {
    if (category === "images" || category === "videos")
      return "lg:grid-cols-4 ";
    else if (category === "posters") return "lg:grid-cols-4";
  }, [category]);

  // Static
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
    <>
      <Head>
        <title>Galeri - Aklı Başında Deliler Kumpanyası</title>
      </Head>

      <main className="container px-6 py-16 mx-auto space-y-8 text-2xl md:px-4 lg:px-0">
        <header>
          <Link href="/">
            <a className="flex items-center justify-center space-x-2 transition-colors lg:w-max lg:justify-start text-white/50 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden w-5 h-5 lg:block"
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

          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row font-inter">
            <h1 className="font-black text-yellow-500 text-8xl">Galeri</h1>

            <div className="flex flex-wrap items-center text-sm rounded-full cursor-pointer select-none ring-1 ring-yellow-500">
              <button
                type="button"
                className={`${baseButtonClasses} rounded-l-full ${
                  category === "images" ? "bg-yellow-500" : ""
                }`}
                onClick={() => setCategory("images")}
              >
                Resimler
              </button>

              <button
                type="button"
                className={`${baseButtonClasses} ${
                  category === "posters" ? "bg-yellow-500" : ""
                }`}
                onClick={() => setCategory("posters")}
              >
                Afişler
              </button>

              <button
                type="button"
                className={`${baseButtonClasses} rounded-r-full ${
                  category === "videos" ? "bg-yellow-500" : ""
                }`}
                onClick={() => setCategory("videos")}
              >
                Videolar
              </button>
            </div>
          </div>
        </header>

        <motion.div
          className={`grid gap-4 md:grid-cols-2 ${getColsAmount}`}
          variants={staggeredContainer}
          initial="hidden"
          animate="show"
        >
          {PageView(category)}
        </motion.div>
      </main>
    </>
  );
};

const PageView = (category: "images" | "videos" | "posters") => {
  const { images, posters, videos } = gallery;

  if (category === "images")
    return images.map((item, index) => (
      <motion.div
        key={`gallery-image-item-${index}`}
        className="w-full bg-center bg-cover rounded-lg bg-white/10 h-52"
        style={{
          backgroundImage: `url('${getProxiedImageUrl(item)}')`,
        }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }}
        whileHover={{
          scale: 1.025,
        }}
      />
    ));
  else if (category === "posters")
    return posters.map((item, index) => (
      <motion.div
        key={`gallery-poster-item-${index}`}
        className="w-full bg-center bg-cover bg-white/10 rounded-lg h-[65vh]"
        style={{
          backgroundImage: `url('${getProxiedImageUrl(item)}')`,
        }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }}
        whileHover={{
          scale: 1.025,
        }}
      />
    ));

  return videos.map((video, index) => (
    <IframeCard
      key={`gallery-iframe-item-${index}`}
      src={`https://player.vimeo.com/video/${video.videoId}`}
      poster={video.poster}
    />
  ));
};

export default GalleryPage;
