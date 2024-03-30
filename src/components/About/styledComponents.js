import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-image: url(${props =>
    props.isDark
      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367869/download_iwonwv.jpg'
      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367876/winter-blue-pink-gradient-background-vector_53876-117276_uwqnv8.jpg'});
  background-size: cover;
  background-position: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  //   transition: all 0.2s linear;
`
export const TopContainer = styled.div`
  padding-top: 11vh;
  height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    display: none;
  }
`

export const AboutImg = styled.img`
  border-radius: 12px;
  transition: 1s;
  :hover {
    box-shadow: 0px 4px 16px 0px orange;
    rotate: 5deg;
  }
  @media (max-width: 600px) {
    height: 210px;
    border-radius: 50px;
  }
`

export const AboutRightContainer = styled.div`
  width: 35vw;
`
export const AboutHeading = styled.h1`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
  font-size: 24px;
`
export const AboutParagraph = styled.p``
export const AboutPara = styled.p`
  font-family: normal;
`

export const ContactButton = styled.button`
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
  }
  cursor: pointer;
`
export const AboutMobileContainer = styled.div`
  padding: 0% 10%;
  padding-top: 10vh;
  height: 100vh;
  font-family: Roboto;
  @media (min-width: 600px) {
    display: none;
  }
`
export const AboutMobileImageResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
