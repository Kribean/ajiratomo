'use client';

import "@/app/globals.css";
import { useState } from "react";

export default function ChatTalkOption() {
    const [enableMicro,setEnableMicro]=useState(false);

  return (
    <div>
<label className="swap swap-flip">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" defaultChecked={enableMicro} />
  
  {/* volume on icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm0-228Zm-30 531v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Zm30-363q18 0 29.5-13.5T521-529v-251q0-17-11.788-28.5Q497.425-820 480-820q-17.425 0-29.212 11.5Q439-797 439-780v251q0 19 11.5 32.5T480-483Z"/></svg>
  {/* volume off icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z"/></svg>
</label>

      <input type="checkbox" 
      className="toggle toggle-lg" 
      checked={enableMicro}
        onChange={()=>{setEnableMicro(!enableMicro)}} />
    </div>
  );
}
