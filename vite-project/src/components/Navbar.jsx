import React from 'react'

function Navbar() {
  return (
    <div>
       <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">

      <div class="text-white text-xl font-bold">
        MyLogo
      </div>
      <div class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-300 hover:text-white">Home</a>
        <a href="#" class="text-gray-300 hover:text-white">About</a>
        <a href="#" class="text-gray-300 hover:text-white">Services</a>
        <a href="#" class="text-gray-300 hover:text-white">Contact</a>
      </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
