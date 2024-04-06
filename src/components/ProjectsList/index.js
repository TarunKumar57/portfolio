import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

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
  TabsContainer,
  TabButton,
} from './styledComponents'

const projectsLists = [
  {
    id: '0',
    projectName: 'Insta Share',
    projectUrl: 'https://github.com/TarunKumar57/insta-share-app',
    description:
      'Implemented responsive Streaming Application like Instagram Clone.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049873/Screenshot_2024-04-02_144754_zn8ayx.png',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '1',
    projectName: 'NxtWatch',
    projectUrl: 'https://github.com/TarunKumar57/nxt-watch-app',
    description:
      'Nxt Watch application which is a clone for YouTube developed using React js.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    siteText: 'Watch',
    categoryId: 'GITHUB',
  },
  {
    id: '2',
    projectName: 'Jobby App',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description:
      'Jobby App where users can see a list of jobs developed using React js',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '3',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Shop',
    categoryId: 'GITHUB',
  },
  {
    id: '4',
    projectName: 'Rock Paper Scissors Game',
    projectUrl: 'https://github.com/TarunKumar57/rock-paper-scissors-game',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051204/Screenshot_2024-04-02_150900_fccyea.png',
    siteText: 'Play',
    categoryId: 'GITHUB',
  },
  {
    id: '5',
    projectName: 'Match Game',
    projectUrl: 'https://github.com/TarunKumar57/match-game',
    description:
      'Implemented Match App you can play this Game when ever you want.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png ',
    siteText: 'Play',
    categoryId: 'GITHUB',
  },
  {
    id: '6',
    projectName: 'IPL Dashboard',
    projectUrl: 'https://github.com/TarunKumar57/ipl-dashboard',
    description:
      'IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712045711/IPL-Logo_vn9n4s.jpg',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '7',
    projectName: 'Passwords Manager',
    projectUrl: 'https://github.com/TarunKumar57/passwords-manager',
    description:
      'Implemented Password manager application where users can add website passwords, search, delete and see passwords.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '8',
    projectName: 'Browser History',
    projectUrl: 'https://github.com/TarunKumar57/browser-history',
    description:
      'Implemented Browser history application which is a clone for google history where users can search and delete history.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png',
    siteText: 'Open',
    categoryId: 'GITHUB',
  },
  {
    id: '9',
    projectName: 'Portfolio',
    projectUrl: 'https://github.com/TarunKumar57/portfolio',
    description:
      'Developed a responsive web application for Portfolio where other people like interviewers can see about, education, list of projects, skills, contact info of mine',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '31',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://tksnxttrendz6.ccbp.tech/login',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Shop',
    categoryId: 'SHOPPING',
  },
  {
    id: '41',
    projectName: 'Rock Paper Scissors Game',
    projectUrl: 'https://tksrpsgame.ccbp.tech/',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051204/Screenshot_2024-04-02_150900_fccyea.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '42',
    projectName: 'Match Game',
    projectUrl: 'https://tksmatchgame.ccbp.tech/',
    description:
      'Implemented Match App you can play this Game when ever you want.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '43',
    projectName: 'Emoji Game',
    projectUrl: 'https://tksemojigame.ccbp.tech/',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712380720/Screenshot_2024-04-06_104441_rtoqp1.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '44',
    projectName: 'Speedometer',
    projectUrl: 'https://tksspedometer.ccbp.tech/',
    description:
      'Implemented Speedometer App you can see speed while braking and accelerating.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '45',
    projectName: 'Coin Toss Game',
    projectUrl: 'https://tkstossgame.ccbp.tech/',
    description:
      'Implemented Coin Toss Game you can play this Game when ever you want.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46',
    projectName: 'Digital Timer App',
    projectUrl: 'https://tksdigitaltimer.ccbp.tech/',
    description: 'Implemented Digital Timer App you can see time.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46.5',
    projectName: 'Stopwatch',
    projectUrl: 'https://tksstopwatch.ccbp.tech/',
    description: 'Implemented Stopwatch App you can set time.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46.7',
    projectName: 'Gradient Generator',
    projectUrl: 'https://tksgrdientgnrtr.ccbp.tech/',
    description:
      'Implemented Gradient Generator App you can generate gradient colors.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '47',
    projectName: 'Random Number Generator',
    projectUrl: 'https://tksrndmnumgnrtr.ccbp.tech/',
    description:
      'Implemented Random Number Generator App you can generate random number.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '48',
    projectName: 'Letters Calculator',
    projectUrl: 'https://tksltrsclcltr.ccbp.tech/',
    description:
      'Implemented Letters Calculator App you can calculate no. of letters in word.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '49',
    projectName: 'Fruits Counter',
    projectUrl: 'https://tksfruitscount.ccbp.tech/',
    description:
      'Implemented Fruits Counter App you can play this Game when ever you want.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '50',
    projectName: 'Click Counter',
    projectUrl: 'https://tkscliccounter.ccbp.tech/',
    description: 'Implemented Click Counter App you can count no. of clicks.',
    logoUrl: '  ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },

  {
    id: '60',
    projectName: 'Insta Share',
    projectUrl: 'https://github.com/TarunKumar57/insta-share-app',
    description:
      'Implemented responsive Streaming Application like Instagram Clone.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049873/Screenshot_2024-04-02_144754_zn8ayx.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '61',
    projectName: 'NxtWatch',
    projectUrl: 'https://github.com/TarunKumar57/nxt-watch-app',
    description:
      'Nxt Watch application which is a clone for YouTube developed using React js.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '62',
    projectName: 'Jobby App',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description:
      'Jobby App where users can see a list of jobs developed using React js',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '63',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '64',
    projectName: 'IPL Dashboard',
    projectUrl: 'https://github.com/TarunKumar57/ipl-dashboard',
    description:
      'IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712045711/IPL-Logo_vn9n4s.jpg',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '65',
    projectName: 'CoWIN Dashboard',
    projectUrl: 'https://tkscowindshbord.ccbp.tech/',
    description: 'CoWIN Dashboard application developed using React js.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/cowin-logo.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '66',
    projectName: 'Projects Showcase',
    projectUrl: 'https://tksprjctshwcase.ccbp.tech/',
    description: 'Projects Showcase App shows list of projects.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '67',
    projectName: 'Tech Era',
    projectUrl: 'https://tkstechera.ccbp.tech/',
    description:
      'Tech Era App where users can see a list of web tools using develope apps',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '68',
    projectName: 'Ebank',
    projectUrl: 'https://tksebank.ccbp.tech/ebank/',
    description: 'User ID: 142420, PIN: 231225 Ebank can login and logout ',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '69',
    projectName: 'Github Popular Repos',
    projectUrl: 'https://tksgitpoplrepos.ccbp.tech/',
    description:
      'Implemented Github Popular Repos App you can see list of git repositories.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '70',
    projectName: 'Fetch And Routing Practice',
    projectUrl: 'https://tksftchndroutng.ccbp.tech/',
    description: 'Fetch And Routing list of blogs',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '71',
    projectName: 'Travel Guide',
    projectUrl: 'https://tkstravelguide.ccbp.tech/',
    description:
      'Travel Guide application which is a clone for traveling places.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '81',
    projectName: 'CCBP Timeline',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description: 'CCBP Timeline App where users can see journey.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '82',
    projectName: 'Planets App',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description: 'Planets App application developed using react-slick.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png',
    siteText: 'Shop',
    categoryId: 'OTHERS',
  },
  {
    id: '83',
    projectName: 'Prime Video',
    projectUrl: 'https://github.com/TarunKumar57/rock-paper-scissors-game',
    description: 'Implemented Prime Video App you can watch videos.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
    siteText: 'Play',
    categoryId: 'OTHERS',
  },
  {
    id: '81',
    projectName: 'CCBP Timeline',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description: 'CCBP Timeline App where users can see journey.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '82',
    projectName: 'Planets App',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description: 'Planets App application developed using react-slick.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png',
    siteText: 'Shop',
    categoryId: 'OTHERS',
  },
  {
    id: '83',
    projectName: 'Prime Video',
    projectUrl: 'https://github.com/TarunKumar57/rock-paper-scissors-game',
    description: 'Implemented Prime Video App you can watch videos.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
    siteText: 'Play',
    categoryId: 'OTHERS',
  },
  {
    id: '81',
    projectName: 'CCBP Timeline',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description: 'CCBP Timeline App where users can see journey.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '82',
    projectName: 'Planets App',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description: 'Planets App application developed using react-slick.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png',
    siteText: 'Shop',
    categoryId: 'OTHERS',
  },
  {
    id: '83',
    projectName: 'Prime Video',
    projectUrl: 'https://github.com/TarunKumar57/rock-paper-scissors-game',
    description: 'Implemented Prime Video App you can watch videos.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
    siteText: 'Play',
    categoryId: 'OTHERS',
  },
]

const tabsList = [
  {tabId: 'GITHUB', displayText: 'Github'},
  {tabId: 'GAMING', displayText: 'Gaming'},
  {tabId: 'SHOPPING', displayText: 'Shopping'},
  {tabId: 'API_REQUEST', displayText: 'API Request'},
  {tabId: 'OTHERS', displayText: 'Others'},
]

const linkStyle = {
  textDecoration: 'none',
  color: '#f9f9f9',
}

class ProjectsList extends Component {
  state = {
    activeTabId: tabsList[4].tabId,
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsLists.filter(
      eachDetails => eachDetails.categoryId === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    console.log(activeTabId)

    const filteredProjects = this.getFilteredProjects()

    return (
      <ProjectsContainer id="all-projects">
        <TopContainer>
          <ProjectsText>All Projects</ProjectsText>
          <TabsContainer>
            {tabsList.map(each => (
              <TabButton
                key={each.tabId}
                onClick={() => {
                  this.clickTabItem(each.tabId)
                }}
                isActive={activeTabId === each.tabId}
              >
                {each.displayText}
              </TabButton>
            ))}
          </TabsContainer>
          <ProjectsListContainer>
            {filteredProjects.map(each => (
              <ProjectsListItem key={each.id}>
                <ProjectLogo src={each.logoUrl} alt="logo" />
                <ProjectName>{each.projectName}</ProjectName>
                <ProjectDescription>{each.description}</ProjectDescription>
                <VisitButton>
                  <VisitLink href={each.projectUrl}>
                    {each.siteText} <IoArrowForward />
                  </VisitLink>
                </VisitButton>
              </ProjectsListItem>
            ))}
          </ProjectsListContainer>
          <Link to="./" style={linkStyle}>
            <ViewAllButton type="button">
              <IoArrowBack size={20} /> Home
            </ViewAllButton>
          </Link>
        </TopContainer>
      </ProjectsContainer>
    )
  }
}

export default ProjectsList
