import { useState } from "react"

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="flex flex-col bg-stone-100 py-6 px-8 rounded-lg shadow-lg items-center gap-4 text-justify hover:bg-stone-300 transition-colors duration-300" onClick={() => setIsExpanded(prev => !prev)}>
      <h1 className="text-lg font-bold">Hey there! The name&lsquo;s Ayoub and this is my story</h1>
      <p>I am a college graduate with a physics degree. During my early years of university, I learned the basics of Web development, such as HTML, CSS and a little bit of Javascript. Later on, I had more exposure to programming languages such as C, C++, Python and even good old Fortran. Even though the programming I did in university and during internships was applied to physics (simulations of collisions between particles, calculating integrals, etc..) I still had fun learning and writing it.</p>
      {isExpanded ? (
        <>
          <p>During the Covid lockdown, I ended up with a lot of time on my hands and a friend of mine came up with the idea of starting an E-commerce business. We made a website on Shopify. Picked a stock theme, dragged and dropped things into place, used extensions and add-ons whenever anything was needed, nothing fancy and no code lines were written that day. And then we realized that the site was pretty laggy and the performance score I believe was like 16 or something out of 100? And all the subscription based apps were starting to make that monthly bill look horrendous.</p>
          <p>After a little bit of googling and common sense, I realized that some apps needed to go but their functionality needed to stay, and so I started slowly replacing them one by one by code I wrote myself and our website&lsquo;s performance score started to improve, and so did the monthly bills from Shopify. The process took endless nights of research, Stackoverflow and swearing at my keyboard, but everytime I was able to figure out a solution and implement it successfully, it made it all worth it and my confidence in my skills grew astronomically, until the next problem I tackled at that is..</p>
          <p>Later on, I decided I didn&lsquo;t like our stock theme and I wanted something custom instead, and besides the libraries our theme was using were either old or deprecated, or both, so I customized the hell out of it, upgraded libraries and everything until I was content with the way it looked and behaved.</p>
          <p>Few months went by and our site was still not getting any organic visits and I figured we can&lsquo;t solely rely on ads as those were pretty expensive, and so through googling I learned there was something called SEO, and it turned out the stock theme from Shopify didn&lsquo;t include valid structured data which I had no idea about at the time. My friend suggested we pay someone to handle it, but me being the &ldquo;Web Developer&ldquo; and feeling that my pride was on the line, I told him to let me handle it. After hours and hours spent trying to figure out what the heck is a JSON, I had it figured out and implemented it, and from there I did all kinds of optimization until our website had a score of 100 SEO wise and our product pages were recognized as product pages in Google console and not just some page that has text on it.</p>
          <p>I became the Shopify guru in my circle by that point, not only did I know the Shopify admin panel like the back of my hand, but whatever features or optimizations the Shopify themes lacked, big or small, I could implement with a few lines of code.</p>
          <p> I went on to build and maintain multiple sites on Shopify for friends and aquaintances as a freelancer, and the more time I spent writing code, the more I realized that this is the career path for me. And so I decided to take a dedicated programming course and learn as much as I can about Javascript. What started as a 20 hour Fullstack Web developer course ended up as hundreds of hours worth of courses learning about data structures, responsive design, front-end, back-end, databases, NodeJs, MongoDB, React, React Native, etc.. and hundreds of hours more spent building websites and apps for customers as a freelancer and for my own fun and learning.</p>
        </>
      ) : (
        <p>I learned programming during lockdown and had fun building websites for friends and aquaintances as a freelancer, and many more for my portfolio.</p>
      )}
    </div>
  )
}

export default AboutMe
