import styled from 'styled-components'

import CrewBg from '../assets/crew/background-crew-mobile.jpg'
import Ansari from '../assets/crew/image-anousheh-ansari.png'
import Hurley from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from '../assets/crew/image-victor-glover.png'

const CrewList = {
  Ansari,
  Hurley,
  Mark,
  Victor
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
  return (
    <CrewMainContainer>
      <CrewContainer>
        <CrewTextContainer>
          <CrewNumber>02</CrewNumber>
          <CrewTitle>MEET YOUR CREW</CrewTitle>
        </CrewTextContainer>
        <CrewImageContainer style={{ backgroundImage: `url(${CrewList.Hurley})` }} />
        <CrewIndicatorInfo>
          <CrewIndicators>
            <BulletFirst />
            <Bullet />
            <Bullet />
            <Bullet />
          </CrewIndicators>
          <CrewInfo>
            <CrewPosition>
              Commander
            </CrewPosition>
            <CrewName>
              Douglas Hurley
            </CrewName>
            <CrewResume>
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </CrewResume>
          </CrewInfo>
        </CrewIndicatorInfo>
      </CrewContainer>
    </CrewMainContainer>
  )
}

export default Crew
