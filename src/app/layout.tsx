import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudOps Fackop - Plateforme DevOps Multi-Cloud',
  description: 'Plateforme self-service pour provisionner, déployer et monitorer vos workloads multi-cloud avec une approche DevOps moderne.',
  keywords: ['DevOps', 'Multi-Cloud', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
  authors: [{ name: 'CloudOps Fackop' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'CloudOps Fackop - Plateforme DevOps Multi-Cloud',
    description: 'Plateforme self-service pour provisionner, déployer et monitorer vos workloads multi-cloud.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudOps Fackop - Plateforme DevOps Multi-Cloud',
    description: 'Plateforme self-service pour provisionner, déployer et monitorer vos workloads multi-cloud.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
