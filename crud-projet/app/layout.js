import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />
          {children}
      </body>
    </html>
  )
}
