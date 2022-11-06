import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='he' dir='rtl'>
      <head />
      <body>{children}</body>
    </html>
  )
}
