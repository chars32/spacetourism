import styled from "styled-components"
import homebg from '../assets/home/background-home-mobile.jpg'

const HomeContainer = styled.div`
  background-image: url(${homebg});
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TextContainer = styled.div`
  width: 89.59%;
  height: 87.3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
`

const SpaceText = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  letter-spacing: 3px;
`

const SpaceTitle = styled.p`
  font-size: 5rem;
  font-family: 'Bellefair', serif;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpaceParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32.23%;
  font-family: 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 1px;
`

const CircleContainer = styled.div`
  height: 41.82%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CircleText = styled.div`
    background: white;
    color: #0B0D17;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bellefair', serif;
    letter-spacing: 1.25px;
    font-size: 1rem;
`

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <SpaceText>SO, YOU WANT TO TRAVEL TO</SpaceText>
        <SpaceTitle>SPACE</SpaceTitle>
        <SpaceParagraph>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</SpaceParagraph>
      </TextContainer>
      <CircleContainer>
        <CircleText>EXPLORE</CircleText>
      </CircleContainer>
    </ HomeContainer>
  )
}

export default Home
