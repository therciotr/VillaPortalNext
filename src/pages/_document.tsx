import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
          <title>Villa Portal</title>
        <Head>
     
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Averia+Libre:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}
