function MyBackground() {
  return (
    <div className="bg-[#261B1D] px-7 py-8 text-gray-50 flex flex-col gap-6">
      <div className="flex flex-1 gap-2 md:gap-16">
        <div className="flex flex-col gap-4 basis-8/12 px-5">
          <h2>My background</h2>
          <p className="text-xl">I am a web and react applications front end developer with a passion for creating visually appealing and user-friendly websites. My background includes extensive experience in HTML, CSS, and JavaScript, as well as a strong knowledge of responsive design and cross-browser compatibility. I am always eager to learn new technologies and stay updated with the latest trends in web development.</p>
        </div>
        <div className="flex flex-col gap-4 basis-3/12">
          <h2>Skills</h2>
          <p>Web Developer</p>
          <p>2010 - Present</p>
          <p>Front End Development</p>
          <p>2008 - 2010</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-row flex-1 md:gap-4 justify-center items-center">
        <img src="imgs/photo-1.jpg" className="md:aspect-square md:max-h-80  md:basis-9/12 object-cover" />
        <img src="imgs/photo-2.jpg" className="sm:aspect-square md:max-h-80  md:basis-3/12 object-cover" />
      </div>
    </div>
  )
}

export default MyBackground

//grid grid-cols-1 sm:grid-cols-[3fr,1fr]
