
//import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ChatAccessLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  )
}
