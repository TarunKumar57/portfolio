import styled from 'styled-components'

export const EducationContainer = styled.div``
//   background-image: url(${props =>
//     props.isDark
//       ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367869/download_iwonwv.jpg'
//       : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367876/winter-blue-pink-gradient-background-vector_53876-117276_uwqnv8.jpg'});
//   background-size: cover;
//   background-position: center;
//   color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
//   min-height: 118vh;
//   @media (max-width: 600px) {
//     min-height: 90vh;
//   }

export const EducationHeading = styled.h1`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
  font-size: 26px;
  margin: 0px;
  padding: 11vh;
  text-align: center;
  @media (max-width: 600px) {
    padding-bottom: 9vh;
    padding-top: 3vh;
  }
`
export const DetailsContainer = styled.div`
  list-style-type: none;
  font-family: Roboto;
  margin-top: -5vh;
  margin-bottom: 5vh;
  @media (max-width: 600px) {
    padding-left: 0px;
    display: block;
    padding: 0% 10%;
  }
`
export const ItemDetails = styled.div`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};

  //   border: 1px solid ${props => (props.isDark ? 'orange' : '#fc6603')};
  //   border-radius: 5px;  margin-right: 5%; margin-bottom: 9px; padding-left: 5%;
`
export const Content = styled.div`
  padding: 20px 30px;
  border: 1.5px solid ${props => (props.isDark ? 'orange' : '#fc6603')};
  position: relative;
  border-radius: 6px;
  padding-top: 0px;
`
export const Qualification = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
`
export const StudiedAT = styled.p`
  margin-bottom: 0px;
`
export const CompletedIn = styled.p`
  margin-bottom: 0px;
`
export const Marks = styled.p`
  margin-bottom: 0px;
`
