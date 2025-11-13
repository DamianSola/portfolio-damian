import { ThemeProvider } from '..themeContext.js'
import './globals.css'

export const metadata = {
  title: 'Damian Sola',
  description: 'Desarrollador web Fullstack',
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