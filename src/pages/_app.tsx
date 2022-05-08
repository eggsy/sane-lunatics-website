import Head from "next/head";
import Router from "next/router";

// Modules
import NProgress from "nprogress";

// Import global CSS
import "../styles/tailwind.css";
import "../styles/globals.css";
import "nprogress/nprogress.css";

// Meta
const meta = {
  title: "Aklı Başında Deliler Kumpanyası ﹣ 25 Mayıs'ta Sahnede!",
  description:
    "Erdinç Öcal'ın yazıp yönettiği 'Aklı Başında Deliler Kumpanyası', 25 Mayıs'ta Muş Alparslan Üniversitesi 1071 Malazgirt Kongre ve Kültür Merkezi'nde sahne alacak! Detaylı bilgi için tıklayın.",
  image: "/people.jpg",
};

// NProgress settings and events
NProgress.configure({
  showSpinner: true,
  parent: "body",
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done(true));
Router.events.on("routeChangeError", () => NProgress.done(true));

const SaneLunaticsWebsite = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.png" />

      <meta name="author" content="Abdulbaki 'EGGSY' Dursun" />
      <meta
        name="keywords"
        content="Tiyatro, Muş, Aklı Başında Deliler, Komedi, Eğlence, Şov"
      />

      {/* Open-Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />

      {/* Twitter */}
      <meta name="twitter:creator" content="@eggsydev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>

    <div className="min-h-screen text-white bg-black font-amatic ">
      <Component {...pageProps} />
    </div>
  </>
);

export default SaneLunaticsWebsite;
