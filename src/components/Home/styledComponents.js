import styled from 'styled-components'

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
  //   height: 100vh;
  //   font-family: Roboto;
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
export const HomeImg = styled.img``
export const AboutButton = styled.button`
  background-color: ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  border: 1px solid ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  height: 40px;
  width: 123px;
  border-radius: 5px;
  color: #ffffff;
  :hover {
    background-color: ${props => (props.isDark ? '#4f46e5' : '#3b82f6')};
  }
`
