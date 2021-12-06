import { useState } from 'react'
import styled from 'styled-components'

import CrewBg from '../assets/crew/background-crew-mobile.jpg'
import Ansari from '../assets/crew/image-anousheh-ansari.png'
import Hurley from '../assets/crew/image-douglas-hurley.png'
import Shuttleworth from '../assets/crew/image-mark-shuttleworth.png'
import Glover from '../assets/crew/image-victor-glover.png'

import { crew } from '../data.json'

const CrewList = {
  Ansari,
  Hurley,
  Shuttleworth,
  Glover
}

const CrewMainContainer = styled.div`
	background-image: url(${CrewBg});
	background-size: cover;
	height: 100%;
	width: 100%;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
`

const CrewContainer = styled.div`
	width: 89.59%;
	height: 73.4%;
  z-index: 1;
`
const CrewTextContainer = styled.div`
	width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Barlow Condensed', sans-serif;
`

const CrewNumber = styled.span`
	margin-right: 1.15rem;
  color: #979797  ;
  letter-spacing: 0.17rem;
  font-weight: 600;	
`

const CrewTitle = styled.span`
	letter-spacing: 0.17rem;
`

const CrewImageContainer = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 2rem;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
  border-bottom: 1px solid #979797;
`

const CrewIndicatorInfo = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 2rem;
`

const CrewIndicators = styled.div`
  display: flex;
  justify-content: center;
`

const Bullet = styled.div`
  height: 15px;
  width: 15px;
  background: #979797;
  border-radius: 50%;
  margin: 0 0.5rem;
`

const BulletFirst = styled(Bullet)`
  background: white;
`

const CrewInfo = styled.div`
  text-align: center;
`

const CrewPosition = styled.p`
  font-family: 'Bellefair', serif;
  color: #979797;
  margin-top: 2rem;
  font-size: 1.1rem;
`

const CrewName = styled.div`
  font-family: 'Bellefair', serif;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`

const CrewResume = styled.div`
  font-family: 'Barlow', sans-serif;
  color: #D0D6F9;
  margin-top: 1.2rem;
  font-size: 1rem;
  line-height: 1.5rem;
`


const Crew = () => {
  const [crewInfo, setCrewInfo] = useState(crew[0])

  const setInfoCrew = (e) => {
    const selectedItem = e.target
    const selectedItemValue = selectedItem.getAttribute('value')

    for (let number in crew) {
      if (crew[number].name === selectedItemValue) {
        setCrewInfo(crew[number])
        selectedItem.style.background = 'white'
      } else {
        selectedItem.parentNode.childNodes[number].style.background = '#979797'
      }
    }
  }

  return (
    <CrewMainContainer>
      <CrewContainer>
        <CrewTextContainer>
          <CrewNumber>02</CrewNumber>
          <CrewTitle>MEET YOUR CREW</CrewTitle>
        </CrewTextContainer>
        <CrewImageContainer style={{ backgroundImage: `url(${CrewList[crewInfo.name.split(" ")[1]]})` }} />
        <CrewIndicatorInfo>
          <CrewIndicators>
            <BulletFirst onClick={setInfoCrew} value="Douglas Hurley" />
            <Bullet onClick={setInfoCrew} value="Mark Shuttleworth" />
            <Bullet onClick={setInfoCrew} value="Victor Glover" />
            <Bullet onClick={setInfoCrew} value="Anousheh Ansari" />
          </CrewIndicators>
          <CrewInfo>
            <CrewPosition>
              {crewInfo.role.toUpperCase()}
            </CrewPosition>
            <CrewName>
              {crewInfo.name.toUpperCase()}
            </CrewName>
            <CrewResume>
              {crewInfo.bio}
            </CrewResume>
          </CrewInfo>
        </CrewIndicatorInfo>
      </CrewContainer>
    </CrewMainContainer>
  )
}

export default Crew
