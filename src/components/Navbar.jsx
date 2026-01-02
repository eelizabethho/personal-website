"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-15 left-1/2 z-50 -translate-x-1/2 w-[80vw] max-w-4xl">
      <div className="flex items-center gap-8 px-8 py-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/20">
        <a href="/" className="font-semibold text-black">
          Elizabeth
        </a>
        <a href="/projects" className="text-white/80 hover:text-black transition">
          Projects
        </a>

        <a href="/about" className="text-white/80 hover:text-black transition">
          About
        </a>

        <a href="/contact" className="text-white/80 hover:text-black transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
