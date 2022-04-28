// Types
import type { NextPage } from "next";

// Components
import { Location, Mail, Share, Theater } from "../components/Icons";
import { PreviewCard } from "../components/Card/Preview";
import { PeopleCard } from "../components/Card/People";
import { Title } from "../components/Title";
import { ShareItem } from "../components/ShareItem";

// Data
import people, { management } from "../data/people";

// Functions
import createArray from "../functions/createArray";

// Static data
const PEOPLE_AMOUNT = 21;
const WEBSITE_URL = "https://sane-lunatics.netlify.app";

const HomePage: NextPage = () => (
  <main className="space-y-36">
    <Layer background="/header.jpg">
      <div className="font-black text-white">
        <div className="absolute inset-x-0 top-0 px-4 py-2 text-center bg-black/50">
          <h3 className="text-4xl lg:text-6xl">
            Aklı Başında Deliler Kumpanyası
          </h3>
        </div>
      </div>

      <div className="absolute flex items-center justify-between mx-auto space-x-16 text-2xl text-white inset-x-6 lg:w-1/2 bottom-8">
        <span className="border-b border-white/25">2 Perde</span>
        <span className="border-b border-white/25">Bir Komedi Oyunu</span>
      </div>
    </Layer>

    <Layer>
      <div className="text-center lg:text-right">
        <div className="hidden lg:block">
          <Theater />
        </div>

        <p className="text-6xl font-bold text-white">
          {'"'}Ne yaparsan yap, önce provasını yap!{'"'}
        </p>

        <span className="mr-6 text-2xl text-white/50">﹣ Kumpanya Ekibi</span>
      </div>
    </Layer>

    <Layer>
      <div className="w-full lg:w-2/3 space-y-14">
        <Title>Kumpanyadan Kareler</Title>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {createArray(6).map((_, index) => (
            <PreviewCard key={`preview-${index}`} image={`/${index + 1}.jpg`} />
          ))}
        </div>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-6 text-center lg:space-y-10">
        <span className="text-2xl text-white/50">yer ve zaman</span>

        <div className="flex items-center text-8xl">
          {"25 Mayıs 2022".split("").map((item, index) => (
            <div
              key={`date-${item}-${index}`}
              className="animate-bounce"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-3xl leading-tight opacity-75 lg:text-2xl">
            1071 Malazgirt Kongre ve Kültür Merkezi
          </span>

          <span className="text-xl leading-tight lg:text-base text-white/50">
            Muş Alparslan Üniversitesi − Ana Salon
          </span>
        </div>
      </div>
    </Layer>

    <Layer>
      <div className=" space-y-14 lg:w-1/3">
        <Title>Ekip</Title>

        <div className="space-y-8">
          {people.map((category, index) => (
            <div key={`category-${index}`} className="space-y-2">
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

    <Layer>
      <div className="w-full space-y-20 lg:w-2/3">
        <Title>Kadromuz</Title>

        <div className="space-y-4">
          <h3 className="text-4xl border-b border-white/10 ">Yönetim</h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
            {management.map((person, index) => (
              <PeopleCard key={`manegement-${index}`} {...person} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-4xl border-b border-white/10">Oyuncular</h3>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
            {createArray(PEOPLE_AMOUNT).map((_, index) => (
              <PeopleCard key={`people-${index}`} image={`/${index + 1}.jpg`} />
            ))}
          </div>
        </div>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-10 lg:w-2/4">
        <Title>Oyunun Konusu</Title>

        <p className="text-2xl text-center text-white/50">
          Aklı Başında Deliler... Aklı... Başında... Deliler... Aklı Başında...
          Deliler! Aklı! Başında! DELİLER!! AKLI BAŞINDA DELİLER! Deli- deli...
          Aklı başında...
        </p>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-10 lg:w-2/4">
        <Title>Yönetmenin Görüşü</Title>

        <p className="text-2xl text-center text-white/50">
          Valla bence her şey çok güzel. Harika bir gösteri olacak. Görülmedik
          bir şey olacak. Çok komik olacak. Güleceğiz. Canım öğrencilerimle
          başaracağız bu oyunu. Zamanında çıkartacağız. Hazırlanıyoruz.
        </p>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-10 lg:w-2/4">
        <Title>Bağlantılar</Title>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <ShareItem
            icon={Mail}
            title="Dr. Erdinç Öcal ﹣ E-Posta"
            action="openMail"
            value="e.ocal@alparslan.edu.tr"
          />

          <ShareItem
            icon={Mail}
            title="Doç. Dr. Ayça Kartal ﹣ E-Posta"
            action="openMail"
            value="a.kartal@alparslan.edu.tr"
          />

          <ShareItem
            icon={Share}
            title="Sayfa Bağlantısını Kopyala"
            action="copyToClipboard"
            value={WEBSITE_URL}
          />

          <ShareItem
            icon={Location}
            title="Konumu Haritada Göster"
            action="openOnWeb"
            value="https://goo.gl/maps/vTVkqNH2T2KBAHuk9"
          />
        </div>
      </div>
    </Layer>

    <Layer>
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
