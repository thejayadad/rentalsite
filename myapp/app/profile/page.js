'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Profile = () => {
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
  return (
    <section>
      <h1>Welcome, {session.user.email}!</h1>
    </section>
  )
}

export default Profile