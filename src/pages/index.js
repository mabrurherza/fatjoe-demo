import Head from "next/head";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fatjoe website graphics preview website</title>
        <meta
          name="description"
          content="Fatjoe website graphics preview website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] w-full grid place-items-center bg-[#14141A]">
        <Link href="/previews/blogger-outreach">
          <button className="py-6 px-12 font-bold bg-[#C3FF03] rounded-lg shadow-md">
            Go to preview page
          </button>
        </Link>
      </main>
    </>
  );
}
