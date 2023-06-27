import '../app/globals.css';
import Link from 'next/link';
export default function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
  <Link href="https://kribean.github.io/ajiratomo/" className="btn btn-primary">🤖 Ajiratomo </Link>
  </div>
  </div>
  )
}
