import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl font-bold">Hey! I'm Justin.</h1>
        <p className="mx-auto mt-4 max-w-3xl text-2xl">
          I'm a <span className="text-pink-300">frontend developer</span> based in{" "}
          <Link
            href="https://youtu.be/eE_IUPInEuc"
            target="_blank"
            className="text-teal-300 underline-offset-4 transition duration-300 hover:text-teal-500 hover:underline"
          >
            The Netherlands
          </Link>
          . I also work on various other projects. Besides development, I enjoy{" "}
          <Link
            href="https://youtu.be/nQk6vG5iqhA"
            target="_blank"
            className="text-teal-300 underline-offset-4 transition duration-300 hover:text-teal-500 hover:underline"
          >
            gaming with friends
          </Link>
          , taking care of my{" "}
          <Link
            href="https://photos.app.goo.gl/wgKrqpwLoE4EpFGK8"
            target="_blank"
            className="text-teal-300 underline-offset-4 transition duration-300 hover:text-teal-500 hover:underline"
          >
            cat
          </Link>
          , and going to{" "}
          <Link
            href="https://youtu.be/n7ov86BPdR8"
            target="_blank"
            className="text-teal-300 underline-offset-4 transition duration-300 hover:text-teal-500 hover:underline"
          >
            parties
          </Link>
          .
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="https://github.com/Jqstln" title="GitHub" target="_blank" className="group">
            <svg
              width="48"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github transition duration-200 group-hover:stroke-gray-500"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com/Jqstln" title="Twitter" target="_blank" className="group">
            <svg
              width="48"
              height="64"
              viewBox="0 0 300 300.251"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-200 group-hover:fill-gray-600"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
            </svg>
          </Link>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="projects">
            <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
              My Projects
            </button>
          </Link>
          <Link href="contact">
            <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
