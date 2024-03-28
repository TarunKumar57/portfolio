import styled from 'styled-components'

export const NavContainer = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  // background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  font-family: Roboto;
  margin-bottom: 0px;
  background-color: transparent;
  @media (max-width: 600px) {
    display: none;
  }
`

export const Logo = styled.h1`
  margin-left: 30px;
  //   font-family: 'Source Sans Pro', 'Arial', sans-serif;
  //   font-family: brush script mt, cursive;
  font-family: brush script mt, cursive;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const NavListContainer = styled.div`
  width: 50%;
  font-weight: 500;
  list-style-type: none;
  padding-left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const NavIcon = styled.li`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`
export const NavListItem = styled.li`
  border-radius: 9px;
  height: 40px;
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => {
    const {isDark} = props
    const color = isDark ? '#909090' : '#cbd5e1'
    return props.isActive ? color : ''
  }};
  :hover {
    background-color: ${props => (props.isDark ? '#909090' : '#cbd5e1')};
  }
`

export const NavMobileContainer = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  background-color: transparent;
  // background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 0px;
  @media (min-width: 600px) {
    display: none;
  }
`
export const MobileLogo = styled.h1`
  font-size: 30px;
  margin-left: 5px;
  font-family: brush script mt, cursive;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const NavMobileIconsList = styled.ul`
  align-self: center;
  list-style-type: none;
  width: 70%;
  padding-left: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3%;
`
export const NavMobileIcon = styled.li`
  margin-top: 9px;
  font-size: 30px;
  outline: none;
  cursor: pointer;
  background-color: ${props => {
    const {isDark} = props
    const color = isDark ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`

export const HomeContainer = styled.div`
  background-image: url(${props =>
    props.isDark
      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367869/download_iwonwv.jpg'
      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367876/winter-blue-pink-gradient-background-vector_53876-117276_uwqnv8.jpg'});
  background-size: cover;
  background-position: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const TopContainer = styled.div`
  padding-top: 11vh;
  height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  //   padding: 50px;
  //   @media (max-width: 600px) {
  //     padding: 9px;
  //     width: 100vw;
  //   }
`
export const HomeLeftContainer = styled.div``
export const HomeText = styled.h1`
  //   margin-top: 0px;
  //   margin-bottom: 9px;
`
export const Name = styled.span`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
`
export const HomeImg = styled.img``
export const AboutButton = styled.button`
  background-color: ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  border: 1px solid ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  height: 40px;
  width: 123px;
  border-radius: 5px;
  color: #ffffff;
  transition: width 1s, height 1s;
  margin-top: 9px;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  :hover {
    background-color: ${props => (props.isDark ? '#4f46e5' : '#3b82f6')};
    height: 45px;
    width: 143px;
  }
`
