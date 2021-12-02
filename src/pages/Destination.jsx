import { useState } from "react"
import styled from "styled-components"

import destinationbg from '../assets/destination/background-destination-mobile.jpg'
import Moon from '../assets/destination/image-moon.png'
import Titan from '../assets/destination/image-titan.png'
import Mars from '../assets/destination/image-mars.png'
import Europa from '../assets/destination/image-europa.png'

import { destinations } from '../data.json'

const PlanetsList = {
  Moon,
  Mars,
  Titan,
  Europa
}

const DestinationMainContainer = styled.div`
  background-image: url(${destinationbg});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
`
const DestinationInfoContainer = styled.div`
  width: 89.59%;
  padding-top: 5.5rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`
const DestinationInfoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Barlow Condensed', sans-serif;
`

const InfoTitleNumber = styled.span`
  margin-right: 1.15rem;
  color: #979797  ;
  letter-spacing: 0.17rem;
  font-weight: 600;
`
const InfoTitleText = styled.span`
  letter-spacing: 0.17rem;
`
const DestinationPlanet = styled.div`
  width: 13rem;
  height: 13rem;
  margin-top: 2rem;
  background-size: cover;
`

const PlanetMenuContainer = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  display: flex;
  justify-content: space-between;
  width: 70.6%;
  margin-top: 2rem;
  z-index: 1;
`

const PlanetMenuItem = styled.div`
  letter-spacing: 0.148rem;
`

const FirstPlanetMenuItem = styled(PlanetMenuItem)`
  border-bottom: 1px solid white;
  padding-bottom: 0.3rem;
`

const PlanetDescriptionContainer = styled.div`
  margin-top: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  `
const PlanetTitle = styled.p`
  font-size: 3.5rem;
  font-family: 'Bellefair', serif;
  text-align: center;
`

const PlanetInfo = styled.p`
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
`

const DividerContainer = styled.div`
  width: 100%;
  height: 1px;
  background: #979797;
  margin-top: 2rem;
`

const PlanetMetrics = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PlanetDistance = styled.div`
`

const PlanetTravelTime = styled.div`
  margin-top: 2rem;
`

const MetricTitle = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 0.16rem;  
`

const MetricNumbers = styled.p`
  font-family: 'Bellefair', serif;
  font-size: 1.7rem;
  text-align: center;
  padding-top: 0.75rem;
`

const Destination = () => {
  const [infoPlanet, setInfoPlanet] = useState(destinations[0])

  const SetPlanetInfo = (e) => {
    // Get item planet selected and capitalize name
    let getPlanet = e.target
    let capitalizeNamePlanet = (getPlanet.innerHTML[0] + getPlanet.innerHTML.slice(1).toLowerCase())

    // SetInfoPlanet data of item selected  
    for (let dest in destinations) {
      if (destinations[dest].name === capitalizeNamePlanet) {
        setInfoPlanet(destinations[dest])
        // Add border bottom to item selected
        getPlanet.style.borderBottom = '1px solid white'
      } else {
        // Remove border bottom to no selected item
        getPlanet.parentNode.childNodes[dest].style.borderBottom = 'None'
      }
    }
  }

  return (
    <DestinationMainContainer>
      <DestinationInfoContainer>
        <DestinationInfoTitle>
          <InfoTitleNumber>01</InfoTitleNumber>
          <InfoTitleText>PICK YOUR DESTINATION</InfoTitleText>
        </DestinationInfoTitle>
        <DestinationPlanet infoPlanet={infoPlanet} style={{ backgroundImage: `url(${PlanetsList[infoPlanet.name]})` }} />
        <PlanetMenuContainer>
          <FirstPlanetMenuItem onClick={SetPlanetInfo}>MOON</FirstPlanetMenuItem>
          <PlanetMenuItem onClick={SetPlanetInfo}>MARS</PlanetMenuItem>
          <PlanetMenuItem onClick={SetPlanetInfo}>EUROPA</PlanetMenuItem>
          <PlanetMenuItem onClick={SetPlanetInfo}>TITAN</PlanetMenuItem>
        </PlanetMenuContainer>
        <PlanetDescriptionContainer>
          <PlanetTitle>{infoPlanet.name.toUpperCase()}</PlanetTitle>
          <PlanetInfo>{infoPlanet.description}</PlanetInfo>
        </PlanetDescriptionContainer>
        <DividerContainer />
        <PlanetMetrics>
          <PlanetDistance>
            <MetricTitle>
              AVG. DISTANCE
            </MetricTitle>
            <MetricNumbers>
              {infoPlanet.distance}
            </MetricNumbers>
          </PlanetDistance>
          <PlanetTravelTime>
            <MetricTitle>EST. TRAVEL TIME</MetricTitle>
            <MetricNumbers>{infoPlanet.travel}</MetricNumbers>
          </PlanetTravelTime>
        </PlanetMetrics>
      </DestinationInfoContainer>
    </DestinationMainContainer>
  )
}

export default Destination
