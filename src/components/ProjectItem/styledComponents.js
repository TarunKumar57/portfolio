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
  padding-top: 11vh;
  min-height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: block;
    padding: 0% 10%;
    padding-top: 7vh;
  }
`
export const ProjectsText = styled.h1`
  color: ${props => (props.isDark ? 'orange' : '#fc6603')};
  //   text-align: center;
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
export const ProjectsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-between;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const ProjectsListItem = styled.li``
