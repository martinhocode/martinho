"use client"

import { useEffect, useRef } from "react"
import { Terminal, Code, Cpu, Zap, Server, Globe } from "lucide-react"
import gsap from "gsap"

export default function AboutContent() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const bioRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const tl = gsap.timeline()

      tl.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          bioRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          skillsRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          timelineRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
    }
  }, [])

  const skills = [
    { icon: <Terminal className="w-6 h-6 text-cyber-blue" />, name: "Desenvolvimento Web", level: 90 },
    { icon: <Code className="w-6 h-6 text-cyber-pink" />, name: "Programação", level: 85 },
    { icon: <Cpu className="w-6 h-6 text-cyber-yellow" />, name: "Inteligência Artificial", level: 95 },
    { icon: <Zap className="w-6 h-6 text-cyber-green" />, name: "Automação", level: 80 },
    { icon: <Server className="w-6 h-6 text-cyber-blue" />, name: "Infraestrutura", level: 75 },
    { icon: <Globe className="w-6 h-6 text-cyber-pink" />, name: "Marketing Digital", level: 85 },
  ]

  const timeline = [
    {
      year: "2018",
      title: "Início da Jornada",
      description: "Fundação da MD.Corp e primeiros projetos de tecnologia.",
    },
    { year: "2020", title: "Expansão Digital", description: "Lançamento da plataforma Martflix e cursos online." },
    { year: "2022", title: "Revolução IA", description: "Desenvolvimento do Martigo IA e soluções de automação." },
    {
      year: "2023",
      title: "Comunidade Global",
      description: "Expansão internacional e formação da comunidade de desenvolvedores.",
    },
    { year: "2024", title: "Futuro Agora", description: "Novas tecnologias e projetos inovadores em desenvolvimento." },
  ]

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-cyber-blue cyber-glitch"
          data-text="Sobre MD.Corp"
        >
          Sobre <span className="text-cyber-pink">MD.Corp</span>
        </h1>

        <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cyber-black p-6 rounded-lg border border-cyber-blue shadow-lg">
            <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg border-2 border-cyber-pink">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-cyber-black border-2 border-cyber-blue flex items-center justify-center icon-glitch-container">
                  <div className="icon-glitch text-6xl font-bold text-cyber-blue">MD</div>
                  <div className="icon-glitch icon-glitch-1 text-6xl font-bold">MD</div>
                  <div className="icon-glitch icon-glitch-2 text-6xl font-bold">MD</div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-cyber-yellow">Martinho Duarte</h2>
            <p className="text-gray-400 mb-4">
              Visionário digital e especialista em tecnologias emergentes. Fundador da MD.Corp e criador do ecossistema
              de produtos e serviços que revolucionam a forma como interagimos com a tecnologia.
            </p>
            <p className="text-gray-400">
              Com mais de 6 anos de experiência no desenvolvimento de soluções inovadoras, Martinho lidera uma
              comunidade global de entusiastas de tecnologia e empreendedores digitais.
            </p>
          </div>

          <div className="bg-cyber-black p-6 rounded-lg border border-cyber-blue shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyber-yellow">Nossa Missão</h2>
            <p className="text-gray-400 mb-6">
              Na MD.Corp, nossa missão é democratizar o acesso às tecnologias avançadas e capacitar pessoas a
              transformarem suas ideias em realidade digital. Acreditamos que a tecnologia deve ser acessível a todos e
              que a inovação surge da colaboração e compartilhamento de conhecimento.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-cyber-yellow">Nossa Visão</h2>
            <p className="text-gray-400">
              Construir um futuro onde a tecnologia amplifique o potencial humano, eliminando barreiras e criando
              oportunidades para todos. Queremos ser pioneiros na integração entre inteligência artificial e
              criatividade humana, desenvolvendo ferramentas que potencializem resultados e automatizem processos
              repetitivos.
            </p>
          </div>
        </div>

        <div ref={skillsRef} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyber-blue">Habilidades & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-cyber-black p-6 rounded-lg border border-cyber-blue shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 icon-glitch-container">
                    <div className="icon-glitch">{skill.icon}</div>
                    <div className="icon-glitch icon-glitch-1">{skill.icon}</div>
                    <div className="icon-glitch icon-glitch-2">{skill.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-cyber-yellow">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyber-blue to-cyber-pink h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={timelineRef}>
          <h2 className="text-3xl font-bold mb-8 text-center text-cyber-blue">Nossa Trajetória</h2>
          <div className="relative border-l-2 border-cyber-blue pl-8 ml-4 md:ml-12">
            {timeline.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-cyber-black border-2 border-cyber-blue rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyber-pink rounded-full animate-pulse"></div>
                </div>
                <div className="bg-cyber-black p-6 rounded-lg border border-cyber-blue shadow-lg">
                  <span className="text-cyber-yellow font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2 text-cyber-blue">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
