"use client";

import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import { React, useState } from "react";

export default function ChatInputArea() {
  return (
    <>
      <div className="container px-10 flex flex-col lg:flex-row justify-between">
        <textarea
          className="textarea textarea-bordered w-full lg:w-[80%] mb-5 p-5"
          placeholder="Ecrivez votre réponse"
        ></textarea>
        <button className="btn btn-outline btn-accent">Envoyer</button>
      </div>
    </>
  );
}
