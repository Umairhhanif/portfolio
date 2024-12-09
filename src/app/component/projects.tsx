import React from "react";

const Projects = () => {
  return (
    <div>
        <div id="Projects">
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
        
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
              My Project Details
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              i have successfully completed diverse projects in web development,
              entrepreneurship, and accounting. These include creating
              responsive websites with modern features, launching innovative
              business solutions, and providing comprehensive financial
              services. Each project reflects a commitment to delivering
              excellence, scalability, and value to clients across industries.
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./logo-01.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    RESTAURENT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cafe Ammos
                  </h1>
                  <p className="leading-relaxed">
                    Experience the vibrant flavors of the Mediterranean at Cafe
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./SETHJEE.JPG"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    RESTAURENT CLASSIC
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Seth Jee Restaurant,
                  </h1>
                  <p className="leading-relaxed">
                    located in Karachi, Pakistan, offers a rich array of
                    Pakistani cuisine that blends traditional flavors with
                    contemporary culinary techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://willowinternationalschool.com/wp-content/uploads/2022/11/logo.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    School
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WILLOW INTERNATIONAL SCHOOL
                  </h1>
                  <p className="leading-relaxed">
                    The school is committed to academic excellence, personal
                    growth, and holistic development, ensuring every child
                    thrives. Modern facilities, including climate-controlled
                    classrooms, an advanced ICT suite.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://willowinternationalschool.com/wp-content/uploads/2022/11/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Projects;
