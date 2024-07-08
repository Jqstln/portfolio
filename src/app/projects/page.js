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
        <h1 className="mb-6 text-6xl font-bold">My projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative h-80 w-80">
              <Image
                src={`https://cdn.justinnn.dev/web/oasemc.png`}
                layout="fill"
                objectFit="cover"
                alt="OaseMC"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
            </div>
            <div className="absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">OaseMC</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                OaseMC, a Dutch Minecraft server with many game modes, but the primary focus is on
                survival.
              </span>
              <Link href="https://oasemc.nl/links">
                <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative h-80 w-80">
              <Image
                src={`https://cdn.justinnn.dev/web/aloramc.png`}
                layout="fill"
                objectFit="cover"
                alt="AloraMC"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
            </div>
            <div className="absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">AloraMC</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                AloraMC, an English Minecraft server that focuses on good game modes and currently
                primarily on CaveBlock.
              </span>
              <Link href="https://aloramc.com/">
                <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative h-80 w-80">
              <Image
                src={`https://cdn.justinnn.dev/web/arc8.png`}
                layout="fill"
                objectFit="cover"
                alt="ARC8"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
            </div>
            <div className="absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">ARC8</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                ARC8, an discord bot that has a few games, like counting to 100 (without losing) and dice rolling and a lot more!
              </span>
              <Link href="https://arc8.fun/">
                <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative h-80 w-80">
              <Image
                src={`https://cdn.justinnn.dev/web/newproject.png`}
                layout="fill"
                objectFit="cover"
                alt="New Project"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
            </div>
            <div className="absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">OaseMC</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                OaseMC, a Dutch Minecraft server with many game modes, but the primary focus is on
                survival.
              </span>
              <Link href="https://google.com/search?q=oasemc">
                <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>
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
