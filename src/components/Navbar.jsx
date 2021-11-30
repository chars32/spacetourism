import styled from 'styled-components'

import logo from '../assets/shared/logo.svg'
import burguer from '../assets/shared/icon-hamburger.svg'

const NavbarMainContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  margin-top: 1.5rem;
  `

const NavbarItemsContainer = styled.div`
  width: 89.59%;
  height 100%;  
`

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoImage = styled.div`
  width: 40px;
  height: 100%;
  background-image: url(${logo});
  background-size: cover; 
`

const BurguerImage = styled.div`
  width: 1.5rem;
  height: 1.3rem;
  background-image: url(${burguer});
  background-size: cover;
`

const Navbar = () => {
  return (
    <NavbarMainContainer>
      <NavbarItemsContainer>
        <LogoContainer>
          <LogoImage />
          <BurguerImage />
        </LogoContainer>
      </NavbarItemsContainer>
    </NavbarMainContainer>
  )
}

export default Navbar
