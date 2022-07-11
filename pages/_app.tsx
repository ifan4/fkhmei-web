import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import 'draft-js/dist/Draft.css';
function MyApp({ Component, pageProps }: AppProps) {
  // import bootstrap for js features
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, []);
  return(
    <>
    <Head>
        <title>FKHMEI WIL-7</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
    </> 
  )
}

export default MyApp
