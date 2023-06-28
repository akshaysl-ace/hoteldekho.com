import NavBar from '../components/NavBar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
          <Component {...pageProps} />
        </main>
      </main>
    </>
  )
}
