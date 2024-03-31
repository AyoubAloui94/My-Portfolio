import { Helmet } from "react-helmet-async"
import Skills from "../components/Skills"
import FactsAboutMe from "../components/FactsAboutMe"

function About() {
  return (
    <div className="min-h-[100dvh]">
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>alouiayoub.com | About</title>
        <meta name="description" content={"Here is my skillset along with some more info about me"} />
        <link rel="canonical" href="https://alouiayoub.com/about" />
      </Helmet>
      <Skills />
      <FactsAboutMe />
    </div>
  )
}

export default About
