'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className="flex py-12">
      <div className='flex justify-between w-full items-center bg-white px-4'>
        <h2 >

        <Link href="/">
        <span className="text-2xl font-bold text-indigo-500 hover:text-indigo-700">
          Pimp<span className="text-pink-500">The</span>Ride
        </span>
      </Link>
        </h2>
        <div>
        <ul className=''>
          {
            session?.user
              ? (
                <div>
                  { (
                    <div>
                  <button
                      className="mr-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                    <Link
                      className="mr-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                      href="/create"
                    >
                      Create
                    </Link>

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