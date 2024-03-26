import { Link } from "react-router-dom"

function MyBackground() {
  return (
    <div className="bg-gradient-to-tr from-[#000000] to-[#180034] px-7 py-8 text-gray-50 rounded-md shadow-xl shadow-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-[4fr,1fr] gap-6 md:gap-4">
        <div className="flex flex-col gap-4 text-justify">
          <h2 className="text-center md:text-left text-lg font-bold">A little bit about me</h2>
          {/* <p className="md:text-xl">I am a web and react applications developer with a passion for creating visually appealing and user-friendly websites. My background includes extensive experience in HTML, CSS, and JavaScript, as well as a strong knowledge of responsive design and cross-browser compatibility. I am always eager to learn new technologies and stay updated with the latest trends in web development.</p> */}
          {/* <p className="md:text-lg"> My name is Ayoub. I am a college graduate with a physics degree. I had some exposure to programming during my college years, such as HTML/CSS, Javascript, C++ and Fortran.</p> */}
          <p className="md:text-lg"> Welcome to my website! My name is Ayoub. I am a Web developer with a passion for creating fast and snappy websites and apps that also look good & modern. </p>
          <p className="md:text-lg hidden md:block">My background includes extensive experience in HTML, CSS, and JavaScript. I am always eager to learn new technologies and stay updated with the latest trends in web development.</p>
          {/* <p className="md:text-lg"> During the pandemic, I found myself at home with a lot of time on my hands so I picked up web development and I ended up being part of an E-commerce startup where I was the one who developed the site, worked on SEO and integrations. I discovered my passion for programming and ended up taking dedicated courses, building multiple projects using React, React Native and NodeJs.</p> */}
          <p className="md:text-lg">
            <Link to={"/about"} className="hover:text-sky-300 transition duration-300">
              Interested in how I became a Web developer? Check out my About page
            </Link>{" "}
          </p>
        </div>
        <div className="flex flex-col flex-1 md:pl-10 md:justify-center items-center md:items-start">
          <img src="imgs/myself.webp" className="md:max-h-80 md:max-w-80 w-60 md:w-70 aspect-square md:h-70 object-cover rounded-full md:rounded-xl" alt="photo-2" loading="eager" />
        </div>
        <div className="md:flex flex-col flex-1  md:justify-center hidden">
          <img src="imgs/photo-1.webp" className="max-h-60 object-cover aspect-square md:w-full h-full rounded-xl" alt="photo-1" loading="eager" />
        </div>
        <div className="flex flex-col gap-4 md:pl-10">
          <h2 className="text-center md:text-left text-lg font-bold">Experience</h2>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex flex-col  items-center md:items-start">
              <p>Web Developer</p>
              <p>2020 - Present</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p>Front End Development</p>
              <p>2019 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBackground

//grid grid-cols-1 sm:grid-cols-[3fr,1fr]
