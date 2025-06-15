
import { Github } from "lucide-react";

const projects = [
  {
    title: "DocEase",
    period: "2024",
    stack: ["Python", "Android", "AI"],
    description: "AI-powered document summarizer and QA Android app using RAG pipeline and offline search.",
    link: "https://github.com/PremPanchal1224/Doc-Ease"
  },
  {
    title: "Smart Chatbot",
    period: "2024",
    stack: ["React", "Gemini API", "Stable Diffusion"],
    description: "Real-time chatbot for summarization and image generation using Gemini API and Stable Diffusion.",
    link: "https://github.com/PremPanchal1224/Smart-Chatbot"
  },
  {
    title: "AlgoTrading",
    period: "2023",
    stack: ["LSTM", "Flask", "Python"],
    description: "Stock trend prediction using LSTM and chatbot for financial insights via Flask UI.",
    link: "https://github.com/PremPanchal1224/AlgoTrading"
  },
  {
    title: "Automatic Question Generator",
    period: "2023",
    stack: ["Streamlit", "NLP", "Python"],
    description: "Web app to extract, summarize, and generate questions from PDFs for efficient study and review.",
    link: "https://github.com/PremPanchal1224/Automated-Question-Generator"
  },
  {
    title: "Expense Tracker Mobile App",
    period: "2023",
    stack: ["Android", "Java", "SQLite"],
    description: "Android app to help users manage expenses, track spending, and maintain a budget with ease.",
    link: "https://github.com/PremPanchal1224/Expense_Tracker_Mobile_App"
  },
];

function TechIcon({ stack }: { stack: string[] }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {stack.map((tech) => (
        <span key={tech} className="inline-block px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded font-semibold shadow">{tech}</span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <div key={proj.title} className="group bg-cardbg shadow hover:shadow-neon rounded-xl p-6 flex flex-col gap-5 animate-fade-in-up transition-all duration-300 hover:-translate-y-3 hover:bg-[#212f4d] cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="text-accent-green font-semibold">{proj.period}</span>
                <a href={proj.link} target="_blank" rel="noopener" className="hover:text-accent-blue p-1" title="View on GitHub">
                  <Github />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-white">{proj.title}</h3>
              <TechIcon stack={proj.stack} />
              <p className="text-gray-300 mb-2">{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener" className="mt-auto px-4 py-2 bg-accent-blue rounded-full text-white font-bold self-start hover:bg-accent-green hover:text-darkbg transition-colors text-sm shadow">
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
