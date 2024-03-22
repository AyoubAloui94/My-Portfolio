import { Helmet } from "react-helmet-async"
import MyStory from "../components/MyStory"
import Skills from "../components/Skills"
import FactsAboutMe from "../components/FactsAboutMe"

function About() {
  return (
    <div className="min-h-[29rem]">
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>Web & IT Genius | About</title>
        <meta name="description" content={`${"test"}`} />
        <link rel="canonical" href="https://webitgenius.com/about" />
      </Helmet>
      <Skills />
      <FactsAboutMe />
      <MyStory />
    </div>
  )
}

export default About
