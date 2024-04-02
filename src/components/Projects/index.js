import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoArrowForward} from 'react-icons/io5'

import Header from '../Header'
import {
  ProjectsContainer,
  TopContainer,
  ProjectsText,
  ProjectsListContainer,
  ProjectsListItem,
  ProjectName,
  ProjectDescription,
  ProjectLogo,
  VisitButton,
  VisitLink,
  ViewAllButton,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const projectsList = [
            {
              id: '0',
              projectName: 'Insta Share',
              projectUrl: 'https://github.com/TarunKumar57/insta-share-app',
              description:
                'Implemented responsive Streaming Application like Instagram Clone.',
              logoUrl: isDarkTheme
                ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049879/Screenshot_2024-04-02_144741_ksl9nl.png'
                : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049873/Screenshot_2024-04-02_144754_zn8ayx.png',
            },
            {
              id: '1',
              projectName: 'NxtWatch',
              projectUrl: 'https://github.com/TarunKumar57/nxt-watch-app',
              description:
                'Nxt Watch application which is a clone for YouTube developed using React js.',
              logoUrl: isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
            },
            {
              id: '2',
              projectName: 'Jobby App',
              projectUrl: 'https://github.com/TarunKumar57/jobby-app',
              description:
                'Jobby App where users can see a list of jobs developed using React js',
              logoUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
            },
            {
              id: '3',
              projectName: 'Nxt Trendz',
              projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
              description:
                'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
              logoUrl:
                'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
            },

            {
              id: '4',
              projectName: 'Rock Paper Scissors Game',
              projectUrl:
                'https://github.com/TarunKumar57/rock-paper-scissors-game',
              description:
                'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
              logoUrl: isDarkTheme
                ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051209/Screenshot_2024-04-02_150848_oz5ncg.png'
                : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051204/Screenshot_2024-04-02_150900_fccyea.png',
            },
            {
              id: '5',
              projectName: 'Match Game',
              projectUrl: 'https://github.com/TarunKumar57/match-game',
              description:
                'Implemented Match App you can play this Game when ever you want.',
              logoUrl:
                'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png ',
            },
            {
              id: '6',
              projectName: 'IPL Dashboard',
              projectUrl: 'https://github.com/TarunKumar57/ipl-dashboard',
              description:
                'IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info',
              logoUrl:
                'https://res.cloudinary.com/dz881zzvx/image/upload/v1712045711/IPL-Logo_vn9n4s.jpg',
            },
            {
              id: '7',
              projectName: 'Passwords Manager',
              projectUrl: 'https://github.com/TarunKumar57/passwords-manager',
              description:
                'Implemented Password manager application where users can add website passwords, search, delete and see passwords.',
              logoUrl:
                'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png ',
            },
            {
              id: '8',
              projectName: 'Browser History',
              projectUrl: 'https://github.com/TarunKumar57/browser-history',
              description:
                'Implemented Browser history application which is a clone for google history where users can search and delete history.',
              logoUrl:
                'https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png',
            },
            {
              id: '9',
              projectName: 'Portfolio',
              projectUrl: 'https://github.com/TarunKumar57/portfolio',
              description:
                'Developed a responsive web application for Portfolio where other people like interviewers can see about, education, list of projects, skills, contact info of mine',
              logoUrl: '',
            },
          ]

          const linkStyle = {
            textDecoration: 'none',
            color: isDarkTheme ? '#f9f9f9' : '#181818',
          }
          return (
            <ProjectsContainer isDark={isDarkTheme}>
              <Header />
              <TopContainer>
                <ProjectsText isDark={isDarkTheme}>Projects</ProjectsText>

                <ProjectsListContainer>
                  {projectsList.map(each => (
                    <ProjectsListItem isDark={isDarkTheme}>
                      <ProjectLogo src={each.logoUrl} alt="img" />
                      <ProjectName>{each.projectName}</ProjectName>
                      <ProjectDescription>
                        {each.description}
                      </ProjectDescription>
                      <VisitButton isDark={isDarkTheme}>
                        <VisitLink href={each.projectUrl} isDark={isDarkTheme}>
                          Visit <IoArrowForward />
                        </VisitLink>
                      </VisitButton>
                    </ProjectsListItem>
                  ))}
                </ProjectsListContainer>
                <Link to="./all-projects" style={linkStyle}>
                  <ViewAllButton type="button" isDark={isDarkTheme}>
                    View All <IoArrowForward size={20} />
                  </ViewAllButton>
                </Link>
              </TopContainer>
            </ProjectsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
