import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Minter Prasetyo Rajagukguk</title>
        <meta name="description" content="Generated with create next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="js/script.js"></script>
      </Head>

      <Navbar />
      <div className="w-screen header finisher-header ">
        <div className="row w-full">
          <div className="flex w-full h-[calc(100vh-200px)] justify-center items-center ">
            <div className="container px-2">
              <h1>H e l l o </h1>
              <h1 className="text-5xl">
                Saya? <br />
                <span className="text-sky-400">
                  Minter Prasetyo Rajagukguk{" "}
                </span>
              </h1>
              <h1 className="text-2xl text-start">
                Biasa dipanggil? <span className="text-teal-500">Minter</span>{" "}
              </h1>
              <h1 className="text-xl text-start">
                Lebih ke? <span className="text-sky-500">WebDev</span>
              </h1>
              <h1 className="text-xl text-start">
                Progamming Language?{" "}
                <span className="text-green-600">JS | .NET | Python</span>
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

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
