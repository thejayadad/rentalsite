'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBook, FaCar } from "react-icons/fa"; // Import the React icons you want to use


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
    const AccountNavbar = ({ session }) => {
        const isActive = (path) => {
          return router.pathname === path ? "bg-purple-400 px-4 text-indigo-600" : "text-gray-600";
        };

  return (
    <section className="flex justify-around items-center px-4">
      <h1 className="cursor-pointer">Hello, {session.user.email}!</h1>
      <nav className="flex">
        <NavItem path="/account/bookings" currentPath={router.pathname}>
          <FaBook className="mr-2" /> Bookings
        </NavItem>
        <NavItem path="/account/ride" currentPath={router.pathname}>
          <FaCar className="mr-2" /> Rides
        </NavItem>
      </nav>
    </section>
  )
}
const NavItem = ({ path, currentPath, children }) => {
    const isActive = path === currentPath;
    const className = isActive
      ? "bg-purple-400 px-4 text-indigo-600"
      : "text-gray-600";
}
    return (
      <Link href={path}>
        <span className={`text-sm mr-2 ${className}`}>{children}</span>
      </Link>
    );
  };


export default AccountNavbar