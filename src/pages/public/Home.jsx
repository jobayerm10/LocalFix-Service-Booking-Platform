import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('Dhaka, Bangladesh')
  const [distance, setDistance] = useState('5')

  const categories = [
    { name: 'Electrician', color: 'bg-blue-100 text-blue-600' },
    { name: 'Plumber', color: 'bg-blue-100 text-blue-600' },
    { name: 'Tutor', color: 'bg-blue-100 text-blue-600' },
    { name: 'AC Repair', color: 'bg-blue-100 text-blue-600' },
    { name: 'Cleaning', color: 'bg-blue-100 text-blue-600' },
  ]

  return (
    <div className='bg-gradient-to-b from-[#2563EB] to-[#1E40AF] h-[80vh] w-full relative overflow-hidden'>
      {/* Decorative circles */}
      <div className="absolute top-[10%] right-0 h-[370px] w-[370px] bg-white rounded-full opacity-5"></div>
      <div className="absolute top-[60%] left-[30%] h-[370px] w-[370px] bg-white rounded-full opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-5 h-full">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-2 min-h-[70vh]">
          
          {/* Left Content */}
          <div className="left-content flex-1 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-2">
              <span className="text-red-400 text-lg">📍</span>
              <p className="text-white font-semibold">2,400+ verified pros in Dhaka</p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-black mb-2 leading-tight">
              Find Trusted<br />Local Services<span className="text-yellow-400">.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-blue-100 mb-12 leading-relaxed max-w-lg">
              Connect instantly with skilled electricians, plumbers, tutors, cleaners and more — vetted professionals ready to help.
            </p>

            {/* Stats */}
            <div className='reviews flex gap-12 sm:gap-8'>
              <div>
                <p className='text-4xl sm:text-3xl font-black text-white'>4.9<span className='text-yellow-400 ml-1'>★</span></p>
                <p className='text-blue-100 text-sm font-semibold uppercase tracking-wide'>AVG RATING</p>
              </div>
              <div className='border-l border-white/30'></div>
              <div>
                <p className='text-4xl sm:text-3xl font-black text-white'>12K+</p>
                <p className='text-blue-100 text-sm font-semibold uppercase tracking-wide'>JOBS DONE</p>
              </div>
              <div className='border-l border-white/30'></div>
              <div>
                <p className='text-4xl sm:text-3xl font-black text-white'>30 min</p>
                <p className='text-blue-100 text-sm font-semibold uppercase tracking-wide'>AVG RESPONSE</p>
              </div>
            </div>
          </div>

          {/* Right Content - Search Card */}
          <div className="right-content flex-1 w-full lg:max-w-lg">
            <div className='card bg-white rounded-3xl shadow-2xl p-6 mt-4  '>
              {/* Card Title */}
              <h2 className='text-2xl font-black text-gray-900 mb-2'>Find a Service</h2>
              <p className='text-gray-400 text-sm mb-4'>Search by category, location or name</p>

              {/* Category Select */}
              <div className='mb-6'>
                <label className='text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 block'>Service Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className='w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                >
                  <option value=''>Select Category</option>
                  <option value='electrician'>Electrician</option>
                  <option value='plumber'>Plumber</option>
                  <option value='tutor'>Tutor</option>
                  <option value='ac-repair'>AC Repair</option>
                  <option value='cleaning'>Cleaning</option>
                </select>
              </div>

              {/* Location and Distance */}
              <div className='grid grid-cols-3 gap-3 mb-6'>
                <div className='col-span-2'>
                  <label className='text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 block'>Location</label>
                  <div className='flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50'>
                    <span className='text-red-500 text-lg'>📍</span>
                    <input 
                      type='text'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className='flex-1 bg-transparent text-gray-700 font-medium focus:outline-none'
                    />
                  </div>
                </div>
                <div>
                  <label className='text-xs font-bold text-gray-600 uppercase tracking-wide mb-3 block'>Distance</label>
                  <div className='flex items-center gap-2 px-3 py-3 rounded-lg border border-gray-200 bg-gray-50'>
                    <span className='text-blue-600 text-lg'>📏</span>
                    <input 
                      type='text'
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className='w-full bg-transparent text-gray-700 font-medium focus:outline-none text-center'
                    />
                    <span className='text-gray-500 text-sm'>km</span>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg mb-6'>
                <span>🔍</span>
                Search Available Pros
              </button>

              {/* Popular Categories */}
              <div>
                <p className='text-xs font-bold text-gray-600 uppercase tracking-wide mb-4'>Popular:</p>
                <div className='flex flex-wrap gap-2'>
                  {categories.map((cat) => (
                    <Link key={cat.name} to={`/services?category=${cat.name}`} className={`px-4 py-2 rounded-full text-sm font-semibold ${cat.color} hover:shadow-md transition`}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home