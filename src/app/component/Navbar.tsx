import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-slate-50 z-50 sticky-top-0 rounded-lg shadow-lg">
        <header className="text-gray-600 body-font  rounded-lg shadow-black">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <Image src={require("../../../public/logo.png")} alt= "Mohammad Umair" width={100} height={100} className='w-[150px]'/>

      <span className="ml-3 text-xl">Mohd Umair</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 text hover:text-blue-600">Home</Link>
      <Link href={"#about"} className="mr-8 hover:text-blue-600">about</Link>
      <Link href={"#skills"} className="mr-8 hover:text-blue-600">Skills</Link>
      <Link href={"#Projects"} className="mr-8 hover:text-blue-600">Projects</Link>
      <Link href={"#Contact"} className="mr-8 hover:text-blue-600">Contacts</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
      <a href="/public"></a>
      Download CV
      <IoCloudDownloadOutline className='text-xl ml-2'/>
      {/* <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg> */}
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar