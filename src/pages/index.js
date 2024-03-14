import Confetti from 'confetti-js';
import { Inter } from "next/font/google";
import { Github, Twitter } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const currentYear = new Date().getFullYear();

  const confetti = () => {
    const settings = { target: 'tada' };
    const confetti = new Confetti(settings);
    confetti.render();
    setTimeout(() => confetti.clear(), 700);
    const audio = new Audio('/confetti.mp3');
    audio.play();
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between pt-12 md:pt-48">
      <div className="header text-center text-slate-400 mx-auto">
        <h1 className="font-bold text-7xl bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent md:whitespace-nowrap">Hey! <br className="md:hidden" /> I&apos;m Justin</h1>
        <h2 className="text-2xl text-center font-bold">Full Stack Web Developer</h2>
        <div className="about pt-12 max-w-md mx-auto relative">
          <h3 className="text-2xl text-center">A developer based in <span className="text-2xl rounded-lg underline-offset-4 underline"><a href='https://en.wikipedia.org/wiki/Rotterdam' className='cursor-pointer hover:text-blue-300 duration-300 transition'>The Netherlands</a></span>. Makes stuff for a living, crazy huh? <span role="img" aria-label="party emoji" onClick={confetti} onMouseEnter={confetti} className='cursor-pointer'>🎉</span></h3>
        </div>
      </div>
      <canvas id="tada" className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"></canvas>
      <div className="pb-4 md:pb-48 flex gap-4 md:pt-12 sm:pt-12">
        <a className="bg-emerald-900 rounded-full w-40 h-14 hover:bg-emerald-500 duration-200 transition text-white text-center font-semibold flex justify-center items-center px-4 py-2" href="/projects">
          <span className="text-xl">Projects</span>
        </a>
        <a className="bg-emerald-900 rounded-full w-40 h-14 hover:bg-emerald-500 duration-200 transition text-white text-center font-semibold flex justify-center items-center px-4 py-2" href="/contact">
          <span className="text-xl">Contact Me</span>
        </a>
      </div>
      <div className="socials flex gap-4 pt-4">
        <a href="https://github.com/Jqstln" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-200 duration-300 transition">
          <Github size={48} />
        </a>
        <a href="https://x.com/Jqstln" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-200 duration-300 transition">
          <Twitter size={48} />
        </a>
      </div>
      <footer className="py-4 text-center">
        <p className="text-gray-600">© {currentYear} - Made with 💖 by jqstln</p>
      </footer>
    </main>
  );
}
