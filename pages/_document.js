import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>
            {`body { background-color: #069}`}
          </style>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </html>
    )
  }
}
