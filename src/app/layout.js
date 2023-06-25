import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajiratomo',
  description: 'Préparez-vous aux entretiens avec Ajiratomo, le simulateur interactif et amusant qui booste votre confiance et vos compétences. Brillez lors de vos opportunités professionnelles !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
