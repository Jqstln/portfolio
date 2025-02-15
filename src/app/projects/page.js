import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Justinnn — Projects',
};

export default function Projects() {
  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="mb-6 text-6xl font-bold">My projects</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative mx-auto h-80 w-80">
              <Image
                src={`https://s3.justinnn.dev/web/oasemc.png`}
                width={512}
                height={512}
                alt="OaseMC"
                crossOrigin="anonymous"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-xs"
              />
            </div>
            <div className="bg-opacity-60 absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">OaseMC</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                OaseMC, a Dutch Minecraft server with many game modes, but the primary focus is on
                survival.
              </span>
              <Link href="https://oasemc.nl/links">
                <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative mx-auto h-80 w-80">
              <Image
                src={`https://s3.justinnn.dev/web/aloramc.png`}
                width={512}
                height={512}
                alt="AloraMC"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-xs"
              />
            </div>
            <div className="bg-opacity-60 absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">AloraMC</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                AloraMC, an English Minecraft server that focuses on good game modes and currently
                primarily on CaveBlock.
              </span>
              <Link href="https://aloramc.com/">
                <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative mx-auto h-80 w-80">
              <Image
                src={`https://s3.justinnn.dev/web/arc8.png`}
                width={512}
                height={512}
                alt="ARC8"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-xs"
              />
            </div>
            <div className="bg-opacity-60 absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">ARC8</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                ARC8, an discord bot that has a few games, like counting to 100 (without losing) and
                dice rolling and a lot more!
              </span>
              <Link href="https://arc8.fun/">
                <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative mx-auto h-80 w-80">
              <Image
                src={`https://s3.justinnn.dev/web/spectrumspark.png`}
                width={512}
                height={512}
                alt="Spectrumspark"
                className="transform transition-transform duration-300 group-hover:scale-110 group-hover:blur-xs"
              />
            </div>
            <div className="bg-opacity-60 absolute inset-0 flex w-full flex-col items-center justify-center space-y-4 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-bold text-white">Spectrumspark</span>
              <span className="w-full max-w-60 text-center text-lg text-white">
                SpectrumSpark empowers neurodiverse individuals through resources, advocacy, and
                education, fostering inclusion and celebrating unique strengths.
              </span>
              <Link href="https://spectrumspark.org/">
                <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
                  Website
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/">
            <button className="cursor-pointer rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
