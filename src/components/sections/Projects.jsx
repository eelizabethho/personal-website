export default function Projects() {
  return (
    <main className="w-screen overflow-x-hidden bg-white">
      {/* Title */}
      <div className="py-10 text-center">
        <h1 className="text-6xl font-normal text-black/80">Projects</h1>
      </div>

      {/* 4 TILES (2x2 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-8 lg:px-2">

      {/* Clari AI Project Card */}
<div className="w-full bg-gray-100 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">

  {/* LEFT: Text Content */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-5xl font-semibold mb-4">
      Clari AI
    </h2>

    <p className="text-lg text-gray-600 mb-6 max-w-md">
      AI interview coach with transcription and structured feedback to help you improve with clarity.
    </p>

    <div className="flex gap-4 justify-center md:justify-start">
      <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
        Learn More
      </button>
      <button className="px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition">
        GitHub
      </button>
    </div>
  </div>

  {/* RIGHT: Image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/Subject.png"
      alt="Clari AI preview"
      className="max-w-[120%] md:max-w-[120%] object-contain drop-shadow-xl"
    />
  </div>

</div>


        {/* Tile 2 - Image */}
        <div className="h-[60vh] bg-blue-100 flex justify-center items-center">
          <img
            alt="Project preview"
            className="max-w-[75%] max-h-[75%] object-contain"
          />
        </div>

        {/* Tile 3 - Dark */}
        <div className="h-[60vh] bg-black text-white flex flex-col justify-center px-16">
          <h2 className="text-5xl font-semibold mb-4">Personal Website</h2>
          <p className="text-lg text-white/80 mb-6 max-w-md">
            Next.js + Tailwind portfolio with glass UI + animations.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-white text-black">
              View
            </button>
            <button className="px-6 py-2 rounded-full border border-white/50">
              GitHub
            </button>
          </div>
        </div>

        {/* Tile 4 - Image */}
        <div className="h-[60vh] bg-gray-50 flex items-center justify-center">
          <img
            src="/boulder.jpeg"
            alt="Bouldering"
            className="max-w-[75%] max-h-[75%] object-contain"
          />
        </div>
      </div>
    </main>
  );
}
