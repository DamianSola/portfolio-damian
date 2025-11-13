import { ThemeProvider } from '@/context/themeContext'
import './globals.css'

export const metadata = {
  title: 'Tu Portfolio',
  description: 'Portfolio profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}