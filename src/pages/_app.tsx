import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { Layout }from '../components/layouts';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    <div id="modal-root"></div>
    </>
  );
}

export default MyApp
