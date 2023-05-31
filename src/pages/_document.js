import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <script src="js/finisher-header.es5.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
        
      </Head>
      <body className='overflow-x-hidden  font-orbitron'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
