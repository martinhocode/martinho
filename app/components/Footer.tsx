import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue py-8 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-cyber-blue cyber-glitch" data-text="MD.Corp">
              MD<span className="text-cyber-pink">.Corp</span>
            </Link>
          </div>
          <nav className="relative z-50">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative z-50 py-2 px-3"
                  prefetch={true}
                >
                  Protocolo de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative z-50 py-2 px-3"
                  prefetch={true}
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} MD.Corp. Todos Direitos Reservados Martinho.
        </div>
      </div>
    </footer>
  )
}
