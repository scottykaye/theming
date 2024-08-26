import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from 'theme-handler'
import { cookies } from 'next/headers'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Theme Handler - A Next.js & React Theme Provider.',
  description:
    'Theme Provider that handles your SSR and CSR hydration with a cookie. Works with multiple themes!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`h-full ${roboto.className} scrollbar`}>
        <ThemeProvider theme={theme?.value ?? 'system'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
