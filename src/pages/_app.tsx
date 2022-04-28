import Head from "next/head";

// Tailwind CSS
import "../styles/tailwind.css";

// Meta
const meta = {
  title: "Aklı Başında Deliler ﹣ 25 Mayıs'ta Sahnede!",
  description:
    "Erdinç Öcal'ın yazıp yönettiği 'Aklı Başında Deliler', 25 Mayıs'ta Muş Alparslan Üniversitesi 1071 Malazgirt Kongre ve Kültür Merkezi'nde sahne alacak! Detaylı bilgi için tıklayın.",
};

const SaneLunaticsWebsite = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.png" />

      {/* Open-Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />

      {/* Twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>

    <div className="min-h-screen text-white bg-black font-amatic ">
      <Component {...pageProps} />
    </div>
  </>
);

export default SaneLunaticsWebsite;
