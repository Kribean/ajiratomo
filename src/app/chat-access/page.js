"use client";
import ChatRoom from "@/components/ChatRoom/ChatRoom";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import StepAccess from "@/components/StepAccess/StepAccess";
import StepAdvice from "@/components/StepAdvice/StepAdvice";
import StepJobApply from "@/components/StepJobApply/StepJobApply";
import StepMode from "@/components/StepMode/StepMode";
import StepPseudo from "@/components/StepPseudo/StepPseudo";
import React,{ useState } from "react";

export default function ChatAccess() {

  const [step, setStep] = useState(0);
  const [pseudo, setPseudo] = useState("");
  const [jobApply, setJobApply] = useState("");

  return (
    <div className="flex flex-col h-screen justify-between">
      <StepAccess step={step} />
      {step === 0 && (
        <StepPseudo setStep={setStep} pseudo={pseudo} setPseudo={setPseudo} />
      )}
      {step === 1 && (
        <StepJobApply
          setStep={setStep}
          jobApply={jobApply}
          setJobApply={setJobApply}
        />
      )}
      {step === 2 && (
        <StepMode setStep={setStep} pseudo={pseudo} jobApply={jobApply} />
      )}
      <Footer />
    </div>
  );
}
