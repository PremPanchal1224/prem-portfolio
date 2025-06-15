
const heroImage = "/lovable-uploads/placeholder.svg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-darkbg pt-32 overflow-hidden">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1 min-w-[300px] animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Hello, I'm <span className="text-accent-blue">Prem Panchal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-5 text-accent-green">
            CS Undergrad | AI, Web Dev & Data Science Enthusiast
          </p>
          <p className="mb-6 text-lg text-gray-300 max-w-lg">
            Passionate about building intelligent systems and dynamic web applications that create real-world impact.
          </p>
          <div className="flex gap-5">
            <a href="#projects" className="bg-accent-electric text-white px-6 py-2 rounded-lg shadow-neon font-bold hover:bg-accent-green transition-all duration-200 text-lg">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-accent-blue text-accent-blue px-6 py-2 rounded-lg font-semibold hover:bg-accent-blue hover:text-darkbg transition-colors text-lg">
              Get in Touch
            </a>
          </div>
        </div>
        {/* Right: Profile */}
        <div className="flex-1 flex justify-center items-center min-w-[300px] animate-fade-in-up">
          <div className="relative bg-cardbg rounded-full shadow-neon p-2">
            <img
              src={heroImage}
              alt="Profile picture"
              className="rounded-full w-60 h-60 object-cover border-4 border-accent-blue shadow-lg"
            />
            <span className="absolute bottom-3 right-3 bg-accent-green px-3 py-1 rounded-full text-xs font-bold text-darkbg shadow">
              Profile
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
