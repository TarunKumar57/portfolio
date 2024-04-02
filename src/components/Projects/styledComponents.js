import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  background-image: url(${props =>
    props.isDark
      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367869/download_iwonwv.jpg'
      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711367876/winter-blue-pink-gradient-background-vector_53876-117276_uwqnv8.jpg'});
  background-size: cover;
  background-position: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const TopContainer = styled.div`
  padding: 11vh 0px;
  min-height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ProjectsText = styled.h1`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
  margin: 9px;
  //   text-align: center;
`
export const ProjectsListContainer = styled.ul`
  list-style-type: none;
  //   padding: 0% 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  @media (max-width: 600px) {
    display: block;
    padding: 0% 5%;
  }
`
export const ProjectsListItem = styled.li`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  width: 321px;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  border-radius: 9px;
  margin: 9px;
  padding: 0px 9px;
  @media (max-width: 600px) {
    width: 90vw;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const ProjectLogo = styled.img`
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 9px;
`
export const ProjectName = styled.h2`
  margin-bottom: 0px;
`
export const ProjectDescription = styled.p``
export const VisitLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const VisitButton = styled.button`
  font-family: Roboto;
  width: 80px;
  font-size: 18px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  border-radius: 5px;
  :hover {
    background-color: ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
    border: 1px solid ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
    justify-content: space-around;
  }
  margin-bottom: 9px;
`
export const ViewAllButton = styled.button`
  background-color: ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  border: 1px solid ${props => (props.isDark ? '#3b82f6' : '#4f46e5')};
  height: 40px;
  width: 123px;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 9px;
  font-family: Roboto;
  font-size: 18px;
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
