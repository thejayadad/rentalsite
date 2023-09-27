'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AccountNavbar = () => {
    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p>
            Access Denied
        </p>
    }
    const isActive = (path) => {
        return router.pathname === path ? "bg-purple-400 px-4 text-indigo-600" : "text-gray-600";
      };
  return (
    <section className="flex justify-around items-center px-4">
      <h1 className="cursor-pointer">Hello, {session.user.email}!</h1>
      <nav className="flex">
      <Link className={`text-sm mr-2 ${isActive("/account/bookings")}`} href="/account/bookings">
        Bookings</Link>
      <Link className={`text-sm mr-4 ${isActive("/account/ride")}`} href="/account/ride">
        Rides</Link>
      </nav>
    </section>
  )
}



export default AccountNavbar