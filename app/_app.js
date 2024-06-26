import './globals.css';
import './pages-styles.css';
import RootLayout from './layout';

function MyApp({ Component, pageProps }) {
  return (
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
  );
}

export default MyApp;