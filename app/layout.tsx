import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { Footer, Navbar } from '@/components'



export const metadata: Metadata = {
  title: 'RENT N DRIVE',
  description: 'Explore and Rent the best Car as your Choice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
