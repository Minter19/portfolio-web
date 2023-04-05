import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
        
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
