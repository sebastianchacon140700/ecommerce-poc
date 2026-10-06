import './globals.css'

export const metadata = {
  title: 'Modern E-Commerce PoC',
  description: 'Proof of concept architecture for modern e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">{children}</body>
    </html>
  )
}
