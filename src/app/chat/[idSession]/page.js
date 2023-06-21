'use client';
import ChatRoom from "@/components/ChatRoom/ChatRoom"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar"
import StepAdvice from "@/components/StepAdvice/StepAdvice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function ChatFree(props) {
  const [understood,setUnderstood]=useState(false)
const router = useRouter();
const {idSession} = router.query;

const [chatQuestions,setChatQuestions]=useState([]);
const [chatInterview,setChatInterview]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:8000/api/chat/${idSession}/freemium`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data)=>{
        setChatQuestions(data.chatQuestions);
        setChatInterview(data.chatInterview);              
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar/>
    <main className="container ">
    {!understood?<StepAdvice understood={understood} setUnderstood={setUnderstood}/>
:
<ChatRoom 
chatQuestions={chatQuestions} 
setChatQuestions={setChatQuestions}
chatInterview={chatInterview} 
setChatInterview={setChatInterview}
/>}

    </main>
    <Footer/>
    
</div>
  )
}
