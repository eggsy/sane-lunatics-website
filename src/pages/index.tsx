import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Types
import type { NextPage } from "next";

// Components
import { Popper, Theater } from "../components/Icons";
import { CreditCard } from "../components/CreditCard";
import { PictureCard } from "../components/PictureCard";

// Data
import people from "../data/people";

const HomePage: NextPage = () => (
  <Parallax pages={7} style={{ top: "0", left: "0" }}>
    <ParallaxLayer offset={0} speed={2.5}>
      <div className="bg-[url('/header.jpg')] w-full h-full bg-cover bg-center flex items-center justify-center">
        <h1 className="text-6xl font-black text-center text-white font-amatic lg:text-8xl lg:w-1/2">
          Aklı Başında Deliler Kumpanyası
        </h1>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div className="text-right font-amatic">
        <Theater />

        <p className="text-6xl font-bold text-center text-white">
          {'"'}Bir deli oyun{'"'}
        </p>

        <span className="mr-6 text-2xl text-white/50">﹣ Birileri</span>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={2}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div className="w-full px-6 lg:w-2/3 lg:px-0">
        <div className="space-y-14">
          <h2 className="text-4xl text-center lg:text-6xl font-amatic">
            Önizleme
          </h2>

          <div className="grid w-full gap-6 lg:grid-cols-3">
            <PictureCard image="/1.jpg" />
            <PictureCard image="/2.jpeg" />
            <PictureCard image="/3.jpeg" />
            <PictureCard image="/4.jpeg" />
            <PictureCard image="/5.jpeg" />
            <PictureCard image="/6.jpeg" />
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={3}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div className="space-y-4 text-6xl text-center font-amatic">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Popper />
          <span className="animate-pulse">25 Mayıs 2022</span>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-3xl leading-tight lg:text-2xl">
            2071 Kongre Merkezi
          </span>

          <span className="text-xl leading-tight lg:text-base text-white/50">
            Muş Alparslan Üniversitesi
          </span>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={4}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div>
        <div className="space-y-14">
          <h2 className="text-4xl text-center lg:text-6xl font-amatic">Ekip</h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {people.map((person, index) => (
              <CreditCard key={index} {...person} />
            ))}
          </div>
        </div>
      </div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={5}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div className="text-4xl lg:text-6xl font-amatic">Herkes davetlidir!</div>
    </ParallaxLayer>

    <ParallaxLayer
      offset={6}
      speed={0.5}
      className="flex items-center justify-center"
    >
      <div>
        <a
          href="https://eggsy.xyz/?utm_source=sane-lunatics-website"
          rel="noreferrer"
          className="text-2xl transition-colors border-b border-dashed lg:text-4xl hover:border-white font-amatic border-white/50 text-white/50 hover:text-white"
          lang="en"
        >
          a website by EGGSY
        </a>
      </div>
    </ParallaxLayer>
  </Parallax>
);

export default HomePage;
