"use client"
import ChatRoom from "@/components/ChatRoom/ChatRoom"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar"


export default function ChatPremium() {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar/>
    <main className="container">
    
<p>Premium</p>
<ChatRoom/>
    </main>
    <Footer/>
    
</div>
  )
}
