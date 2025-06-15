
import { Code, Book, Pen } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code />,
    desc: "Full-stack web apps using React, Node.js, Flask.",
  },
  {
    title: "Data Science",
    icon: <Book />,
    desc: "Data preprocessing, analysis, and visualization.",
  },
  {
    title: "AI Solutions",
    icon: <Pen />,
    desc: "Model integration, ML pipelines, intelligent assistants.",
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-darkbg">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map(s => (
            <div key={s.title} className="bg-cardbg hover:bg-accent-blue/10 rounded-xl shadow transition group text-center p-7 flex flex-col items-center animate-fade-in-up cursor-pointer">
              <div className="mb-4 text-accent-blue group-hover:text-accent-green text-4xl transition-colors">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
