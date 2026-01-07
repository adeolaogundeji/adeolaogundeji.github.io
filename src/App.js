import { Github, Mail, Phone, Linkedin, Code2, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

// Inline Card component
const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border shadow-sm ${className || ''}`}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

// Inline Button component
const Button = React.forwardRef(({ className, variant, asChild = false, children, ...props }, ref) => {
  const variantStyles = {
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "border-2 border-purple-500 hover:bg-purple-500/10 text-purple-300"
  };
  
  const styles = variantStyles[variant] || "bg-slate-800 hover:bg-slate-700 text-white";
  
  if (asChild) {
    return React.cloneElement(children, {
      className: `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${styles} ${className || ''}`,
      ref
    });
  }
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${styles} ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-slate-100 px-6 md:px-16 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* HERO */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mb-20 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Adeola Ogundeji
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mb-2"
        >
          Entry-Level Software Engineer focused on backend systems, data-driven applications,
          and building software that creates real-world impact.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-purple-400 mb-6 flex items-center gap-2"
        >
          <Rocket className="h-4 w-4" />
          Graduating May 2026
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-6"
        >
          <Button variant="secondary" asChild>
            <a 
              href="https://github.com/adeolaogundeji/adeolaogundeji.github.io" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> 
              GitHub
            </a>
          </Button>
          
          <Button variant="secondary" asChild>
            <a 
              href="https://www.linkedin.com/in/ogundeji-adeola-327a73235/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> 
              LinkedIn
            </a>
          </Button>
          
          <Button variant="outline" asChild>
            <a href="mailto:ogundejideola0@gmail.com" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> 
              Email
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Code2 className="text-purple-400" />
          About Me
        </h2>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
          <p className="text-slate-300 leading-relaxed">
            I am a Computer Science student graduating in May 2026 with experience across
            backend development, databases, automation, and applied software engineering.
            I've worked on healthcare scheduling systems, asset management workflows serving
            public infrastructure, and relational database design. I enjoy solving complex
            problems, learning quickly, and building reliable systems.
          </p>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
          <Rocket className="text-indigo-400" />
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="https://github.com/adeolaogundeji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 border-purple-500/30 backdrop-blur-sm h-full hover:border-purple-500/60 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Code2 className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Doctor's Appointment Booking System</h3>
                    </div>
                    <Github className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  </div>
                  <p className="text-slate-300 mb-4">
                    Backend scheduling system built in Python to manage availability,
                    conflict resolution, and time-slot optimization for multi-user healthcare workflows.
                  </p>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Prevented double-booking with constraint-based logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Modular architecture for scalability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Simulated production-level backend design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="https://github.com/adeolaogundeji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/30 backdrop-blur-sm h-full hover:border-indigo-500/60 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <Database className="h-6 w-6 text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Clothing Line Database (PostgreSQL)</h3>
                    </div>
                    <Github className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                  </div>
                  <p className="text-slate-300 mb-4">
                    Designed and implemented a normalized relational database to support
                    inventory tracking, sales operations, and analytics.
                  </p>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>Primary/foreign key constraints for integrity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>Complex SQL queries for analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>Realistic business use-case modeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-slate-900/60 to-purple-900/20 border-slate-700/50 backdrop-blur-sm hover:border-purple-500/40 transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-300">Asset Management Intern</h3>
              <p className="text-slate-400 mb-2">Office of County Engineering – Houston, TX</p>
              <p className="text-slate-300 mt-3 mb-3">
                Automated verification workflows for 500,000+ public infrastructure assets
                using Python and GIS tools, eliminating weeks of manual processing.
              </p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Developed Python scripts for data validation and quality assurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Integrated GIS workflows with database systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Reduced processing time by 90% through automation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* SKILLS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-5 hover:border-purple-500/50 transition-all"
          >
            <h4 className="font-semibold mb-3 text-purple-300 flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Languages
            </h4>
            <p className="text-slate-300">Python, C++, C#, Go, Java, SwiftUI, SQL</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-5 hover:border-indigo-500/50 transition-all"
          >
            <h4 className="font-semibold mb-3 text-indigo-300 flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Frameworks & Tools
            </h4>
            <p className="text-slate-300">React, Angular, Node.js, Git, Firebase</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-5 hover:border-pink-500/50 transition-all"
          >
            <h4 className="font-semibold mb-3 text-pink-300 flex items-center gap-2">
              <Database className="h-4 w-4" />
              Other
            </h4>
            <p className="text-slate-300">PostgreSQL, ArcGIS Pro, Automation, AI/ML (PyTorch, TensorFlow)</p>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800 relative z-10">
        <p>© {new Date().getFullYear()} Adeola Ogundeji</p>
        <div className="flex gap-6">
          <a href="mailto:ogundejideola0@gmail.com" className="hover:text-purple-400 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:+12813863380" className="hover:text-purple-400 transition-colors">
            <Phone className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/ogundeji-adeola-327a73235/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/adeolaogundeji/adeolaogundeji.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}