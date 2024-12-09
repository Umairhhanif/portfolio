"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
    <section className="text-gray-600 body-font bg-gray-100">
      
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium tracking-wide text-cyan-800">
        I am
        <br className="hidden lg:inline-block "/>
        <Typewriter
        options={{
        strings: ['Web Developer.', 'Innovative Entrepreneur.','Skilled Accountant.','Stocks Trader.'],
        autoStart: true,
        loop: true,
        }}
      />

      </h1>
      <div className="w-[100px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed text-black" >
       i am a passionate web developer, innovative entrepreneur, and skilled accountant. I am dedicated to providing professional and reliable services in each of these fields. "I bring a unique blend of technical expertise, business acumen, and financial precision to every project I undertake. My goal is to deliver solutions that drive growth, efficiency, and success for my clients."
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
          Contact
        </button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-lg"
        alt="hero"
        width={400}
        height={400}
        src={require('../../../public/Profilepic.jpg')}
        />
    </div>
  </div>
</section>
  )
}

export default Hero