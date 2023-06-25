import "@/app/globals.css";

export default function ChatTiming(props) {

  const percentage = Math.round(props.nbOfQuestions/props.nbOfQuestionsMax*100)
  return (
    <div className="flex flex-row justify-center  items-center bg-neutral w-full">
{props.isPremium?<div className="badge badge-info gap-2 h-[50px] m-5">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48"><path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"/></svg>
  Accès Premium
</div>:
<div className="badge badge-success gap-2 h-[50px] animate-bounce">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48"><path d="M160-120v-220q0-24.75 17.625-42.375T220-400h520q24.75 0 42.375 17.625T800-340v220H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM220-180h520v-160H220v160Zm140-320h240q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q740-698 699.167-739 658.333-780 600-780H360q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q220-582 260.833-541q40.834 41 99.167 41Zm.175-110q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5Zm240 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM480-180Zm0-460Z"/></svg>
  Accès Freemium
</div>}
<div className="m-5 radial-progress bg-primary text-primary-content border-4 border-primary text-xs" style={{"--value":percentage,"--size": "40px", "--thickness": "3px"}}>{percentage}%</div>
    </div>
  );
}
