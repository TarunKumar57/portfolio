import {Component} from 'react'

import Header from '../Header'
import {
  EducationContainer,
  EducationHeading,
  DetailsContainer,
  ItemDetails,
  Content,
  Qualification,
  StudiedAT,
  CompletedIn,
  //   Marks,
} from './styledComponents'

import './index.css'

import ThemeContext from '../../context/themeContext'

class Education extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const left = isDarkTheme ? 'left-dark' : 'left-light'
          const right = isDarkTheme ? 'right-dark' : 'right-light'
          const timeline = isDarkTheme ? 'timeline-dark' : 'timeline-light'
          const container = isDarkTheme ? 'container-dark' : 'container-light'

          return (
            <EducationContainer isDark={isDarkTheme}>
              <Header />
              <EducationHeading isDark={isDarkTheme}>
                Education
              </EducationHeading>
              <DetailsContainer className={`timeline ${timeline}`}>
                <ItemDetails
                  isDark={isDarkTheme}
                  className={`container ${container} ${left} left`}
                >
                  <Content isDark={isDarkTheme}>
                    <Qualification>Bachelor of Technology</Qualification>
                    <StudiedAT>
                      A.K.R.G. College of Engineering and Technology, Nallajerla
                    </StudiedAT>
                    <CompletedIn>2016-2020</CompletedIn>
                    {/* <Marks>6.92 CGPA</Marks> */}
                  </Content>
                </ItemDetails>
                <ItemDetails
                  isDark={isDarkTheme}
                  className={`container ${container} ${right} right`}
                >
                  <Content isDark={isDarkTheme}>
                    <Qualification>Intermediate</Qualification>
                    <StudiedAT>
                      S.K.G.R. & S.S.K. Jr College, Tallapudi
                    </StudiedAT>
                    <CompletedIn>2016-2020</CompletedIn>
                    {/* <Marks>6.92 CGPA</Marks> */}
                  </Content>
                </ItemDetails>
                <ItemDetails
                  isDark={isDarkTheme}
                  className={`container ${container} ${left} left`}
                >
                  <Content isDark={isDarkTheme}>
                    <Qualification>Secondary Scool</Qualification>
                    <StudiedAT>
                      S.M.V.G.K.Z.P. High School, Malakapalli
                    </StudiedAT>
                    <CompletedIn>2014</CompletedIn>
                    {/* <Marks>7.8 CGPA</Marks> */}
                  </Content>
                </ItemDetails>
              </DetailsContainer>
            </EducationContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Education
