'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className="flex justify-between">
           <div >
      <div >
        <h2 >
          <Link href="/">PimpTheRide</Link>
        </h2>
        <ul >
          {
            session?.user
              ? (
                <div>
                  { (
                    <div >
                      <button onClick={() => {signOut()}} >Logout</button>
                      <Link href='/create' >Create</Link>
                    </div>
                  )}
                </div>
              )
              : (
                <>
                  <button onClick={() => {signIn()}} >Log in</button>
                  <Link href='/register'>Register</Link>
                </>
              )
          }
        </ul>
      </div>
    </div>
    </header>
  )
}

export default Navbar