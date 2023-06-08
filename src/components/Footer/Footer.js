import '@/app/globals.css';
import Image from 'next/image';
import logo from '@/../public/ajiramatomo.svg'
import "./logo.css"

export default function Footer() {
  return (
<footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M28.6293 54.5284L26.3962 52.1702C26.0441 51.7984 25.9099 51.2545 26.0469 50.7496L27.2703 44.9037C27.4388 44.2817 27.9772 43.9779 28.5882 43.9779H30.6076C31.22 43.9779 31.757 44.2817 31.9255 44.9037L33.1489 50.8118C33.286 51.3168 33.1519 51.8288 32.801 52.2006L30.5665 54.5443C30.0322 55.1084 29.165 55.0939 28.6293 54.5284ZM31.6419 41.0846H27.5552C26.3318 41.0846 25.2564 41.8166 24.9207 43.0592L23.1904 50.835C22.9178 51.8447 23.1846 52.9023 23.8877 53.6444L27.6607 57.6126C28.7307 58.7425 30.4651 58.7352 31.5351 57.5981L35.3081 53.6097C36.0123 52.8675 36.278 51.7782 36.0054 50.767L34.2765 43.0534C33.9394 41.8108 32.864 41.0774 31.6419 41.0774M31.5775 34.0828C31.468 34.7801 30.8967 35.2907 30.2267 35.2907H28.9691C28.3005 35.2907 27.7278 34.7801 27.6182 34.0828C27.4784 33.2004 28.1238 32.3975 28.9691 32.3975H30.2267C31.0734 32.3975 31.7173 33.2004 31.5775 34.0828ZM34.0901 35.7667L34.5463 32.8733C34.8244 31.1099 33.5366 29.5042 31.8433 29.5042H27.3525C25.6591 29.5042 24.3713 31.1099 24.6494 32.8733L25.107 35.7667C25.3262 37.1613 26.4702 38.184 27.8087 38.184H31.3871C32.727 38.184 33.8696 37.1612 34.0901 35.7667Z" fill="#D8DDE4"/>
<path d="M33.3531 17.2726H24.6896V21.6043H33.3531V17.2726Z" fill="#D8DDE4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.3578 17.2726C22.7502 17.2726 24.6896 15.3332 24.6896 12.9408C24.6896 10.5485 22.7502 8.60912 20.3578 8.60912C17.9655 8.60912 16.0261 10.5485 16.0261 12.9408C16.0261 15.3332 17.9655 17.2726 20.3578 17.2726ZM20.3578 14.0238C20.9559 14.0238 21.4408 13.5388 21.4408 12.9408C21.4408 12.3428 20.9559 11.8579 20.3578 11.8579C19.7597 11.8579 19.2749 12.3428 19.2749 12.9408C19.2749 13.5388 19.7597 14.0238 20.3578 14.0238Z" fill="#D8DDE4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M42.0165 12.9408C42.0165 15.3332 40.077 17.2726 37.6848 17.2726C35.2924 17.2726 33.3531 15.3332 33.3531 12.9408C33.3531 10.5485 35.2924 8.60912 37.6848 8.60912C40.077 8.60912 42.0165 10.5485 42.0165 12.9408ZM38.7677 12.9408C38.7677 13.5388 38.2828 14.0238 37.6848 14.0238C37.0866 14.0238 36.6019 13.5388 36.6019 12.9408C36.6019 12.3428 37.0866 11.8579 37.6848 11.8579C38.2828 11.8579 38.7677 12.3428 38.7677 12.9408Z" fill="#D8DDE4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.71303 20.8815C10.8393 25.1608 15.2551 28.1019 20.3578 28.1019H37.6848C42.9695 28.1019 47.5174 24.9473 49.5483 20.4185C51.2145 19.242 52.3026 17.3014 52.3026 15.1067C52.3026 12.912 51.2145 10.9714 49.5483 9.79499C47.5174 5.26613 42.9695 2.11153 37.6848 2.11153H20.3578C15.2551 2.11153 10.8393 5.05256 8.71303 9.33197C6.62436 10.4125 5.19682 12.5928 5.19682 15.1067C5.19682 17.6206 6.62436 19.801 8.71303 20.8815ZM20.3578 6.44326H37.6848C40.6811 6.44326 43.3221 7.96443 44.8778 10.2766C45.4761 11.7698 45.805 13.3998 45.805 15.1067C45.805 16.8136 45.4761 18.4436 44.8778 19.9368C43.3221 22.2491 40.6811 23.7701 37.6848 23.7701H20.3578C15.5732 23.7701 11.6944 19.8913 11.6944 15.1067C11.6944 10.322 15.5732 6.44326 20.3578 6.44326Z" fill="#D8DDE4"/>
</svg>
    <p>Copyright © 2023 - All right reserved to Koulirou</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
  )
}