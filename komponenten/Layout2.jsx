import Head from "next/head";
import Navigation from './Navigation'
import Fusszeile from './Fusszeile'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Versuch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navigation/>
     {children}
      <Fusszeile/>
      </div>
  );
}

