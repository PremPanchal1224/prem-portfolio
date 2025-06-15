
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-section">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="mb-3 text-lg text-gray-300">
            I am currently pursuing a <span className="text-accent-blue font-semibold">B.Tech in Computer Engineering (2022–2026)</span> at K. J. Somaiya Institute of Technology, Mumbai (CGPA: <span className="text-accent-green font-bold">9.3</span>).
          </p>
          <p className="mb-3 text-lg text-gray-300">
            My focus is on practical applications of AI, machine learning, and full-stack development. I interned at <span className="text-accent-green font-semibold">Claidroid Technologies</span> and contributed to <span className="text-accent-blue font-semibold">CASCADE</span> as an on-field app tester.
          </p>
          <div className="flex gap-5 mt-7">
            <a href="https://drive.google.com/file/d/1zNCSWVKfgdJtWiHHCcLhMomTILCRCc6T/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="bg-accent-blue px-8 py-2 rounded-lg font-bold text-white hover:bg-accent-green hover:text-darkbg transition-colors shadow">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
