import { Helmet } from "react-helmet-async"
import MyBackground from "../components/MyBackground"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>Web & IT Genius | Home</title>
        <meta name="description" content={"I am a web and react applications developer with a passion for creating visually appealing and user-friendly websites. My background includes extensive experience in HTML, CSS, and JavaScript, as well as a strong knowledge of responsive design and cross-browser compatibility. I am always eager to learn new technologies and stay updated with the latest trends in web development"} />
        <link rel="canonical" href="https://alouiayoub.com/home" />
      </Helmet>
      <MyBackground />
      <Skills />
      <Projects />
    </>
  )
}

export default Home
