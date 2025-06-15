
import { useState } from "react";
import { Code, Book, Pen, User } from "lucide-react";

const languages = [
  { name: "Python", icon: <Code />, level: 90 },
  { name: "C", icon: <Code />, level: 85 },
  { name: "JavaScript", icon: <Code />, level: 80 },
  { name: "HTML", icon: <Code />, level: 85 },
  { name: "CSS", icon: <Code />, level: 80 },
  { name: "SQL (MySQL)", icon: <Book />, level: 70 },
];
const frameworks = [
  { name: "React", icon: <Pen />, level: 85 },
  { name: "Node.js", icon: <Code />, level: 75 },
  { name: "TensorFlow", icon: <Pen />, level: 65 },
  { name: "Streamlit", icon: <Pen />, level: 70 },
  { name: "pandas", icon: <Pen />, level: 85 },
  { name: "NumPy", icon: <Pen />, level: 80 },
];
const tools = [
  { name: "GitHub", icon: <User />, level: 80 },
  { name: "VS Code", icon: <User />, level: 90 },
  { name: "Jupyter", icon: <User />, level: 75 },
  { name: "Postman", icon: <User />, level: 75 },
  { name: "Excel", icon: <User />, level: 90 },
  { name: "Hugging Face", icon: <User />, level: 70 },
];

function SkillBar({ name, icon, level }: { name: string, icon: React.ReactNode, level: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col items-start group cursor-pointer mb-4 w-full max-w-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-cardbg rounded-full shadow hover:shadow-neon transition">{icon}</div>
        <span className="font-semibold text-lg text-white">{name}</span>
      </div>
      <div className="w-full bg-[#22293a] h-2 rounded mt-2 overflow-hidden relative">
        <div className="transition-all h-2 rounded bg-accent-blue"
          style={{
            width: hovered ? `${level + 5}%` : `${level}%`,
            boxShadow: hovered ? "0 0 16px #22d3ee80" : "none",
            transition: "width 0.3s, box-shadow 0.3s"
          }} />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-darkbg">
      <div className="container">
        <h2 className="text-3xl font-bold mb-9 text-white text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-accent-blue mb-5 text-center">Languages</h3>
            {languages.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent-green mb-5 text-center">Frameworks & Libraries</h3>
            {frameworks.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent-electric mb-5 text-center">Tools & Platforms</h3>
            {tools.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
