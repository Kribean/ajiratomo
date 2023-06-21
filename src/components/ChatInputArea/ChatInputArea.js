"use client";

import "@/app/globals.css";
import { React, useState } from "react";

export default function ChatInputArea(props) {
  const [response, setResponse] = useState("");
  const [showSendButton,setShowSendButton] = useState(true);
  
  const handleChangeResponse = (e)=>{
    console.log(e.target.value,"ppooooo")
    setResponse(e.target.value)
  };
  const idSession = "64916bb7cb46463957255b61";

  const sendResponseToBackend = ()=>{
    setShowSendButton(false);
    fetch(`http://localhost:8000/api/chat/${idSession}/talks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistant:props.chatQuestions[0].question,
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
        setShowSendButton(true);
        const chatQuesInter = props.chatQuestions;
        chatQuesInter.shift();
        props.setChatInterview(data.chatInterview);
        props.setChatQuestions(chatQuesInter) //remove the first question           
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container px-10 flex flex-col lg:flex-row justify-between">
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
