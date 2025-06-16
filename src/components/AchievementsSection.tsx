
const achievements = [
  {
    role: "Chairperson, CSI",
    period: "Jul 2025 – Present",
    desc: "Organized tech fests, coding events, and a national-level hackathon."
  },
  {
    role: "CEO, Students' Council",
    period: "Jan 2025 – Dec 2025",
    desc: "Managed major cultural and sports events at institute level."
  },
  {
    role: "NSS Volunteer",
    period: "Jul 2023 – Jul 2025",
    desc: "Dedicated 240 hours over 2 years to community and social service."
  },
];

const certifications = [
  {
    name: "AWS Cloud Foundations",
    org: "AWS Academy",
    link: "https://www.credly.com/badges/6794cd71-b7f8-4a63-8b96-c280291e54cd/print",
  },
  {
    name: "Web Development (Johns Hopkins Univ.)",
    org: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/MVIO7A3AO0UA",
  },
  {
    name: "Python (IIT Bombay)",
    org: "IIT Bombay",
    link: "https://drive.google.com/file/d/1Twg5HdRA7eMfV5XrZ0rdAnGduAjk-CPj/view",
  },
  {
    name: "NPTEL Machine Learning",
    org: "IIT | NPTEL",
    link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs50/Course/NPTEL25CS50S44020194101335888.pdf",
  },
  {
    name: "NPTEL DBMS",
    org: "IIT | NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs75/Course/NPTEL24CS75S24190109902714566.pdf",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-section">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Achievements & Certifications</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-accent-blue mb-4">Extracurricular & Roles</h3>
            <ul>
              {achievements.map((a, idx) => (
                <li key={idx} className="mb-6">
                  <span className="text-white font-bold">{a.role} </span>
                  <span className="text-accent-green font-semibold">({a.period})</span>
                  <p className="text-gray-300 pl-1">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-accent-electric mb-4">Certifications</h3>
            <ul>
              {certifications.map((c, idx) => (
                <li key={c.name} className="mb-5">
                  <a href={c.link} target="_blank" rel="noopener" className="font-bold text-accent-blue hover:text-accent-green underline transition-colors" title="View Certificate">
                    {c.name}
                  </a>
                  <span className="block text-gray-300 text-sm ml-1">Issued by {c.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
