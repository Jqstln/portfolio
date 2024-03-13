/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import { Github, Twitter } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-12 md:pt-48">
      <div className="header text-center text-slate-400 mx-auto">
        <h1 className="font-bold text-7xl bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent md:whitespace-nowrap">Hey! <br className="md:hidden" /> I'm Justin</h1>
        <h2 className="text-2xl text-center font-bold">Full Stack Web Developer</h2>
        <div className="about pt-12 max-w-md mx-auto">
          <h3 className="text-2xl text-center">A developer based in The Netherlands. Makes stuff for a living, crazy huh? 🎉</h3>
        </div>
      </div>
      <div className="pb-64 flex gap-4">
        <a className="bg-emerald-900 rounded-full w-40 h-14 hover:bg-emerald-500 duration-300 transition text-white text-center font-semibold flex justify-center items-center" href="/projects">
          <span className="text-xl">Projects</span>
        </a>
        <a className="bg-emerald-900 rounded-full w-40 h-14 hover:bg-emerald-500 duration-300 transition text-white text-center font-semibold flex justify-center items-center" href="/contact">
          <span className="text-xl">Contact Me</span>
        </a>
      </div>
      <div className="socials flex gap-4">
        <a href="https://github.com/Jqstln" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 duration-300 transition">
          <Github size={48} />
        </a>
        <a href="https://x.com/Jqstln" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 duration-300 transition">
          <Twitter size={48} />
        </a>
      </div>
      <footer className="py-4 text-center">
        <p className="text-gray-600">© {currentYear} - Made with 💖 by jqstln</p>
      </footer>
    </main>
  );
}