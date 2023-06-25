import '../app/globals.css';
import Link from 'next/link';

export default function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link href={'/'} className="btn btn-ghost normal-case text-xl">AjiraTomo</Link>
  </div>
  </div>
  )
}
