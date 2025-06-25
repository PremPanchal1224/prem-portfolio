
import React from "react";

const heroImage = "https://i.postimg.cc/B6yfx6PK/Prem-Panchal-Professional-Photo.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-darkbg pt-32 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute -top-32 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-accent-electric/50 via-accent-blue/30 to-accent-green/40 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-green/30 blur-2xl rounded-full" />
      </div>

      <div className="container flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        {/* Left: Text */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-5 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow tracking-tight">
              Hello, I'm{" "}
              <span className="text-accent-blue bg-gradient-to-r from-accent-blue via-accent-electric to-accent-green bg-clip-text text-transparent animate-gradient-x">
                Prem Panchal
              </span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="inline-block px-4 py-1 rounded-full bg-accent-blue/20 backdrop-blur text-accent-green font-semibold text-base shadow animate-fade-in animate-delay-400">
                CS Undergrad | AI &amp; Web Dev Enthusiast
              </span>
            </div>
            <p className="text-lg sm:text-xl max-w-xl text-gray-200 mt-1">
              Passionate about building smart, user-friendly solutions using AI, data, and web technologies.
            </p>
          </div>

          <div className="flex gap-5 mt-4">
            <a
              href="#projects"
              className="relative bg-accent-electric text-white px-7 py-3 rounded-xl shadow-neon font-bold text-lg hover:bg-accent-green hover:text-darkbg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-green transform hover:-translate-y-1 group"
            >
              <span className="inline-flex items-center gap-2">
                View Projects
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 18l6-6-6-6"/>
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="relative border-2 border-accent-blue text-accent-blue px-7 py-3 rounded-xl font-semibold hover:bg-accent-blue hover:text-darkbg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transform hover:-translate-y-1 group"
            >
              <span className="inline-flex items-center gap-2">
                Get in Touch
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6a2 2 0 0 1-2 2H6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-6 6 6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>

      {/* Right: Profile */}
        <div className="flex-1 flex justify-center items-center min-w-[300px] animate-fade-in-up relative">
          {/* Blurred halo effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-electric/30 blur-3xl rounded-full z-0" />
          {/* Profile Card */}
          <div className="relative bg-gradient-to-br from-cardbg/90 to-darkbg/70 rounded-full shadow-neon p-[0.45rem] ring-4 ring-accent-blue/25 z-10">
            <div className="relative w-64 h-64 overflow-hidden rounded-full">
              <img
                src={heroImage}
                alt="Profile picture"
                  className="rounded-full w-64 h-64 object-cover object-[center_15%] border-4 border-accent-blue shadow-lg scale-100" 
              />
            </div>
          </div>
        </div> 
      </div>
      {/* Gradient for subtle bottom */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-darkbg via-darkbg/80 to-transparent pointer-events-none" />
    </section>
  );
}
