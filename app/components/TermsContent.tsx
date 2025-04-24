"use client"

import { useEffect, useRef } from "react"
import { FileText, AlertTriangle, Copyright, Scale, Globe, Clock } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export default function TermsContent() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const tl = gsap.timeline()

      tl.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )

      // Animate sections
      const sections = contentRef.current?.querySelectorAll(".terms-section")
      sections?.forEach((section, index) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 0.0,
          delay: 0.0 + index * 0.0,
          ease: "power3.out",
        })
      })
    }
  }, [])

  const termsSections = [
    {
      icon: <FileText className="w-8 h-8 text-cyber-blue" />,
      title: "Aceitação dos Termos",
      content: `Ao acessar ou utilizar qualquer serviço da MD.Corp, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.

      Estes termos constituem um acordo legal entre você e a MD.Corp, regulando seu acesso e uso de nossos produtos, serviços, aplicativos e websites. Recomendamos a leitura cuidadosa de todo o documento.`,
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-cyber-pink" />,
      title: "Uso Aceitável",
      content: `Você concorda em utilizar nossos serviços apenas para fins legais e de acordo com estes Termos. Especificamente, você concorda em não:

      • Violar leis ou regulamentos aplicáveis
      • Infringir direitos de propriedade intelectual
      • Distribuir malware ou outros conteúdos prejudiciais
      • Tentar acessar áreas restritas de nossos sistemas
      • Interferir na operação normal de nossos serviços
      • Coletar dados de usuários sem consentimento
      
      Reservamo-nos o direito de suspender ou encerrar seu acesso se violar estas condições.`,
    },
    {
      icon: <Copyright className="w-8 h-8 text-cyber-yellow" />,
      title: "Propriedade Intelectual",
      content: `Todo o conteúdo disponibilizado através de nossos serviços, incluindo mas não limitado a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da MD.Corp ou de seus licenciadores e está protegido por leis de propriedade intelectual.

      Você não pode modificar, reproduzir, distribuir, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material de nossos serviços sem autorização prévia por escrito.`,
    },
    {
      icon: <Scale className="w-8 h-8 text-cyber-blue" />,
      title: "Limitações de Responsabilidade",
      content: `Na extensão máxima permitida pela lei aplicável, a MD.Corp não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo mas não limitado a perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis.

      Nossos serviços são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que nossos serviços serão ininterruptos, oportunos, seguros ou livres de erros.`,
    },
    {
      icon: <Globe className="w-8 h-8 text-cyber-pink" />,
      title: "Lei Aplicável",
      content: `Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.

      Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais localizados no Brasil. Você concorda em se submeter à jurisdição pessoal desses tribunais.`,
    },
    {
      icon: <Clock className="w-8 h-8 text-cyber-yellow" />,
      title: "Modificações dos Termos",
      content: `Reservamo-nos o direito de modificar estes Termos a qualquer momento, a nosso critério exclusivo. As alterações entrarão em vigor imediatamente após a publicação dos Termos atualizados.

      É sua responsabilidade verificar periodicamente se houve alterações. O uso continuado de nossos serviços após a publicação de quaisquer modificações constitui aceitação dessas alterações.`,
    },
  ]

  // Function to replace MD.Corp with a link
  const formatContent = (content) => {
    const parts = content.split(/(MD\.Corp)/g)
    return parts.map((part, i) =>
      part === "MD.Corp" ? (
        <Link key={i} href="/" className="text-cyber-blue hover:text-cyber-pink transition-colors">
          MD.Corp
        </Link>
      ) : (
        part
      ),
    )
  }

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-cyber-blue cyber-glitch relative z-10"
          data-text="Termos de Uso"
        >
          Termos de <span className="text-cyber-pink">Uso</span>
        </h1>

        <div ref={contentRef} className="mx-auto relative z-20">
          <div className="bg-cyber-black p-8 rounded-lg border border-cyber-blue shadow-lg mb-10 text-center relative z-10">
            <p className="text-white mb-4 text-lg relative z-10">
              Bem-vindo aos Termos de Uso da{" "}
              <Link href="/" className="text-cyber-blue hover:text-cyber-pink transition-colors">
                MD.Corp
              </Link>
              . Este documento estabelece as regras e diretrizes para o uso de nossos produtos, serviços e plataformas
              digitais.
            </p>
            <p className="text-white text-lg relative z-10">
              Ao utilizar qualquer serviço da{" "}
              <Link href="/" className="text-cyber-blue hover:text-cyber-pink transition-colors">
                MD.Corp
              </Link>
              , você reconhece que leu, entendeu e concorda com estes termos. Por favor, leia-os cuidadosamente antes de
              acessar ou utilizar nossos serviços.
            </p>
          </div>

          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="terms-section bg-cyber-black p-8 rounded-lg border border-cyber-blue shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 relative z-10"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left">
                  <div className="mb-4 sm:mb-0 sm:mr-6 icon-glitch-container">
                    <div className="icon-glitch">{section.icon}</div>
                    <div className="icon-glitch icon-glitch-1">{section.icon}</div>
                    <div className="icon-glitch icon-glitch-2">{section.icon}</div>
                  </div>
                  <h2 className="text-2xl font-semibold text-cyber-yellow relative z-10">{section.title}</h2>
                </div>
                <div className="sm:pl-14">
                  <p className="text-white whitespace-pre-line text-lg leading-relaxed relative z-10">
                    {formatContent(section.content)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cyber-black p-8 rounded-lg border border-cyber-pink shadow-lg text-center relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-cyber-pink relative z-10">Contato</h2>
            <p className="text-white mb-4 text-lg relative z-10">
              Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco através dos
              canais oficiais disponíveis em nosso site.
            </p>
            <p className="text-white text-lg relative z-10">Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
