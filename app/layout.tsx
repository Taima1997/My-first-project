'use client'


import { useRouter } from 'next/dist/client/router'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function RootLayout({
 
    children,
  }:  {
    children: React.ReactNode
  }) {

  

    return (
      <html>
        <head />
        <body > <ChakraProvider> 
                    <Navbar />
                    {children}
                    <Footer/>
         </ChakraProvider> </body>
      </html>
      )
    }