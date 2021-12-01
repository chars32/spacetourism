import styled from "styled-components"

import destinationbg from '../assets/destination/background-destination-mobile.jpg'
import moonimg from '../assets/destination/image-moon.png'

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
const DestinationPlanet = styled.img`
  width: 13rem;
  height: 13rem;
  margin-top: 2rem;
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
  // Bottom lines -- figureout how to implement it
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
  return (
    <DestinationMainContainer>
      <DestinationInfoContainer>
        <DestinationInfoTitle>
          <InfoTitleNumber>01</InfoTitleNumber>
          <InfoTitleText>PICK YOUR DESTINATION</InfoTitleText>
        </DestinationInfoTitle>
        <DestinationPlanet src={moonimg} />
        <PlanetMenuContainer>
          <PlanetMenuItem onClick={() => console.log('moon')}>MOON</PlanetMenuItem>
          <PlanetMenuItem>MARS</PlanetMenuItem>
          <PlanetMenuItem>EUROPA</PlanetMenuItem>
          <PlanetMenuItem>TITAN</PlanetMenuItem>
        </PlanetMenuContainer>
        <PlanetDescriptionContainer>
          <PlanetTitle>MOON</PlanetTitle>
          <PlanetInfo>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</PlanetInfo>
        </PlanetDescriptionContainer>
        <DividerContainer />
        <PlanetMetrics>
          <PlanetDistance>
            <MetricTitle>
              AVG. DISTANCE
            </MetricTitle>
            <MetricNumbers>
              384,400 KM
            </MetricNumbers>
          </PlanetDistance>
          <PlanetTravelTime>
            <MetricTitle>EST. TRAVEL TIME</MetricTitle>
            <MetricNumbers>3 DAYS</MetricNumbers>
          </PlanetTravelTime>
        </PlanetMetrics>
      </DestinationInfoContainer>
    </DestinationMainContainer>
  )
}

export default Destination
