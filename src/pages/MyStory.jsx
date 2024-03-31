import { Helmet } from "react-helmet-async"

function MyStory() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>alouiayoub.com | My Story</title>
        <meta name="description" content={"This is the story of how I ended up as a web developer despite having a physics degree"} />
        <link rel="canonical" href="https://alouiayoub.com/mystory" />
      </Helmet>
      <div className="flex flex-col py-6 px-8 items-center gap-4 text-justify">
        <h1 className="text-lg font-bold">Hey there! my name is Ayoub and this is my Web dev story</h1>
        <p>I am a college graduate with a physics degree. During my early years of university, I learned the basics of Web development, such as HTML, CSS and a little bit of Javascript. Later on, I had more exposure to programming languages such as C, C++, Python and even good old Fortran. Even though the programming I did in university and during internships was applied to physics (simulations of collisions between particles, calculating integrals, etc..) I still had fun learning and writing it.</p>

        <p>Towards the end of 2019, 2 friends of mine came up with the idea of starting an E-commerce business. A web developer was needed so I stepped in to fill that role. We made a website on Shopify. Picked a stock theme, dragged and dropped things into place, used extensions and add-ons whenever anything was needed, nothing fancy and no code lines were written that day. And then we realized that the site was pretty laggy and the performance score I believe was 16 out of 100. And all the subscription based apps were starting to make that monthly bill look horrendous.</p>
        <p>After a little bit of googling and common sense, I realized that some apps needed to go but their functionality needed to stay, and at the time Covid lockdowns became a thing so I had more free time on my hands and that was the point where my Web development journey began. I started slowly replacing Shopify apps one by one with code I wrote myself and our website&lsquo;s performance score started to improve, and so did the monthly bills from Shopify. The process took endless nights of research, Stackoverflow and swearing at my keyboard wondering if I was even fit to be the Web Dev for the job, but every time I was able to figure out a solution and implement it successfully, it made it all worth it and my confidence in my skills grew astronomically, until the next problem I tackled that is..</p>
        <p>Later on, I decided I didn&lsquo;t like our stock theme and I wanted something custom instead, and besides the libraries our theme was using were either old or deprecated, or both, so I customized the hell out of it, upgraded libraries and everything until I was content with the way it looked and behaved.</p>
        <p>Few months went by and our site was still not getting any organic visits and I figured we can&lsquo;t solely rely on ads as those were pretty expensive, and so through googling I learned there was something called SEO, and it turned out the stock theme from Shopify didn&lsquo;t include valid structured data which I had no idea about at the time. My friend suggested we pay someone to handle it, but me being the &ldquo;Web Developer&ldquo; and feeling that my pride was on the line, I told him to let me handle it. After hours and hours spent trying to figure out what the heck is a JSON-LD, I had it figured out and implemented it, and from there I did all kinds of optimization until our website had a score of 100 SEO wise and our product pages were recognized as product pages in Google console and not just some pages that had text on them.</p>
        <p>I became the Shopify guru in my circle by that point, not only did I know the Shopify admin panel like the back of my hand, but whatever features or optimizations the Shopify themes lacked, big or small, I could implement with a few lines of code.</p>
        <p>By that point, it was getting harder to keep our startup afloat because of the economic situation and it was time for me to find another source of income, so I opened my own auto-entreprise Web & IT Genius and I went on to build and maintain multiple sites on Shopify for friends and aquaintances. The more time I spent writing code, the more I understood that this is the career path for me. And so I decided to take a dedicated programming course and learn as much as I can about Javascript. What started as a 20 hour Fullstack Web developer course ended up as hundreds of hours worth of courses learning about data structures, responsive design, front-end, back-end, databases, NodeJs, MongoDB, React, React Native, etc.. and hundreds of hours more spent building websites and apps for customers and for my own fun and learning.</p>
      </div>
    </>
  )
}

export default MyStory
