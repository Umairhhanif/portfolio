import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-[#fff8e7]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg mx-auto w-[300px] h-[350px]"
              alt="about"
              src={require("../../../public/Profilepic.jpg")}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              Phone Number: 03058365059
              Email : umairhhanif0@gmail.com
            </p>
            <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil
              a consequatur sint incidunt, labore laborum unde perferendis
              impedit reiciendis ea veritatis, velit rerum assumenda. Ea esse
              illum excepturi enim!
            </p>
            <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nihil
              a consequatur sint incidunt, labore laborum unde perferendis
              impedit reiciendis ea veritatis, velit rerum assumenda. Ea esse
              illum excepturi enim!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>

  );
};

export default About;
