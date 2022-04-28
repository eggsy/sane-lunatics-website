import Document, { Html, Head, Main, NextScript } from "next/document";

class SaneLunaticsDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head lang="tr">
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body lang="tr">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SaneLunaticsDocument;
