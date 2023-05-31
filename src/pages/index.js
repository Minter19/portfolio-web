import Head from "next/head";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Social from "@/components/Social";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minter Prasetyo Rajagukguk</title>
        <meta name="description" content="Generated with create next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>

      <Navbar />
      <Hero />
      
      <Projects />
      <Social />
      
      
      <Script
        src="//code.tidio.co/z21odwvp99ahsfgdbwekclkyb893xhcm.js"
        async=""
      ></Script>
      <Script>
        {`
          new FinisherHeader({
            "count": 10,
            "size": {
              "min": 2,
              "max": 40,
              "pulse": 0
            },
            "speed": {
              "x": {
                "min": 0,
                "max": 0.8
              },
              "y": {
                "min": 0,
                "max": 0.2
              }
            },
            "colors": {
              "background": "#15182e",
              "particles": [
                "#ff926b",
                "#87ddfe",
                "#acaaff",
                "#1bffc2",
                "#f9a5fe"
              ]
            },
            "blending": "screen",
            "opacity": {
              "center": 1,
              "edge": 1
            },
            "skew": -2,
            "shapes": [
              "c",
              "s",
              "t"
            ]
          });

          `}
      </Script>
    </>
  );
}
