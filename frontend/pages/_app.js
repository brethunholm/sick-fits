/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Page from '../components/Page';

// TODO swap with our own
// import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
