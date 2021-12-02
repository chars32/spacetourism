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
	width: 13rem;
  height: 13rem;
  margin-top: 2rem;
  background-size: cover;
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
			</CrewContainer>
		</CrewMainContainer>
	)
}

export default Crew
