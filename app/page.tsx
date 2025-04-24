import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Countdown from "./components/Countdown"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-black text-white font-cyber relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <Hero />
        <Features />
        <Countdown />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
