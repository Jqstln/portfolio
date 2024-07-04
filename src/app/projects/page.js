import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Justin's Portfolio</title>
      </Head>
      <div className="mb-10 text-center">
        <h1 className="mb-6 text-6xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/projects/oasemc" className="group relative overflow-hidden rounded-lg">
            <Image
              src={`https://cdn.justinnn.dev/web/oasemc.png`}
              width={384}
              height={384}
              alt="Project 1"
              className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">OaseMC</span>
            </div>
          </Link>
          <Link href="" className="group relative overflow-hidden rounded-lg">
            <Image
              src={`https://placehold.co/384x384`}
              width={384}
              height={384}
              alt="Project 1"
              className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">Project 2</span>
            </div>
          </Link>
          <Link href="" className="group relative overflow-hidden rounded-lg">
            <Image
              src={`https://placehold.co/384x384`}
              width={384}
              height={384}
              alt="Project 1"
              className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">Project 3</span>
            </div>
          </Link>
        </div>
        <div className="mt-10">
          <Link href="/">
            <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
