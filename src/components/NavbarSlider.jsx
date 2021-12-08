import styled from "styled-components"

import itemClose from '../assets/shared/icon-close.svg'

const NavbarSliderMain = styled.div`
  background: rgb(62,112,144);
  position: absolute;
  right: 6px;
  width: 70%;
  height: 100%;
  opacity: 0.99;
  padding: 7.4rem 2rem;
  transition: transform 0.8s ease-in-out;
  transform: ${({ toogle }) => toogle ? 'translateX(0)' : 'translateX(102%)'};
  box-sizing: border-box;
  z-index: 2;
  @media(min-width: 768px) {
    transform: translateX(0);
    transition: none;
    padding: 0;
    width: 55%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    background: #989898;
  }
  `

const ItemCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  @media(min-width: 768px){
    display: none;
  }
`

const ItemCloseImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

const ItemContainer = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.05rem;
  margin: 2rem 0;
  @media(min-width: 768px){
    display:flex;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`
const ItemNumber = styled.span`
  font-weight: bold;
  padding: 0 1rem;
  @media(min-width: 768px){
    display: none
  }
`

const ItemText = styled.span`
  letter-spacing: 0.17rem;
  @media(min-width: 768px){
    letter-spacing: 0.1 7rem;
  }
`

const NavbarSlider = ({ toogle, HandleToogle, HandlePageSelected }) => {
  return (
    <NavbarSliderMain toogle={toogle}>
      <ItemContainer onClick={() => HandlePageSelected('Home')}>
        <ItemNumber>00</ItemNumber>
        <ItemText>HOME</ItemText>
      </ItemContainer>
      <ItemContainer onClick={() => HandlePageSelected('Destination')}>
        <ItemNumber>01</ItemNumber>
        <ItemText>DESTINATION</ItemText>
      </ItemContainer>
      <ItemContainer onClick={() => HandlePageSelected('Crew')}>
        <ItemNumber>02</ItemNumber>
        <ItemText>CREW</ItemText>
      </ItemContainer>
      <ItemContainer onClick={() => HandlePageSelected('Technology')}>
        <ItemNumber>03</ItemNumber>
        <ItemText>TECHNOLOGY</ItemText>
      </ItemContainer>
      <ItemCloseContainer>
        <ItemCloseImg src={itemClose} onClick={HandleToogle} />
      </ItemCloseContainer>
    </NavbarSliderMain>
  )
}

export default NavbarSlider
