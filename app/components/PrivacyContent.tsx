"use client"

import { useEffect, useRef } from "react"
import { Shield, Lock, Eye, Database, Server, UserCheck } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export default function PrivacyContent() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const tl = gsap.timeline()

      tl.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.0,
        ease: "power3.out",
      }).from(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.0,
          ease: "power3.out",
        },
        "-=0.4",
      )

      // Animate sections
      const sections = contentRef.current?.querySelectorAll(".privacy-section")
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

  const privacySections = [
    {
      icon: <Shield className="w-8 h-8 text-cyber-blue" />,
      title: "Coleta de Dados",
      content: `Na MD.Corp, coletamos apenas as informações necessárias para fornecer nossos serviços. Isso pode incluir seu nome, endereço de e-mail, informações de pagamento e dados de uso do site. Nunca coletamos informações pessoais sem seu consentimento explícito.

      Utilizamos tecnologias avançadas de criptografia para garantir que seus dados estejam sempre protegidos durante a transmissão e armazenamento. Nossa infraestrutura é regularmente auditada para garantir os mais altos padrões de segurança.`,
    },
    {
      icon: <Lock className="w-8 h-8 text-cyber-pink" />,
      title: "Segurança de Dados",
      content: `Implementamos medidas de segurança técnicas e organizacionais de última geração para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

      Nossos sistemas são protegidos por firewalls avançados, criptografia de ponta a ponta e monitoramento contínuo. Realizamos auditorias de segurança regulares e mantemos nossos protocolos atualizados com as melhores práticas da indústria.`,
    },
    {
      icon: <Eye className="w-8 h-8 text-cyber-yellow" />,
      title: "Uso de Informações",
      content: `As informações que coletamos são utilizadas exclusivamente para melhorar sua experiência com nossos produtos e serviços. Isso inclui personalização de conteúdo, processamento de transações, suporte ao cliente e comunicações relevantes.

      Nunca vendemos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito. Qualquer uso de dados é estritamente alinhado com os propósitos para os quais foram coletados.`,
    },
    {
      icon: <Database className="w-8 h-8 text-cyber-blue" />,
      title: "Armazenamento e Retenção",
      content: `Mantemos seus dados apenas pelo tempo necessário para fornecer os serviços solicitados ou cumprir nossas obrigações legais. Implementamos políticas de retenção de dados que garantem a exclusão segura de informações quando não são mais necessárias.

      Nossos servidores estão localizados em instalações seguras com controles de acesso físico e digital rigorosos. Todos os dados são armazenados com criptografia avançada para garantir sua proteção.`,
    },
    {
      icon: <Server className="w-8 h-8 text-cyber-pink" />,
      title: "Cookies e Tecnologias de Rastreamento",
      content: `Utilizamos cookies e tecnologias similares para melhorar a funcionalidade do site, analisar o tráfego e personalizar sua experiência. Você pode controlar o uso de cookies através das configurações do seu navegador.

      Fornecemos informações detalhadas sobre os tipos de cookies que utilizamos e sua finalidade. Respeitamos as configurações de "Não Rastrear" e oferecemos opções para gerenciar suas preferências de privacidade.`,
    },
    {
      icon: <UserCheck className="w-8 h-8 text-cyber-yellow" />,
      title: "Seus Direitos",
      content: `Você tem o direito de acessar, corrigir, excluir ou exportar seus dados pessoais a qualquer momento. Também pode retirar seu consentimento para o processamento de dados ou solicitar a limitação desse processamento.

      Para exercer qualquer um desses direitos, entre em contato conosco através dos canais oficiais disponíveis em nosso site. Respondemos a todas as solicitações dentro do prazo legal estabelecido.`,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-cyber-blue cyber-glitch relative z-10"
          data-text="Protocolo de Privacidade"
        >
          Protocolo de <span className="text-cyber-pink">Privacidade</span>
        </h1>

        <div ref={contentRef} className="mx-auto relative z-20">
          <div className="bg-cyber-black p-8 rounded-lg border border-cyber-blue shadow-lg mb-10 text-center relative z-10">
            <p className="text-white mb-4 text-lg relative z-10">
              Na{" "}
              <Link href="/" className="text-cyber-blue hover:text-cyber-pink transition-colors">
                MD.Corp
              </Link>
              , levamos sua privacidade extremamente a sério. Este protocolo descreve como coletamos, usamos e
              protegemos suas informações pessoais quando você utiliza nossos produtos e serviços.
            </p>
            <p className="text-white text-lg relative z-10">
              Nossa abordagem à privacidade é baseada em transparência, controle do usuário e segurança de ponta.
              Estamos comprometidos em proteger seus dados com os mais altos padrões de segurança digital.
            </p>
          </div>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="privacy-section bg-cyber-black p-8 rounded-lg border border-cyber-blue shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 relative z-10"
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
                    {section.content.replace(/MD\.Corp/g, "")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cyber-black p-8 rounded-lg border border-cyber-pink shadow-lg text-center relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-cyber-pink relative z-10">Atualizações do Protocolo</h2>
            <p className="text-white mb-4 text-lg relative z-10">
              Este protocolo de privacidade pode ser atualizado periodicamente para refletir mudanças em nossas práticas
              ou requisitos legais. Recomendamos que você revise este documento regularmente.
            </p>
            <p className="text-white text-lg relative z-10">Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
