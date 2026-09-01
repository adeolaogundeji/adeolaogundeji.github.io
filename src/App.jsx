import React from 'react';
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone, ExternalLink, Code2, Database, Brain, Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-purple-500/30 relative">
      {/* Dynamic Background */}
      <GridBackground />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-6 px-6"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight"
        >
          Adeola <span className="gradient-text">Ogundeji</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto"
        >
          Computer Science graduate building <span className="text-slate-100">Cloud-native Backend Systems</span> and <span className="text-slate-100">AI-driven Applications</span>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8"
        >
          <a href="mailto:ogundejiadeola0@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-colors">
            <Mail size={18} /> Contact Me
          </a>
          <a href="https://github.com/adeolaogundeji" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors">
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-slate-400 leading-relaxed text-lg">
          I am a computer science graduate focused on reliable backend systems, cloud-native architecture, and AI-driven applications.
          I build event-driven APIs with C# and Python, automate delivery with Docker and GitHub Actions, and have processed and validated datasets containing 500K+ records.
        </p>
        <div className="flex flex-col gap-3 text-slate-300">
           <div className="flex items-center gap-3"><MapPin size={20} className="text-purple-400" /> Houston, TX</div>
           <div className="flex items-center gap-3"><Phone size={20} className="text-purple-400" /> (281)-386-3380</div>
        </div>
      </motion.div>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square text-center">
          <Brain size={64} className="text-purple-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">AI Enthusiast</h3>
          <p className="text-slate-400">Passionate about RAG systems and intelligent automation.</p>
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  const categories = [
    { name: "Backend", icons: <Code2 />, skills: ["C#", "ASP.NET Core", "Python", "FastAPI", "REST APIs"] },
    { name: "Cloud & DevOps", icons: <Rocket />, skills: ["Azure", "Docker", "GitHub Actions", "Bicep", "OpenTelemetry"] },
    { name: "Data & AI", icons: <Database />, skills: ["Azure SQL", "PostgreSQL", "Azure Service Bus", "OpenAI API", "Qdrant"] },
    { name: "Frontend & GIS", icons: <MapPin />, skills: ["React", "JavaScript", "ArcGIS Pro", "ArcPy", "Spatial Data QA/QC"] }
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
              {cat.icons}
            </div>
            <h3 className="text-xl font-bold mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "NimbusFlow",
      desc: "Azure-native workflow automation platform with non-blocking REST APIs, durable job tracking, transactional outbox delivery, retries, crash recovery, and autoscaling workers.",
      link: "https://github.com/adeolaogundeji/nimbusflow",
      tags: ["C#", "ASP.NET Core", "Azure", "Docker"]
    },
    {
      title: "RAG AI Agent",
      desc: "AI system for PDF Question Answering with sub-2s response time. Built with Python, FastAPI, OpenAI, and Qdrant.",
      link: "https://github.com/adeolaogundeji/RAG-Agent",
      tags: ["Python", "OpenAI", "Vector DB"]
    },
    {
      title: "WA Reminder",
      desc: "WhatsApp group reminder platform with auth, scheduled events, QR-based member onboarding, and background worker delivery.",
      link: "https://github.com/adeolaogundeji/wa-reminder",
      tags: ["Next.js", "PostgreSQL", "BullMQ"]
    },
    {
      title: "Order Processing API",
      desc: "Backend API for order workflows, request handling, and operational data management.",
      link: "https://github.com/adeolaogundeji/order-processing-api",
      tags: ["API", "Backend", "Database"]
    },
    {
      title: "Doctor's Appointment App",
      desc: "Backend scheduling system integrated with React frontend, handling 1,000+ simulated appointments.",
      link: "https://github.com/adeolaogundeji/doctorsappointmentbookingwebapp",
      tags: ["Python", "React", "API"]
    },
    {
      title: "Clothing Line Database",
      desc: "PostgreSQL inventory management system with optimized queries for performance (40% faster).",
      link: "https://github.com/adeolaogundeji/Clothinglinedatabase",
      tags: ["SQL", "Database Design"]
    }
  ];

  return (
    <section className="space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <a href="https://github.com/adeolaogundeji" className="self-start text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors sm:self-auto">
          View All <ExternalLink size={16} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.a 
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            whileHover={{ y: -10 }}
            className="block h-full group"
          >
            <div className="h-full bg-slate-900 border border-slate-800 p-8 rounded-3xl group-hover:bg-slate-800/50 transition-all flex flex-col">
              <div className="aspect-video bg-slate-800 rounded-xl mb-6 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                <Rocket className="text-slate-600 group-hover:text-purple-500 group-hover:scale-110 transition-all" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="space-y-8">
        <ExperienceItem 
          title="IT Support Assistant"
          company="Mississippi College IT Department"
          date="Oct 2023 – Jan 2026"
          desc="Delivered technical support for 300+ users. Repaired 500+ hardware problems, reducing downtime by 30%."
        />
        <ExperienceItem 
          title="Asset Management Intern"
          company="Office of County Engineering"
          date="June 2025 – Aug 2025"
          desc="Streamlined verification workflows for 500,000+ assets. Conducted QA/QC on 5,000+ infrastructure assets."
        />
      </div>
    </section>
  );
}

function ExperienceItem({ title, company, date, desc }) {
  return (
    <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true }}
      className="flex gap-6 items-start"
    >
      <div className="mt-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
      <div className="space-y-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-slate-500 font-mono text-sm">{date}</span>
        </div>
        <p className="text-purple-400 font-medium">{company}</p>
        <p className="text-slate-400 leading-relaxed max-w-3xl">{desc}</p>
      </div>
    </motion.div>
  );
}

function Education() {
  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Education & Awards</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-2">B.S. Computer Science</h3>
          <p className="text-purple-400 mb-4">Mississippi College</p>
          <p className="text-slate-500 font-mono text-sm">Class of May 2026</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center">
          <ul className="text-slate-400 space-y-2 list-disc list-inside">
            <li>Dean's List (2024)</li>
            <li>IBM Professional Certificate</li>
            <li>GIS Basics Certificate</li>
            <li> Harris County Public Service Recognition</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-900 mt-20 py-10 text-center text-slate-500 relative z-10">
      <p>© {new Date().getFullYear()} Adeola Ogundeji. Built with passion and code.</p>
    </footer>
  );
}

function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div 
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)' }}
      ></div>
    </div>
  );
}
