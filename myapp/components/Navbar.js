'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header>
        Navbar
    </header>
  )
}

export default Navbar