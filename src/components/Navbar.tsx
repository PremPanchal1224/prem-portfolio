import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { href: "https://github.com/PremPanchal1224", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/prempanchal1224", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/Prem_Panchal_", icon: Twitter, label: "X" },
  { href: "https://instagram.com/prempanchal1224", icon: Instagram, label: "Instagram" },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-darkbg/85 backdrop-blur border-b border-section">
      <div className="container flex items-center justify-between py-3">
        {/* REMOVED THE NAME FROM THE NAV BAR */}
        <span className="text-xl font-bold tracking-wide text-accent-electric sr-only">
          Prem Panchal
        </span>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="font-medium hover:text-accent-blue hover:underline underline-offset-8 px-2 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors" aria-label={link.label}>
              <link.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
