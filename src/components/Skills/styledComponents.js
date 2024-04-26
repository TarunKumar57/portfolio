import styled from 'styled-components'

export const SkillsContainer = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`

export const TopContainer = styled.div`
  min-height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
`
export const SkillText = styled.h1`
  color: #fc6603;
  margin: 9px;
  padding-top: 9vh;
`
export const SkillsListContainer = styled.ul`
  list-style-type: none;
  padding: 0% 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
export const SkillListItem = styled.li`
  // box-shadow: 0px 4px 16px 0px #bfbfbf;
  border: 1px solid #ffffff;
  border-radius: 9px;
  margin: 9px;
  padding: 9px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const SkillLogo = styled.img`
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 9px;
  @media (max-width: 600px) {
    height: 100px;
  }
`
export const SkillName = styled.h2`
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  @media (max-width: 600px) {
    display: none;
  }
`
