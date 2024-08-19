import React from 'react';
import './globals.css';
import './pages-styles.css';
import RootLayout from './layout';
import Loading from './components/Loading'; // Import the Loading component


function MyApp({ Component, pageProps }) {


  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;