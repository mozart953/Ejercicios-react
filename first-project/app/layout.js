import Navbar from '@/components/Navbar.jsx';

import './globals.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center items-center">{children}</main>

      
    </html>
  )
}
