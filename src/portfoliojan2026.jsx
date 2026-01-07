import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 md:px-16 py-12">
      {/* HERO */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Adeola Ogundeji</h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl">
          Entry-Level Software Engineer focused on backend systems, data-driven applications,
          and building software that creates real-world impact.
        </p>
        <div className="flex gap-4 mt-6">
          <Button variant="secondary" asChild>
            <a href="https://github.com/adeolaogundeji/adeolaogundeji.github.io" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:Ogundejiadeola0@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          </Button>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          I am a Computer Science student graduating in May 2026 with experience across
          backend development, databases, automation, and applied software engineering.
          I’ve worked on healthcare scheduling systems, asset management workflows serving
          public infrastructure, and relational database design. I enjoy solving complex
          problems, learning quickly, and building reliable systems.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Doctor’s Appointment Booking System</h3>
              <p className="text-slate-300 mb-4">
                Backend scheduling system built in Python to manage availability,
                conflict resolution, and time-slot optimization for multi-user healthcare workflows.
              </p>
              <ul className="text-slate-400 text-sm list-disc ml-5 space-y-1">
                <li>Prevented double-booking with constraint-based logic</li>
                <li>Modular architecture for scalability</li>
                <li>Simulated production-level backend design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clothing Line Database (PostgreSQL)</h3>
              <p className="text-slate-300 mb-4">
                Designed and implemented a normalized relational database to support
                inventory tracking, sales operations, and analytics.
              </p>
              <ul className="text-slate-400 text-sm list-disc ml-5 space-y-1">
                <li>Primary/foreign key constraints for integrity</li>
                <li>Complex SQL queries for analytics</li>
                <li>Realistic business use-case modeling</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 text-slate-300">
          <div>
            <h4 className="font-semibold mb-2">Languages</h4>
            <p>Python, C++, C#, Go, Java, SwiftUI, SQL</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
            <p>React, Angular, Node.js, Git, Firebase</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Other</h4>
            <p>PostgreSQL, ArcGIS Pro, Automation Scripting, AI/ML (PyTorch, TensorFlow)</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Asset Management Intern</h3>
              <p className="text-slate-400">Office of County Engineering – Houston, TX</p>
              <p className="text-slate-300 mt-2">
                Automated verification workflows for 500,000+ public infrastructure assets
                using Python and GIS tools, eliminating weeks of manual processing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">IT Support Assistant</h3>
              <p className="text-slate-400">Mississippi College IT Department</p>
              <p className="text-slate-300 mt-2">
                Delivered technical support, system deployments, and documentation
                across campus-wide systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Adeola Ogundeji</p>
        <div className="flex gap-4">
          <a href="mailto:Ogundejiadeola0@gmail.com"><Mail className="h-5 w-5" /></a>
          <a href="tel:+12813863380"><Phone className="h-5 w-5" /></a>
          <a href="https://github.com/adeolaogundeji/adeolaogundeji.github.io" target="_blank"><Github className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}
