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
  :hover {
    transition: 1s;
    rotate: 360deg;
  }
  transition: 1s;
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
  width: 100%;
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
