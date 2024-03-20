import { Helmet } from "react-helmet-async"
import MyBackground from "../components/MyBackground"
import Projects from "../components/Projects"

function Home() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <link rel="preload" fetchPriority="high" as="image" href="/imgs/me.webp" type="image/webp" />
      </Helmet>
      <MyBackground />
      <Projects />
    </>
  )
}

export default Home
