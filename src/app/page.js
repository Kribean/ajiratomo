"use client";
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import LandingPannel from '@/components/LandingPannel/LandingPannel'
import Introduction from '@/components/Introduction/Introduction'
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
    <main className="flex  flex-col items-center justify-between">
      <Navbar/>
      <LandingPannel/>
      <Introduction/>
    </main>
    <Footer/>
    
</>
  )
}
