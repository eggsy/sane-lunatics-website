import Document, { Html, Head, Main, NextScript } from "next/document";

class SaneLunaticsDocument extends Document {
  gtag = "G-27G9SFP45J";

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

          {/* Google G-Tag */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${this.gtag}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${this.gtag}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
