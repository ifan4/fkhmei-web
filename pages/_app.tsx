import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  // import bootstrap for js features
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
