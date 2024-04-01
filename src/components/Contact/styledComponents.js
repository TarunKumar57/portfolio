import styled from 'styled-components'

export const ContactContainer = styled.div`
  background-image: url(${props =>
    props.isDark
      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367869/download_iwonwv.jpg'
      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367876/winter-blue-pink-gradient-background-vector_53876-117276_uwqnv8.jpg'});
  background-size: cover;
  background-position: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  height: 100vh;
`
export const TopContainer = styled.div`
  padding-top: 11vh;
  height: max-content;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    display: block;
    padding: 0% 10%;
    padding-top: 7vh;
  }
`
export const ContactLeftContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
export const ContactRightContainer = styled.div``
export const ContactMobileContainer = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`
export const ContactText = styled.h1``
export const Name = styled.span`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
`
export const AvatarImg = styled.img`
  border-radius: 50%;
  height: 210px;
`
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
    color: #0866ff;
  }
`
export const GithubIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    color: #000000;
  }
`
export const InstagramIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    color: #bc2a8d;
    // color: rgb(to top,#8a3ab9, #4c68d7, #cd486b, #fbad50, #fccc63, #bc2a8d, #e95950);
  }
`
export const FacebookIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    color: #4f46e5;
  }
`
export const WhatsAppIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    color: #25d366;
  }
`
export const TelegramIcon = styled.li`
  font-size: 30px;
  transition: font-size 1s;
  :hover {
    color: #3b82f6;
  }
`

export const ContactDetails = styled.p`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  //   justify-content: space-between;
  margin: 0px;
`
export const ContactDetailsText = styled.p`
  margin-left: 9px;
`
export const DesignedByText = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  @media (max-width: 600px) {
    padding-top: 10%;
  }
`
export const LikeIcon = styled.span`
  margin: 0px 9px;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-name: heart;
  display: inline-block;
  transform-origin: 70% 70%;
  @keyframes heart {
    0% {
      transform: scale(1);
    }
    /* 10% {
      transform:  scale(1.3);
    }
    20% {
      transform:  scale(0.9);
    }
    30% {
      transform:  scale(1.2);
    }
    40% {
      transform:  scale(0.9);
    }*/
    50% {
      transform: scale(1.3);
    }
    /* 60% {
      transform:  scale(0.95);
    }
    70% {
      transform:  scale(1);
    }*/
    100% {
      transform: scale(1);
    }
  }
`
