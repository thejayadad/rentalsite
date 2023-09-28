'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaBluetooth, FaSun, FaMusic } from 'react-icons/fa';


const availablePerks = [
    { name: 'Bluetooth', icon: <FaBluetooth /> },
    { name: 'Sunroof', icon: <FaSun /> },
    { name: 'Music System', icon: <FaMusic /> },
  ];


const NewRide = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('Suv');
  const [photo, setPhoto] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [seats, setSeats] = useState(1);
  const [price, setPrice] = useState(100);


  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/ride', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: 'POST',
        body: JSON.stringify({title, desc, category, photo, extraInfo, checkIn, checkOut, seats, price, owner: session?.user?.email}),
      });
      if(!response.ok){
        throw new Error("Error occured")
      }

      const ride = await response.json()
      router.push("/")

       } catch (error) {
      console.error('Error creating the ride:', error);
    }
  };



  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return (
      <p className={classes.accessDenied}>
        Access Denied
      </p>
    );
  }




  return (
    <section className="bg-white p-4">
        <span className="text-3xl font-bold text-indigo-500 hover:text-indigo-700 mb-4 cursor-pointer">
          New<span className="text-pink-500">Ride</span>
        </span>
      <form  onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md px-3 py-2 w-full cursor-pointer"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
            className="border rounded-md px-3 py-2 w-full h-24"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Suv">SUV</option>
            <option value="Sports">Sports</option>
            <option value="Luxury">Luxury</option>
            <option value="Sedan">Sedan</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Photo Input and Preview */}
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
            Photo (URL)
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
          {photo && (
            <img
              src={photo}
              alt="Preview"
              className="mt-2 rounded-md border border-gray-400 max-h-32"
            />
          )}
        </div>

        {/* Perks */}

        {/* Extra Info */}
        <div className="mb-4">
          <label htmlFor="extraInfo" className="block text-sm font-medium text-gray-700">
            Extra Info
          </label>
          <textarea
            id="extraInfo"
            name="extraInfo"
            onChange={(e) => setExtraInfo(e.target.value)}
            className="border rounded-md px-3 py-2 w-full h-24"
          />
        </div>

        {/* Check-In */}
        <div className="mb-4">
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
            Pick-Up
        </label>
        <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            className="border rounded-md px-3 py-2 w-full"
            dateFormat="yyyy-MM-dd"
            required
        />
        </div>

        {/* Check-Out */}
        <div className="mb-4">
        <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
            Drop-Off
        </label>
        <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            className="border rounded-md px-3 py-2 w-full"
            dateFormat="yyyy-MM-dd"
            required
        />
        </div>
        {/* Seats */}
        <div className="mb-4">
          <label htmlFor="seats" className="block text-sm font-medium text-gray-700">
            Seats
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            onChange={(e) => setSeats(parseInt(e.target.value))}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-600 transition duration-300 ease-in-out"
          >
            Create Ride
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default NewRide;
