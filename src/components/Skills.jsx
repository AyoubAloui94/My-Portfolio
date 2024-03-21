import styled from "styled-components"

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  padding: 1rem 2rem;
  gap: 1rem;
  background-color: #000000;
  border-radius: 10px;
`

const SkillTitle = styled.h1`
  text-align: center;
  font-size: larger;
  font-weight: 700;
`

const SkillSubTitle = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`

const SkillBody = styled.div`
  text-align: center;
`

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="flex flex-col md:flex-row gap-6 my-6 text-gray-100">
        <SkillCard>
          <SkillTitle>Skills</SkillTitle>
          <SkillSubTitle>Front-end</SkillSubTitle>
          <SkillBody>Javascript - HTML & CSS - ES6 - React - Typescript - React Native - SPAs (single-page apps)</SkillBody>
          <SkillSubTitle>Back-end</SkillSubTitle>
          <SkillBody>Node.js - Express.js - MongoDB - Rest APIs - SupabaseJs</SkillBody>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Libraries & Dev Tools</SkillTitle>
          <SkillSubTitle>Libraries</SkillSubTitle>
          <SkillBody>Bootstrap - Tailwind CSS - styled-components - Redux - Leaflet - Recharts - tanstack/react-query</SkillBody>
          <SkillSubTitle>Tools</SkillSubTitle>
          <SkillBody>Vite - VSCode - Git - Github - Netlify - Vercel - Render - Postman</SkillBody>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Other Skills</SkillTitle>
          <SkillSubTitle>Languages I speak</SkillSubTitle>
          <SkillBody>English, French and Arabic (native speaker in all 3)</SkillBody>
        </SkillCard>
      </div>
    </div>
  )
}

export default Skills
