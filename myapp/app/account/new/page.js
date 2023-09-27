'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import { useSession } from 'next-auth/react'


const NewRide = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState("")
    const [photo, setPhoto] = useState('')
    const [perks, setPerks] = useState('')
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [seats,setSeats] = useState(1);
    const [price,setPrice] = useState(100);

    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p className={classes.accessDenied}>
            Access Denied
        </p>
    }
  return (
    <section>

    </section>
  )
}

export default NewRide