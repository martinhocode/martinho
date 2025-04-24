import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-cyber-black border-b border-cyber-blue sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyber-blue cyber-glitch" data-text="irhamna.ai">
          Md<span className="text-cyber-pink">.corp</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-pink transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-cyber-yellow hover:text-cyber-pink transition-colors duration-300 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-pink transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
