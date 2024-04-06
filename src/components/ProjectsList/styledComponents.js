import styled from 'styled-components'

export const ProjectsContainer = styled.div``

export const TopContainer = styled.div`
  min-height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
`
export const ProjectsText = styled.h1`
  color: #fc6603;
  margin: 9px;
  padding-top: 9vh;
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
  color: #181818;
  width: 321px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border: 1px solid #ffffff;
  border-radius: 9px;
  margin: 9px;
  padding: 0px 9px;
  @media (max-width: 600px) {
    width: 90vw;
    margin-bottom: 12px;
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
  @media (max-width: 600px) {
    height: 100%;
  }
`
export const ProjectName = styled.h2`
  margin-bottom: 0px;
  @media (max-width: 600px) {
    display: none;
  }
`
export const ProjectDescription = styled.p``
export const VisitLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #181818;
  :hover {
    color: #f9f9f9;
  }
`
export const VisitButton = styled.button`
  font-family: Roboto;
  width: 80px;
  font-size: 18px;
  background-color: transparent;
  color: #181818;
  border: 1px solid #181818;
  border-radius: 5px;
  :hover {
    background-color: #3b82f6;
    border: 1px solid #3b82f6;
    color: white;
    justify-content: space-around;
  }
  margin-bottom: 9px;
`
export const ViewAllButton = styled.button`
  background-color: #4f46e5;
  border: 1px solid #4f46e5;
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
    background-color: #3b82f6;
    justify-content: space-around;
  }
  cursor: pointer;
`
export const TabsContainer = styled.div`
  margin-top: 3%;
`
export const TabButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 24px;

  border-bottom: 2px solid ${props => (props.isActive ? '#0b69ff' : 'none')};
  color: ${props => (props.isActive ? '#3e4c59' : '#9aa5b1')};
`
