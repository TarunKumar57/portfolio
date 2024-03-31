import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoArrowDownCircleOutline} from 'react-icons/io5'
import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTelegram,
} from 'react-icons/fa'

import Header from '../Header'
import {
  ContactContainer,
  TopContainer,
  HomeImg,
  AboutButton,
  HomeLeftContainer,
  HomeText,
  Name,
  IconsListContainer,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  TelegramIcon,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const linkStyle = {
            textDecoration: 'none',
            color: isDarkTheme ? '#f9f9f9' : '#181818',
          }
          return (
            <ContactContainer isDark={isDarkTheme}>
              <Header />
              <TopContainer>
                <HomeLeftContainer>
                  <HomeText>Hi There 👋</HomeText>
                  <HomeText>
                    I am <Name isDark={isDarkTheme}>Tarun Kumar</Name>
                  </HomeText>
                  <HomeText>I am a Web developer</HomeText>
                  <Link to="./about" style={linkStyle}>
                    <AboutButton type="button" isDark={isDarkTheme}>
                      About me <IoArrowDownCircleOutline size={20} />
                    </AboutButton>
                  </Link>
                  <IconsListContainer isDark={isDarkTheme}>
                    <Link to="./" style={linkStyle}>
                      <LinkedInIcon>
                        <FaLinkedin />
                      </LinkedInIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <GithubIcon>
                        <FaGithubSquare />
                      </GithubIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <InstagramIcon>
                        <FaInstagramSquare />
                      </InstagramIcon>
                    </Link>

                    <Link to="./" style={linkStyle}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </Link>
                  </IconsListContainer>
                </HomeLeftContainer>
                {/* <img
                  src="https://res.cloudinary.com/dz881zzvx/image/upload/v1687686673/IMG_20191018_115409_qablkk.jpg"
                  alt="profile"
                /> */}
                <HomeImg
                  src="https://res.cloudinary.com/dz881zzvx/image/upload/v1711608894/male-web-developer-doing-research-on-development-5691622-4759504_sibkp8.webp"
                  alt="img"
                />
                {/*  <AvatarImg
                  src="https://res.cloudinary.com/dz881zzvx/image/upload/v1711610840/images_dm2wzu.jpg"
                  alt="img"
                /> */}
              </TopContainer>
            </ContactContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
