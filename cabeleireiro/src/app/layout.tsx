import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Cabeleireiro',
  description: 'App developed by Pedro Serpe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Aqui vai ser a navbar</p>
        </header>
        {children}
        <footer>
          <p>Aqui vai ser o footer</p>
        </footer>
        </body>
    </html>
  )
}
