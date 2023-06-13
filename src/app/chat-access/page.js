'use client';
import ChatRoom from "@/components/ChatRoom/ChatRoom"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar"
import StepAccess from "@/components/StepAccess/StepAccess";
import StepAdvice from "@/components/StepAdvice/StepAdvice";
import StepJobApply from "@/components/StepJobApply/StepJobApply";
import StepMode from "@/components/StepMode/StepMode";
import StepPseudo from "@/components/StepPseudo/StepPseudo";
import StripeContainer from "@/components/Stripe/StripeContainer";
import {
    Elements,
  } from '@stripe/react-stripe-js';
  import {loadStripe} from '@stripe/stripe-js';
  
export default function ChatAccess() {
    const stripePromise = loadStripe('pk_test_51MwWxsBghvSGXPtDqsZ45uV4QGK1mJmvuD13nRMRvvxs2gHoh18z17cPz8E1ahJSZOtSdx7mGC21d7MmzIO3Sf1300qPQHam8Y');
  return (
    <div className="flex flex-col h-screen justify-between">
    <StepAccess/>
<StepPseudo/>
<StepJobApply/>
<StepMode/>
<Elements stripe={stripePromise}>
<StripeContainer/>
<StepAdvice/>
  </Elements>

    <Footer/>
    
</div>
  )
}
