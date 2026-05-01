import './globals.css'

export const metadata = {
  title: 'T C Divyashree — Backend Engineer',
  description: 'Java Backend Engineer specializing in Spring Boot microservices, high-performance APIs, and distributed systems. Based in Bengaluru.',
  keywords: ['Java', 'Spring Boot', 'Backend Engineer', 'Microservices', 'REST API', 'Bengaluru'],
  authors: [{ name: 'T C Divyashree' }],
  openGraph: {
    title: 'T C Divyashree — Backend Engineer',
    description: 'Building high-performance, scalable backend systems with Java & Spring Boot.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
