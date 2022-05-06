// Types
import type { NextPage } from "next";

// Components
import {
  /* Instagram, */
  Location,
  Mail,
  Share,
  Theater,
} from "../components/Icons";
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
      <div className="absolute inset-x-0 top-0 px-4 py-2 text-center bg-black/90">
        <h3 className="text-4xl font-black text-white lg:text-6xl">
          Aklı Başında Deliler Kumpanyası
        </h3>
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
        <span className="text-2xl font-bold">yer ve zaman</span>

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

        <div className="flex flex-col font-bold leading-tight">
          <span className="text-3xl leading-tight lg:text-2xl">
            1071 Malazgirt Kongre ve Kültür Merkezi
          </span>

          <span className="text-xl leading-tight lg:text-base">
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
              <h3 className="text-3xl font-semibold border-b w-max border-white/20">
                {category.title}
              </h3>

              <div className="text-2xl">{category.people.join("－")}</div>
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

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            {management.map((person, index) => (
              <PeopleCard key={`management-${index}`} {...person} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-4xl border-b border-white/10">Oyuncular</h3>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
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

        <p className="text-2xl font-semibold text-justify">
          Oyuncular “Aklı Başında Deliler Kumpanyası” oyununu sahnelemek ve
          <U>konuyla ilgili bilgi toplamak için</U> ruh ve sinir hastalıkları
          hastanesini ziyaret ederler. Amaçları başhekimi, ekibini ve hastaları
          gözlemlemektir, fakat gittiklerinde başhekim ve ekibi yerlerinde
          yoktur. Bunun üzerine oyuncular başhekimi, ekibini ve hastalarını
          hayal ederler ve <U>maceralarını sahneye taşırlar</U>. Bir sonraki
          bölümde yine oyuncuların hayallerindeki üniversite yıllarında,
          öğrencilerin hocalarıyla yaşadıkları komik durumlar ele alınır. İkinci
          perdenin <U>ilk epizodunda absürt tiyatro</U> örneklerinden bir bölüm
          seyirciye sunulur. Bir ameliyathanede, evlilik yıldönümünü unutan
          doktor; hemşire eşi, anestezi uzmanı ve ameliyathaneyi basan doktorun
          annesi ile bakalım <U>hastanın ameliyatını gerçekleştirebilecek mi</U>
          ? Final epizodunda kendi rengimiz, özümüz ve özlemimiz Geleneksel Türk
          Tiyatrosu{"'"}nun karakterleri <U>Kavuklu ve Pişekar{"'"}</U>
          ın maceralarını izleriz. Tuzsuz Deli Bekir, Memiş, Dadı ve Psiko{"'"}
          da onlara eşlik eder. İki perde komedi oyun, her sahnesiyle delice bir
          delileme vurgusuyla izleyenleri <U>kahkahaya davet ediyor</U>.
        </p>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-10 lg:w-2/4">
        <Title>Yönetmenin Görüşü</Title>

        <div className="space-y-6 text-2xl font-semibold text-justify">
          <p>
            Pandemi süreciyle çok uzak kaldık sanattan ve sanatçıdan...{" "}
            <U>Bir ışık yakmalıydık</U> tekrar sanata dair öğrencilerimizin ve
            bizlerin yüreklerinde. Fakat nasıl? Ekip yok, alt yapı yok, dekor,
            kostüm, aksesuar yok, her şeyden önce çalışmak için yeterli süre
            yok!... Elimizde sadece <U>tecrübeler</U>... Birden her şeyi
            kolaylaştıran, yol açan, fikir veren gerçek <U>bir tiyatro aşığı</U>{" "}
            reji asistanım Doç. Dr. Ayça Kartal çıktı sahneye... Ben hep
            imkânsız dedim kendisine... Çok zor... Yapamayız, olmaz,
            başaramayız! Başarısız olacak bir işe neden imza atmak ister ki
            insan? <U>Başaracağız</U> dedi Ayça Kartal tüm inancıyla!
          </p>

          <p>
            Eksikleri kapattık, bulduk buluşturduk, sahnede olmayı yürekten
            isteyen, <U>tüm gücüyle çalışan</U> ve asla yorulmayan bir ekip
            kurduk. Başladık metni didiklemeye... Provalar ilerlerken, ekibin
            özverili çalışmalarıyla sahnelemek istediklerimin gerçek olduğunu
            görünce <U>çok duygulandım</U> haliyle... Her geçen provanın üzerine
            koyarak, birbirimize olan güveni arttırdık. Bence şartlar dâhilinde
            sahnede var olabileceğimiz <U>en üst</U> seviyeye geldik. Geldik
            ama, bireysel performanslarla değil, <U>gerçek bir ekip</U>{" "}
            çalışmasıyla geldik.
          </p>

          <p>
            Öncelikle reji asistanım, arkadaşım, dostum Doç. Dr. Ayça Kartal
            {"'"}a, can hıraş sahnede koşturan sahne amirlerimiz Mehmet Rıfkı
            Baba ve Adem Kaplan{"'"}a, oyunun canlı müziklerini hiç usanmadan
            bizlerle çalışan ve koromuzu yöneten Öğr. Gör. Zeyneb Türkoğlu{"'"}
            na, ekibe sonradan katılan, fakat sanki ekip kurulmadan önce ekipte
            zaten olan ışık-ses ve teknik konularda kolumuz kanadımız Batuhan
            Karadaş ve Abdulbaki Dursun{"'"}a, kostümlerimizi tasarlayan ve
            diken canım eşim Meryem Öcal{"'"}a ve akşam dersten çıkıp her gün
            provalara koşa koşa gelen fedakâr, sahne aşığı oyuncularımıza sonsuz
            teşekkürlerimi sunuyorum... <U>İyi ki varsınız...</U>{" "}
            <U>İyi ki hep beraberiz...</U> 🎉
          </p>

          <p>
            Ve <U>işte başlıyor</U> Aklı Başında Deliler Kumpanyası...Işığınız
            ve alkışınız bol olsun, perdeleriniz hiç kapanmasın.....{" "}
            <U>Sanatla kalın!</U>
          </p>
        </div>
      </div>
    </Layer>

    <Layer>
      <div className="space-y-10 lg:w-2/4">
        <Title>Bağlantılar</Title>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* <ShareItem
            icon={Instagram}
            title="Instagram Sayfamız"
            action="openOnWeb"
            value="https://instagram.com/aklibasindadeliler"
          /> */}

          <ShareItem
            icon={Share}
            title="Sayfa Bağlantısını Kopyala"
            action="copyToClipboard"
            value={WEBSITE_URL}
          />

          <ShareItem
            icon={Mail}
            title="Yönetmen E-Posta"
            action="openMail"
            value="e.ocal@alparslan.edu.tr"
          />

          <ShareItem
            icon={Mail}
            title="Reji Assistanı E-Posta"
            action="openMail"
            value="a.kartal@alparslan.edu.tr"
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
        className="flex flex-col text-4xl text-center transition-colors border-b border-dashed hover:border-white border-white/50 text-white/50 hover:text-white"
        lang="en"
      >
        <span>a website by:</span>
        <span>Abdulbaki {"'EGGSY'"} Dursun</span>
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

const U: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="border-b-[0.5px] hover:border-white/50 transition-colors border-white/30 ml-1">
    {children}
  </span>
);

export default HomePage;
