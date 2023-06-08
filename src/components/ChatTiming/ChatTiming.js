import "@/app/globals.css";
import Image from "next/image";
import rhpic from "@/../public/rhpic.png";
import ChatTalkOption from "../ChatTalkOption/ChatTalkOption";
import ChatInputArea from "../ChatInputArea/ChatInputArea";

export default function ChatTiming() {
  return (
    <div>
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    </div>
  );
}
