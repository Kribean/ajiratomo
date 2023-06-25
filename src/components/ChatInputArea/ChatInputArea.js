"use client";

import "@/app/globals.css";
import { React, useState } from "react";

export default function ChatInputArea(props) {
  const [response, setResponse] = useState("");
  const [showSendButton,setShowSendButton] = useState(true);
  
  const handleChangeResponse = (e)=>{
    setResponse(e.target.value)
  };

  const sendResponseToBackend = ()=>{
    setShowSendButton(false);
    const idSession = localStorage.getItem('idChatSessionAjiratomo');
    fetch(`https://app-ajiratomo-0e6517145dae.herokuapp.com/api/chat/${idSession}/talks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistant:props.chatQuestions[0]?.question,
        user:response,
      }),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data)=>{
        setResponse(""); 
        setShowSendButton(true);
        const chatQuesInter = props.chatQuestions;
        chatQuesInter.shift();
        props.setChatInterview(data.chatInterview);
        props.setChatQuestions(chatQuesInter); //remove the first question 
         
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container px-10 flex flex-col lg:flex-row justify-center lg:justify-between">
        <textarea
          className="textarea textarea-bordered w-full lg:w-[80%] mb-5 p-5"
          placeholder="Ecrivez votre réponse"
          value={response}
          onChange={handleChangeResponse}
        ></textarea>
        {showSendButton?(<button className="btn btn-outline btn-accent mb-5" onClick={()=>{sendResponseToBackend()}}>Envoyer</button>):(<span className="loading loading-ring loading-lg"></span>)}
      </div>
    </>
  );
}
