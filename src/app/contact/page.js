import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl font-bold">Contact Me</h1>
        <div className="mt-6">
          <Link href="/">
            <button className="rounded-lg bg-sky-400 px-6 py-3 font-bold text-white transition duration-300 hover:bg-sky-500">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
