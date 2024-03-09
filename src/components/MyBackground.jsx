function MyBackground() {
  return (
    <div className="bg-[#261B1D] px-7 py-8 text-gray-50 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-6 md:gap-2">
        <div className="flex flex-col gap-4 text-justify md:pr-10">
          <h2 className="text-center md:text-left text-lg font-bold">My background</h2>
          <p className="md:text-xl">I am a web and react applications front end developer with a passion for creating visually appealing and user-friendly websites. My background includes extensive experience in HTML, CSS, and JavaScript, as well as a strong knowledge of responsive design and cross-browser compatibility. I am always eager to learn new technologies and stay updated with the latest trends in web development.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center md:text-left text-lg font-bold">Skills</h2>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p>Web Developer</p>
            <p>2010 - Present</p>
            <p>Front End Development</p>
            <p>2008 - 2010</p>
          </div>
        </div>
        <div className="flex flex-col flex-1  md:justify-center  ">
          <img src="imgs/new/photo-1.webp" className="max-h-80 object-cover aspect-square md:w-full h-full rounded-md" alt="photo-1" loading="eager" />
        </div>
        <div className="flex flex-col flex-1  md:justify-center">
          <img src="imgs/new/photo-2.webp" className="max-h-80 md:max-w-80 aspect-square object-cover rounded-md" alt="photo-2" loading="eager" />
        </div>
      </div>
    </div>
  )
}

export default MyBackground

//grid grid-cols-1 sm:grid-cols-[3fr,1fr]
