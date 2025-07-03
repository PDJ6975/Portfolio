import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ParticlesBackground from '../components/ParticlesBackground'
import CursorSpotlight from '../components/CursorSpotlight'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antonio Rodríguez Calderón | Portfolio',
  description: 'Portfolio profesional de Antonio Rodríguez Calderón, ingeniero de software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + ' bg-[#0a192f] text-[#ccd6f6] min-h-screen flex flex-col'}>
        <ParticlesBackground />
        <CursorSpotlight />
        <div className="flex flex-1 justify-center items-start w-full min-h-screen pt-24 pb-12 px-4">
          <div className="flex flex-row w-full max-w-6xl">
            <Sidebar />
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </div>
        <footer className="w-full flex justify-center text-center text-xs text-[#8892b0] mb-4">
          <div className="w-full max-w-3xl px-4 mx-auto text-center">
            Portfolio diseñado en <span className="font-semibold text-[#64ffda] mx-1">Next.js</span> y <span className="font-semibold text-[#64ffda] mx-1">Tailwind CSS</span> · © {new Date().getFullYear()} Antonio Rodríguez Calderón
          </div>
        </footer>
      </body>
    </html>
  )
}
