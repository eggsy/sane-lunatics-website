// Types
import type { NextPage } from "next";

// Components
import { Theater } from "../components/Icons";
import { PictureCard } from "../components/Card/Picture";
import { PeopleCard } from "../components/Card/People";
import { Title } from "../components/Title";

// Data
import people from "../data/people";
import createArray from "../functions/createArray";

// Static data
const PEOPLE_AMOUNT = 20;

const HomePage: NextPage = () => (
  <main className="space-y-36">
    <Layer background="/header.jpg">
      <h1 className="text-6xl font-black text-center text-white drop-shadow-xl lg:text-8xl lg:w-1/2">
        Aklı Başında Deliler Kumpanyası
      </h1>
    </Layer>

    <Layer className="flex items-center px-6 lg:justify-center lg:px-0">
      <div className="lg:text-right">
        <div className="hidden lg:block">
          <Theater />
        </div>

        <p className="text-6xl font-bold text-left text-white lg:text-center">
          {'"'}Ne yaparsan yap, önce provasını yap!{'"'}
        </p>

        <span className="mr-6 text-2xl text-white/50">﹣ Birisi</span>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center px-6 lg:px-0">
      <div className="w-full lg:w-2/3 space-y-14">
        <Title>Önizleme</Title>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          <PictureCard image="/1.jpg" />
          <PictureCard image="/2.jpeg" />
          <PictureCard image="/3.jpeg" />
          <PictureCard image="/4.jpg" />
          <PictureCard image="/5.jpeg" />
          <PictureCard image="/6.jpg" />
        </div>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center px-6 lg:px-0">
      <div className="space-y-4 text-center">
        <div>
          <span className="text-2xl text-white/50">yer ve zaman</span>
          <h3 className="animate-pulse text-8xl">25 Mayıs 2022</h3>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-3xl leading-tight opacity-75 lg:text-2xl">
            1071 Kongre Merkezi
          </span>

          <span className="text-xl leading-tight lg:text-base text-white/50">
            Muş Alparslan Üniversitesi
          </span>
        </div>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center px-6 lg:px-0">
      <div className="w-full mx-auto space-y-14 lg:w-2/3 ">
        <Title>Ekip</Title>

        <div className="grid gap-10 lg:grid-cols-2">
          {people.map((category, index) => (
            <div key={`category-${index}`} className="space-y-2 ">
              <h3 className="text-3xl border-b w-max text-white/80 border-white/20">
                {category.title}
              </h3>

              <div className="text-2xl text-white/50">
                {category.people.join("－")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center px-6 lg:px-0">
      <div className="w-full space-y-14 lg:w-2/3">
        <Title>Karakterler</Title>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {createArray(PEOPLE_AMOUNT).map((_, index) => (
            <PeopleCard key={`people-${index}`} image={`/${index + 1}.jpg`} />
          ))}
        </div>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center px-6 lg:px-0">
      <div className="mx-auto space-y-10 lg:w-2/4">
        <Title>Yönetmenin Görüşü</Title>

        <p className="text-2xl text-center text-white/50">
          Valla bence her şey çok güzel. Harika bir gösteri olacak. Görülmedik
          bir şey olacak. Çok komik olacak. Güleceğiz. Canım öğrencilerimle
          başaracağız bu oyunu. Zamanında çıkartacağız. Hazırlanıyoruz.
        </p>
      </div>
    </Layer>

    <Layer className="flex items-center justify-center">
      <a
        href="https://eggsy.xyz/?utm_source=sane-lunatics-website"
        rel="noreferrer"
        target="_blank"
        className="text-4xl transition-colors border-b border-dashed hover:border-white border-white/50 text-white/50 hover:text-white"
        lang="en"
      >
        a website by EGGSY
      </a>
    </Layer>
  </main>
);

const Layer: React.FC<{
  children: React.ReactNode;
  background?: string;
  className?: string;
}> = ({ children, background }) => (
  <div
    className={`relative flex items-center justify-center w-full min-h-screen ${
      background ? "bg-cover bg-center" : ""
    }`}
    style={{
      backgroundImage: `url('${background}')`,
    }}
  >
    <div className="flex items-center justify-center w-full h-full px-6 lg:px-0">
      {children}
    </div>
  </div>
);

export default HomePage;
