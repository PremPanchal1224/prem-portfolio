
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { href: "mailto:panchal.pg@somaiya.edu", icon: Mail, label: "Email" },
  { href: "https://linkedin.com/in/prempanchal1224", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/PremPanchal1224", icon: Github, label: "GitHub" },
  { href: "https://x.com/Prem_Panchal_", icon: User, label: "X" },
  { href: "https://instagram.com/prem.panchal_", icon: Instagram, label: "Instagram" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) errs.email = "Valid email required.";
    if (!form.message.trim()) errs.message = "Message can't be empty.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. Prem will get back to you soon.",
      });
    }, 1300);
  };

  return (
    <section id="contact" className="py-24 bg-darkbg">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center text-white">Contact</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 animate-fade-in-up">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Phone />
                <span className="font-semibold text-white">+91 9136204775</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Mail />
                <span className="font-semibold text-white">panchal.pg@somaiya.edu</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="hover:text-accent-blue hover:scale-110 text-gray-300 transition transform p-2"
                  aria-label={link.label}>
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 bg-cardbg rounded-xl shadow p-8 space-y-6 animate-fade-in-up" onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
              <label className="block text-gray-300 font-semibold mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleInput}
                className={`w-full p-3 rounded bg-section text-white border ${errors.name ? "border-accent-green" : "border-[#313d55]"} outline-none focus:border-accent-blue transition`} />
              {errors.name &&
                <span className="text-accent-green text-sm">{errors.name}</span>
              }
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleInput}
                className={`w-full p-3 rounded bg-section text-white border ${errors.email ? "border-accent-green" : "border-[#313d55]"} outline-none focus:border-accent-blue transition`} />
              {errors.email &&
                <span className="text-accent-green text-sm">{errors.email}</span>
              }
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} rows={4} onChange={handleInput}
                className={`w-full p-3 rounded bg-section text-white border ${errors.message ? "border-accent-green" : "border-[#313d55]"} outline-none focus:border-accent-blue transition`} />
              {errors.message &&
                <span className="text-accent-green text-sm">{errors.message}</span>
              }
            </div>
            <button type="submit" disabled={sending}
              className="w-full flex justify-center items-center bg-accent-blue hover:bg-accent-green hover:text-darkbg text-white font-bold py-3 rounded transition-colors focus:outline-none shadow-neon text-lg disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
