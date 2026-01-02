
export default function About() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center pt-32">

        {/* Glass Card */}
        <div className="w-[80vw] h-[250px] max-w-4xl rounded-3xl mt-10  bg-white/8 backdrop-blur-xl shadow-xl border border-white/30 p-10">
          
          <h1 className="text-5xl font-semibold text-black/80 mb-6 text-center">
            About Me!
          </h1>

          <p className="text-black/70 text-m leading-relaxed text-center">
            My name is Elizabeth and I'm a sophomore at Virginia Tech studying Computer Science!
            I’m really into front-end development, UI/UX design, and learning how iOS systems work. 
            I love building things that feel clean and intuitive. Outside of coding, I’m a boba and matcha enthusiast,
             and I spend my free time bouldering or trying new drinks :D
          </p>

        </div>

        {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <img
              src="/boba.png"
              alt="Boba"
              className="w-full h-60 object-cover rounded-2xl shadow-md"
            />

            <img
              src="/boulder.png"
              alt="Bouldering"
              className="w-full h-60 object-cover rounded-2xl shadow-md"
            />

            <img
              src="/friends.png"
              alt="Friends"
              className="w-full h-60 object-cover rounded-2xl shadow-md"
            />
          </div>

      </div>
    </main>
  );
}
