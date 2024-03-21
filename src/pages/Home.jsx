import { Helmet } from "react-helmet-async"
import MyBackground from "../components/MyBackground"
import Projects from "../components/Projects"

function Home() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>Web & IT Genius | Home</title>
        <meta name="description" content={`${"test"}`} />
        <link rel="canonical" href="https://webitgenius.com/home" />
      </Helmet>
      <MyBackground />
      <Projects />
    </>
  )
}

export default Home
