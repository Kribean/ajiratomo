"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import StepAccess from "@/components/StepAccess/StepAccess";
import StepJobApply from "@/components/StepJobApply/StepJobApply";
import StepMode from "@/components/StepMode/StepMode";
import StepPseudo from "@/components/StepPseudo/StepPseudo";
import React,{ useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatAccess() {

  const [step, setStep] = useState(0);
  const [pseudo, setPseudo] = useState("");
  const [jobApply, setJobApply] = useState("");
  const [email, setEmail] = useState("");
  const [levelOfPractise,setLevelOfPractise] = useState("");
  const [jobTitle,setJobTitle] = useState("");  
  const [responsabilities,setResponsabilities] = useState("");
  const [skills,setSkills] = useState(""); 
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <div className="flex flex-row justify-center">
      <StepAccess step={step} />
      </div>
      {step === 0 && (
        <StepPseudo setStep={setStep} pseudo={pseudo} setPseudo={setPseudo} />
      )}
      {step === 1 && (
        <StepJobApply
          setStep={setStep}
          jobApply={jobApply}
          setJobApply={setJobApply}
          levelOfPractise={levelOfPractise} 
          setLevelOfPractise={setLevelOfPractise} 
          jobTitle={jobTitle} 
          setJobTitle={setJobTitle} 
          responsabilities={responsabilities} 
          setResponsabilities={setResponsabilities} 
          skills={skills} 
          setSkills={setSkills}
        />
      )}
      {step === 2 && (
        <StepMode setStep={setStep} 
        pseudo={pseudo} 
        jobApply={jobApply} 
        email={email} 
        setEmail={setEmail} 
        router={router}
 />
      )}
      <Footer />
    </div>
  );
}
