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
  // transform: translateX(102%);
  transform: ${({toogle}) => toogle ? 'translateX(0)' : 'translateX(102%)'};

  box-sizing: border-box;
  `

const ItemCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
`

const ItemCloseImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

  const ItemContainer = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.05rem;
  margin: 2rem 0;
`

const ItemNumber = styled.span`
  font-weight: bold;
  padding: 0 1rem;
`

const ItemText = styled.span`
  letter-spacing: 0.17rem;
`

const NavbarSlider = ({toogle, HandleToogle}) => {
  return (
    <NavbarSliderMain toogle={toogle}>
      <ItemCloseContainer>
        <ItemCloseImg src={itemClose} onClick={HandleToogle}/>
      </ItemCloseContainer>
      <ItemContainer>
        <ItemNumber>00</ItemNumber>
        <ItemText>HOME</ItemText>
      </ItemContainer>          
      <ItemContainer>
        <ItemNumber>01</ItemNumber>
        <ItemText>DESTINATION</ItemText>
      </ItemContainer>          
      <ItemContainer>
        <ItemNumber>02</ItemNumber>
        <ItemText>CREW</ItemText>
      </ItemContainer>          
      <ItemContainer>
        <ItemNumber>03</ItemNumber>
        <ItemText>TECHNOLOGY</ItemText>
      </ItemContainer>          
    </NavbarSliderMain>
  )
}

export default NavbarSlider
