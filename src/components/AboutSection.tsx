
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-section">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          {/* Main About Me Body */}
          <p className="mb-3 text-lg text-gray-300">
            Hi, I’m Prem Panchal — a tech enthusiast and aspiring engineer specializing in AI, full-stack development, and data-driven applications. I'm currently in my third year of B.Tech in Computer Engineering at K. J. Somaiya Institute of Technology, with a CGPA of <span className="text-accent-green font-bold">9.3</span>.
          </p>
          <p className="mb-3 text-lg text-gray-300">
            My journey includes internships at <span className="text-accent-green font-semibold">Claidroid Technologies</span> and under the <span className="text-accent-blue font-semibold">CASCADE</span> initiative, where I worked on machine learning models, UI/UX design, and app testing. I’ve built advanced projects like <span className="text-accent-blue font-semibold">DocEase</span> — an AI-powered document assistant, <span className="text-accent-blue font-semibold">Smart Chatbot</span> for intelligent communication, and <span className="text-accent-blue font-semibold">AlgoTrading</span>, a stock forecasting and financial assistant tool.
          </p>
          <p className="mb-3 text-lg text-gray-300">
            Beyond academics, I serve as the <span className="text-accent-green font-semibold">Chairperson</span> of the CSI Student Chapter and the <span className="text-accent-green font-semibold">CEO</span> of the Students’ Council, leading major events and fostering innovation on campus. I’m also an <span className="text-accent-green font-semibold">NSS Volunteer</span>, committed to social service and community growth.
          </p>
          <p className="mb-3 text-lg text-gray-300">
            I enjoy turning complex ideas into functional, user-centric products — and I’m always exploring what’s next in the world of intelligent technology.
          </p>
          <div className="flex gap-5 mt-7">
            <a href="https://drive.google.com/file/d/18oMk9VX5ufUMn-iINC3Rl5gmnIf0iYPX/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="bg-accent-blue px-8 py-2 rounded-lg font-bold text-white hover:bg-accent-green hover:text-darkbg transition-colors shadow">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
