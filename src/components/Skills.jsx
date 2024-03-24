import { useLocation } from "react-router-dom"
import styled from "styled-components"

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  justify-content: space-between;
  padding: 2rem 2rem;
  gap: 1rem;
  background-image: linear-gradient(to top right, #000000, #180034);
  border-radius: 0.375rem;
`

const SkillTitle = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`

const SkillSubTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`

const SkillBody = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`

function Skills() {
  const { pathname } = useLocation()
  return (
    <div>
      {pathname === "/about" ? <h1 className="text-2xl sm:text-3xl font-bold text-center">Skills</h1> : null}
      <div className="flex flex-col md:flex-row gap-6 my-6 text-gray-100 mt-8">
        <SkillCard className="shadow-xl shadow-gray-400">
          <SkillTitle>Programming Skills</SkillTitle>
          <SkillSubTitle>Front-end</SkillSubTitle>
          <SkillBody>HTML - CSS - SASS - Javascript - ES6 - React - Typescript - React Native - SPAs (single-page apps)</SkillBody>
          <SkillSubTitle>Back-end</SkillSubTitle>
          <SkillBody>Node.js - Express.js - MongoDB - RESTful APIs - SupabaseJs</SkillBody>
        </SkillCard>
        <SkillCard className="shadow-xl shadow-gray-400">
          <SkillTitle>Libraries & Dev Tools</SkillTitle>
          <SkillSubTitle>Libraries</SkillSubTitle>
          <SkillBody>Bootstrap - Tailwind CSS - styled-components - Redux - Leaflet - Recharts - tanstack/react-query</SkillBody>
          <SkillSubTitle>Tools</SkillSubTitle>
          <SkillBody>Vite - VSCode - Git - Github - Netlify - Vercel - Render - Postman</SkillBody>
        </SkillCard>
        <SkillCard className="shadow-xl shadow-gray-400">
          <SkillTitle>Other Skills</SkillTitle>
          <SkillSubTitle>Extras</SkillSubTitle>
          <SkillBody>Search Engine Optimization (SEO) - Shopify - Google Search Console - Responsive Design</SkillBody>
          <SkillSubTitle>Languages I speak</SkillSubTitle>
          <SkillBody>I am trilingual, I speak English, French and Arabic on a daily basis for the past 20 years</SkillBody>
        </SkillCard>
      </div>
    </div>
  )
}

export default Skills
