import { useState } from "react"
import styled from "styled-components"

import { technology } from '../data.json'

import TechologyBG from '../assets/technology/background-technology-mobile.jpg'
import LaunchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg'
import Spaceport from '../assets/technology/image-spaceport-landscape.jpg'

const TechVehicles = {
  'Launch vehicle': LaunchVehicle,
  Spaceport,
  'Space capsule': SpaceCapsule
}

const TechnolgyMainContainer = styled.div`
  background-image: url(${TechologyBG});
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TechnologyContainer = styled.div`
	width: 89.59%;
	height: 73.4%;
  z-index: 1;
`
const TechnologyTextContainer = styled.div`
	width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Barlow Condensed', sans-serif;
`

const TechnologyNumber = styled.span`
	margin-right: 1.15rem;
  color: #979797  ;
  letter-spacing: 0.17rem;
  font-weight: 600;	
`

const TechnologyTitle = styled.span`
	letter-spacing: 0.17rem;
`

const TechnologyImageContainer = styled.div`
  width: 100%;
  height: 10.65rem;
  margin-top: 2rem;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`
const TechnologyIndicatorInfo = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 2rem;
`

const TechnologyIndicators = styled.div`
  display: flex;
  justify-content: center;
`

const Bullet = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid white;
  border-radius: 50%;
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BulletFirst = styled(Bullet)`
  background: white;
  color: black;
`

const TechnologyInfo = styled.div`
  text-align: center;
`

const TechnologyPosition = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: 0.15rem;
`

const TechnologyName = styled.div`
  font-family: 'Bellefair', serif;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`

const TechnologyResume = styled.div`
  font-family: 'Barlow', sans-serif;
  color: #D0D6F9;
  margin-top: 1.2rem;
  font-size: 1rem;
  line-height: 1.5rem;
`

const Technology = () => {
  const [technologyInfo, setTechnologyInfo] = useState(technology[0])

  const setInfoTechnology = (e) => {
    const selectedItem = e.target
    const selectedItemValue = selectedItem.getAttribute('value')

    for (let number in technology) {
      if (technology[number].name === selectedItemValue) {
        setTechnologyInfo(technology[number])
        selectedItem.style.background = 'white'
        selectedItem.style.color = 'black'
      } else {
        selectedItem.parentNode.childNodes[number].style.background = 'None'
        selectedItem.parentNode.childNodes[number].style.color = 'white'
      }
    }
  }

  return (
    <TechnolgyMainContainer>
      <TechnologyContainer>
        <TechnologyTextContainer>
          <TechnologyNumber>03</TechnologyNumber>
          <TechnologyTitle> SPACE LAUNCH 101</TechnologyTitle>
        </TechnologyTextContainer>
        <TechnologyImageContainer style={{ backgroundImage: `url(${TechVehicles[technologyInfo.name]}` }} />
        <TechnologyIndicatorInfo>
          <TechnologyIndicators>
            <BulletFirst onClick={setInfoTechnology} value='Launch vehicle'>1</BulletFirst>
            <Bullet onClick={setInfoTechnology} value='Spaceport'>2</Bullet>
            <Bullet onClick={setInfoTechnology} value='Space capsule'>3</Bullet>
          </TechnologyIndicators>
          <TechnologyInfo>
            <TechnologyPosition>
              THE TERMINOLOGY...
            </TechnologyPosition>
            <TechnologyName>
              {technologyInfo.name.toUpperCase()}
            </TechnologyName>
            <TechnologyResume>
              {technologyInfo.description}
            </TechnologyResume>
          </TechnologyInfo>
        </TechnologyIndicatorInfo>
      </TechnologyContainer>
    </TechnolgyMainContainer>
  )
}

export default Technology
