import Document, { Html, Head, NextScript, Main } from 'next/Document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-CA">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
