import '../app/globals.css';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <button onClick={()=>{router.push('/')}} className="btn btn-ghost normal-case text-xl">AjiraTomo</button>
  </div>
  </div>
  )
}
