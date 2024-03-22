import styled from "styled-components"

const Fact = styled.div``

const FactTitle = styled.h1`
  font-size: larger;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const FactBody = styled.div`
  text-align: justify;
`

function FactsAboutMe() {
  return (
    <div className="flex flex-col my-4 gap-3">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Facts about me</h1>
      <Fact>
        <FactTitle>How I would describe myself</FactTitle>
        <FactBody>I have a strong memory and an analytical brain. I thrive in fierce competition and constantly feel the need to get better at whatever I do. I am a little bit of a math-head (emphasis on the &lsquo;a&lsquo; in math) in how I do things, always trying to see the full picture first and then zooming-in on the details in a calculated manner. I am a very fast learner.</FactBody>
      </Fact>
      <Fact>
        <FactTitle>My biggest strength</FactTitle>
        <FactBody>Problem solving: my good analytical memory and scientific background allow me to approach issues as math problems and figure out solutions through extensive research, thinking outside the box and not giving up until I am able to solve the problem at hand.</FactBody>
      </Fact>
      <Fact>
        <FactTitle>My biggest weakness</FactTitle>
        <FactBody>Being unable to switch off while a problem is unsolved: figures that my biggest weakness has to do with my biggest strength, but it&lsquo;s true. Not being able to figure out the solution to a problem can make it live rent free in my head to the point of obsession sometimes, until I can finally figure it out.</FactBody>
      </Fact>
      <Fact>
        <FactTitle>Hobbies</FactTitle>
        <FactBody>Cooking, listening to music (mostly Metal), keeping and breeding fish, indoor gardening, programming (yup, I also enjoy writing code in my free time)</FactBody>
      </Fact>
    </div>
  )
}

export default FactsAboutMe

// <FactBody>Being unable to switch off while a problem is unsolved: figures that my biggest weakness has to do with my biggest strength, but it&lsquo;s true, solving problems for me is a double-edged sword. Not being able to figure out the solution to a problem can make me pause everything else or not do anything else until that one problem is solved, sometimes it gets to the point of obsession where I barely can sleep and whenever I do I dream about that one problem and keep thinking of ways to solve it. My work-around is, if it happens while building an app for example, whenever I can tell that a certain task is gonna be problematic, to take care of everything else I can and try to research the problem during my short breaks, and only fully jump into solving it once everything else is basically done. Only downside is sometimes complex problems don&lsquo;t give you a heads-up and so if you&lsquo;re like me, you go down that wormhole...</FactBody>
