'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";

function Navigation() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/">Home</Link>
      {session ? (
        <Link href="/profile">Profile</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </nav>
  );
}

export default Navigation;
