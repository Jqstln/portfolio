import Link from 'next/link'


export default function Projects() {
  return (
    <>
    <div className="text-center mb-10">
        <h1 className="text-6xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects/oasemc" className="relative overflow-hidden rounded-lg group">
                <img src="https://placehold.co/384x384" alt="Project 1" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"></img>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">OaseMC</span>
                </div>
            </Link>
            <Link href="/projects/project-page2.html" className="relative overflow-hidden rounded-lg group">
                <img src="https://placehold.co/384x384" alt="Project 2" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"></img>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Project 2</span>
                </div>
            </Link>
            <Link href="/projects/project-page3.html" className="relative overflow-hidden rounded-lg group">
                <img src="https://placehold.co/384x384" alt="Project 3" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"></img>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">Project 3</span>
                </div>
            </Link>
        </div>
        <div className="mt-10">
            <Link href="/">
                <button className="bg-sky-400 hover:bg-sky-500 transition duration-300 text-white font-bold py-3 px-6 rounded-lg">Go back</button>
            </Link>
        </div>
    </div>
    </>
  );
}
