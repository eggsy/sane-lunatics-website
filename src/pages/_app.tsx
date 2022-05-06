import Head from "next/head";
import Script from "next/script";

// Tailwind CSS
import "../styles/tailwind.css";

// Meta
const meta = {
  title: "Aklı Başında Deliler ﹣ 25 Mayıs'ta Sahnede!",
  description:
    "Erdinç Öcal'ın yazıp yönettiği 'Aklı Başında Deliler', 25 Mayıs'ta Muş Alparslan Üniversitesi 1071 Malazgirt Kongre ve Kültür Merkezi'nde sahne alacak! Detaylı bilgi için tıklayın.",
  image: "/header.jpg",
  // googleMeasurementId: "",
};

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

    {/* Google Analytics
      TODO add analytics after buying the domain
    */}
    {/* <Script
      src={
        "https://www.googletagmanager.com/gtag/js?id=" +
        meta.googleMeasurementId
      }
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${meta.googleMeasurementId}');
        `}
    </Script> */}
  </>
);

export default SaneLunaticsWebsite;
