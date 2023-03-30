import Head from "next/head";
import Image from "next/image";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="overflow-hidden">
        <nav className="bg-white w-full grid place-items-center px-5">
          <div className="max-w-7xl w-full py-4 flex justify-between items-center">
            <div>
              <svg
                width="115"
                height="40"
                viewBox="0 0 115 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.97 14.44H8.75V29H2.765V14.44H0.595V9.47H2.765V8.91C2.765 6.50667 3.45333 4.68667 4.83 3.45C6.20667 2.19 8.225 1.56 10.885 1.56C11.3283 1.56 11.655 1.57167 11.865 1.595V6.67C10.7217 6.6 9.91667 6.76333 9.45 7.16C8.98333 7.55667 8.75 8.26833 8.75 9.295V9.47H11.97V14.44ZM13.5923 19.2C13.5923 17.1933 13.9656 15.4317 14.7123 13.915C15.4823 12.3983 16.5206 11.2317 17.8273 10.415C19.134 9.59833 20.5923 9.19 22.2023 9.19C23.579 9.19 24.7806 9.47 25.8073 10.03C26.8573 10.59 27.6623 11.325 28.2223 12.235V9.47H34.2073V29H28.2223V26.235C27.639 27.145 26.8223 27.88 25.7723 28.44C24.7456 29 23.544 29.28 22.1673 29.28C20.5806 29.28 19.134 28.8717 17.8273 28.055C16.5206 27.215 15.4823 26.0367 14.7123 24.52C13.9656 22.98 13.5923 21.2067 13.5923 19.2ZM28.2223 19.235C28.2223 17.7417 27.8023 16.5633 26.9623 15.7C26.1456 14.8367 25.1423 14.405 23.9523 14.405C22.7623 14.405 21.7473 14.8367 20.9073 15.7C20.0906 16.54 19.6823 17.7067 19.6823 19.2C19.6823 20.6933 20.0906 21.8833 20.9073 22.77C21.7473 23.6333 22.7623 24.065 23.9523 24.065C25.1423 24.065 26.1456 23.6333 26.9623 22.77C27.8023 21.9067 28.2223 20.7283 28.2223 19.235ZM49.4222 23.925V29H46.3772C44.2072 29 42.5155 28.475 41.3022 27.425C40.0889 26.3517 39.4822 24.6133 39.4822 22.21V14.44H37.1022V9.47H39.4822V4.71H45.4672V9.47H49.3872V14.44H45.4672V22.28C45.4672 22.8633 45.6072 23.2833 45.8872 23.54C46.1672 23.7967 46.6339 23.925 47.2872 23.925H49.4222ZM55.7309 7.44C54.6809 7.44 53.8176 7.13667 53.1409 6.53C52.4876 5.9 52.1609 5.13 52.1609 4.22C52.1609 3.28667 52.4876 2.51667 53.1409 1.91C53.8176 1.28 54.6809 0.964998 55.7309 0.964998C56.7576 0.964998 57.5976 1.28 58.2509 1.91C58.9276 2.51667 59.2659 3.28667 59.2659 4.22C59.2659 5.13 58.9276 5.9 58.2509 6.53C57.5976 7.13667 56.7576 7.44 55.7309 7.44ZM58.7409 31.52C58.7409 33.9233 58.1343 35.65 56.9209 36.7C55.7076 37.7733 54.0159 38.31 51.8459 38.31H49.5009V33.235H50.9359C51.5893 33.235 52.0559 33.1067 52.3359 32.85C52.6159 32.5933 52.7559 32.1733 52.7559 31.59V9.47H58.7409V31.52ZM71.934 29.28C70.0207 29.28 68.294 28.8717 66.754 28.055C65.2374 27.2383 64.0357 26.0717 63.149 24.555C62.2857 23.0383 61.854 21.265 61.854 19.235C61.854 17.2283 62.2974 15.4667 63.184 13.95C64.0707 12.41 65.284 11.2317 66.824 10.415C68.364 9.59833 70.0907 9.19 72.004 9.19C73.9174 9.19 75.644 9.59833 77.184 10.415C78.724 11.2317 79.9374 12.41 80.824 13.95C81.7107 15.4667 82.154 17.2283 82.154 19.235C82.154 21.2417 81.699 23.015 80.789 24.555C79.9024 26.0717 78.6774 27.2383 77.114 28.055C75.574 28.8717 73.8474 29.28 71.934 29.28ZM71.934 24.1C73.0774 24.1 74.0457 23.68 74.839 22.84C75.6557 22 76.064 20.7983 76.064 19.235C76.064 17.6717 75.6674 16.47 74.874 15.63C74.104 14.79 73.1474 14.37 72.004 14.37C70.8374 14.37 69.869 14.79 69.099 15.63C68.329 16.4467 67.944 17.6483 67.944 19.235C67.944 20.7983 68.3174 22 69.064 22.84C69.834 23.68 70.7907 24.1 71.934 24.1ZM103.739 18.92C103.739 19.48 103.704 20.0633 103.634 20.67H90.0892C90.1825 21.8833 90.5675 22.8167 91.2442 23.47C91.9442 24.1 92.7958 24.415 93.7992 24.415C95.2925 24.415 96.3308 23.785 96.9142 22.525H103.284C102.958 23.8083 102.363 24.9633 101.499 25.99C100.659 27.0167 99.5975 27.8217 98.3142 28.405C97.0308 28.9883 95.5958 29.28 94.0092 29.28C92.0958 29.28 90.3925 28.8717 88.8992 28.055C87.4058 27.2383 86.2392 26.0717 85.3992 24.555C84.5592 23.0383 84.1392 21.265 84.1392 19.235C84.1392 17.205 84.5475 15.4317 85.3642 13.915C86.2042 12.3983 87.3708 11.2317 88.8642 10.415C90.3575 9.59833 92.0725 9.19 94.0092 9.19C95.8992 9.19 97.5792 9.58667 99.0492 10.38C100.519 11.1733 101.663 12.305 102.479 13.775C103.319 15.245 103.739 16.96 103.739 18.92ZM97.6142 17.345C97.6142 16.3183 97.2642 15.5017 96.5642 14.895C95.8642 14.2883 94.9892 13.985 93.9392 13.985C92.9358 13.985 92.0842 14.2767 91.3842 14.86C90.7075 15.4433 90.2875 16.2717 90.1242 17.345H97.6142ZM109.697 29.28C108.647 29.28 107.783 28.9767 107.107 28.37C106.453 27.74 106.127 26.97 106.127 26.06C106.127 25.1267 106.453 24.345 107.107 23.715C107.783 23.085 108.647 22.77 109.697 22.77C110.723 22.77 111.563 23.085 112.217 23.715C112.893 24.345 113.232 25.1267 113.232 26.06C113.232 26.97 112.893 27.74 112.217 28.37C111.563 28.9767 110.723 29.28 109.697 29.28Z"
                  fill="#15141A"
                ></path>
              </svg>
            </div>
            <ul className="font-poppins flex gap-4 text-sm md:text-lg md:gap-12">
              <li>Services</li>
              <li>Tools</li>
              <li>Academy</li>
            </ul>
          </div>
        </nav>

        <section className="w-full bg-[#15141A] grid place-items-center">
          <div className="flex flex-col md:flex-row-reverse md:max-w-7xl md:w-full md:my-32">
            <div className=" md:flex-1">
              <Rive
                src="/fatjoe-demo-4.riv"
                className=" w-full h-[380px] md:h-[600px] mt-5 md:mt-0"
              />
            </div>
            <div className=" px-5 md:flex-1 mt-5">
              <h1 className="font-bold font-poppins text-[34px] md:text-[42px] text-white leading-tight">
                The #1 Blogger Outreach <br /> Service for SEOs & Agencies.
              </h1>
              <img src="/left.png" className="w-[500px] mt-10" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
