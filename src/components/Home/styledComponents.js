import styled from 'styled-components'

// export const NavContainer = styled.div`
//   overflow: hidden;
//   position: fixed;
//   width: 100%;
//   // background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
//   color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 10vh;
//   font-family: Roboto;
//   margin-bottom: 0px;
//   background-color: transparent;
//   @media (max-width: 600px) {
//     display: none;
//   }
// `

// export const NavListContainer = styled.div`
//   width: 50%;
//   font-weight: 500;
//   list-style-type: none;
//   padding-left: 0%;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `
// export const NavIcon = styled.li`
//   font-size: 30px;
//   font-weight: bold;
//   cursor: pointer;
// `
// export const NavListItem = styled.li`
//   border-radius: 9px;
//   height: 40px;
//   width: 80px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   background-color: ${props => {
//     const {isDark} = props
//     const color = isDark ? '#909090' : '#cbd5e1'
//     return props.isActive ? color : ''
//   }};
//   :hover {
//     background-color: ${props => (props.isDark ? '#909090' : '#cbd5e1')};
//   }
// `

// export const NavMobileContainer = styled.div`
//   overflow: hidden;
//   position: fixed;
//   width: 100%;
//   background-color: transparent;
//   // background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
//   color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
//   font-family: Roboto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 70px;
//   margin-bottom: 0px;
//   @media (min-width: 600px) {
//     display: none;
//   }
// `
// export const MobileLogo = styled.h1`
//   font-size: 30px;
//   margin-left: 5px;
//   font-family: brush script mt, cursive;
//   color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
// `

// export const NavMobileIconsList = styled.ul`
//   align-self: center;
//   list-style-type: none;
//   width: 70%;
//   padding-left: 0%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-right: 3%;
// `
// export const NavMobileIcon = styled.li`
//   margin-top: 9px;
//   font-size: 30px;
//   outline: none;
//   cursor: pointer;
//   background-color: ${props => {
//     const {isDark} = props
//     const color = isDark ? '#424242' : '#e2e8f0'
//     return props.isActive ? color : ''
//   }};
// `

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
  @media (max-width: 600px) {
    display: block;
    padding: 0% 10%;
    padding-top: 7vh;
  }
`
export const HomeLeftContainer = styled.div``
export const HomeText = styled.h1``
export const Hand = styled.span`
  font-size: 36px;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-name: wave;
  display: inline-block;
  transform-origin: 70% 70%;
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
export const Name = styled.span`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
`
export const HomeImg = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const AboutButton = styled.button`
  background-color: ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  border: 1px solid ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  height: 40px;
  width: 123px;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 9px;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  :hover {
    background-color: ${props => (props.isDark ? '#4f46e5' : '#3b82f6')};
    justify-content: space-around;
  }
  cursor: pointer;
`
export const IconsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const LinkedInIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #0866ff;
  }
`
export const GithubIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #000000;
  }
`
export const InstagramIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #bc2a8d;
    // color: rgb(to top,#8a3ab9, #4c68d7, #cd486b, #fbad50, #fccc63, #bc2a8d, #e95950);
  }
`
export const FacebookIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #4f46e5;
  }
`
export const WhatsAppIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #25d366;
  }
`
export const TelegramIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    font-size: 32px;
    color: #3b82f6;
  }
`
