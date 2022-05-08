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

          {/* Amatic */}
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>

          {/* Inter */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
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
