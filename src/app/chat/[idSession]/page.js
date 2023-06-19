'use client';
import ChatRoom from "@/components/ChatRoom/ChatRoom"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar"
import StepAdvice from "@/components/StepAdvice/StepAdvice";
import { useState } from "react";


export default function Chat(props) {
  const [understood,setUnderstood]=useState(false)

  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar/>
    <main className="container ">
    {!understood?<StepAdvice understood={understood} setUnderstood={setUnderstood}/>
:
<ChatRoom />}

    </main>
    <Footer/>
    
</div>
  )
}
