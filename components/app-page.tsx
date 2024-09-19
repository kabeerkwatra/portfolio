"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Badge = ({ text }: { text: string }) => (
  <motion.span
    className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold m-1"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {text}
  </motion.span>
)

export function Page() {
  const skills = [
    "MongoDB", "Express.js", "React.js", "Next.js", "Prisma", 
    "PostgreSQL", "TypeScript", "JavaScript", "Git", "GitHub"
  ]

  const projects = [
    {
      title: "Foodie",
      description: "A food delivery application showcasing modern web development techniques.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      link: "https://foodie-gules-five.vercel.app/",
    },
  ]

  const education = [
    {
      degree: "Bachelors of Technology in Computer Science and Engineering",
      institution: "Inderprastha Engineering College",
      year: "2019-2023"
    },
    {
      degree: "12th Grade, CBSE",
      institution: "Bhai Parmanand Vidya Mandir",
      year: "2016-2017"
    },
    {
      degree: "10th Grade, CBSE",
      institution: "Bal Bharati Public School",
      year: "2014-2015"
    }
  ]

  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const animateSection = (ref: React.RefObject<HTMLElement>) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.set(ref.current, { clearProps: "all" })
          }
        }
      )
    }

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        onComplete: () => {
          gsap.set(headerRef.current, { clearProps: "all" })
        }
      }
    )

    animateSection(aboutRef)
    animateSection(skillsRef)
    animateSection(educationRef)
    animateSection(projectsRef)
    
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          gsap.set(contactRef.current, { clearProps: "all" })
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 relative">
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 30px 30px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      />
      <div className="relative z-10">
        <header ref={headerRef} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Kabeer Kwatra</h1>
          <p className="text-xl text-gray-400">Full Stack Developer</p>
        </header>

        <main className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
          <section ref={aboutRef} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300">
              Dynamic and motivated full stack developer with a strong foundation in JavaScript and
              web development seeking opportunities to apply skills and contribute to innovative
              projects. Eager to learn and grow in a collaborative environment.
            </p>
          </section>

          <section ref={skillsRef} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill) => (
                <Badge key={skill} text={skill} />
              ))}
            </div>
          </section>

          <section ref={educationRef} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </section>

          <section ref={projectsRef} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-900 p-6 rounded-lg mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap justify-center">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} text={tech} />
                    ))}
                  </div>
                </div>
                <Link
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </motion.div>
            ))}
          </section>

          <section ref={contactRef} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://www.linkedin.com/in/kabeerkwatra"
                  className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2" />
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://github.com/kabeerkwatra"
                  className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" />
                  GitHub
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="mailto:kabeerkwatra0211@gmail.com"
                  className="flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Mail className="mr-2" />
                  Email
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}