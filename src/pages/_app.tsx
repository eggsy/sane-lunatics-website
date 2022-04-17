import Head from "next/head";

/* Import Tailwind CSS */
import "../styles/tailwind.css";

const SaneLunaticsWebsite = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>🎭 Aklı Başında Deliler - 25 Mayıs</title>
    </Head>

    <div className="min-h-screen text-white bg-black ">
      <Component {...pageProps} />
    </div>
  </>
);

export default SaneLunaticsWebsite;
