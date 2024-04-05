import {Component} from 'react'
import {IoArrowDownCircleOutline} from 'react-icons/io5'
import {
  FaFileAlt,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTelegram,
} from 'react-icons/fa'

// import Header from '../Header'
import {
  HomeContainer,
  TopContainer,
  HomeImg,
  AboutButton,
  HomeLeftContainer,
  HomeText,
  Hand,
  Name,
  ButtonsContainer,
  IconsListContainer,
  AnchorLink,
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

          return (
            <HomeContainer isDark={isDarkTheme} id="home">
              {/* <Header /> */}
              <TopContainer>
                <HomeLeftContainer>
                  <HomeText>
                    Hi There <Hand>👋</Hand>
                  </HomeText>
                  <HomeText>
                    I am <Name isDark={isDarkTheme}>Tarun Kumar</Name>
                  </HomeText>
                  <HomeText>I am a Web developer</HomeText>
                  <ButtonsContainer>
                    <AnchorLink href="#about">
                      <AboutButton type="button" isDark={isDarkTheme}>
                        About me <IoArrowDownCircleOutline size={20} />
                      </AboutButton>
                    </AnchorLink>
                    <AnchorLink
                      href="https://drive.google.com/file/d/133tKXzw7DwOtgJNp4H9dZZPZ_1Oue6ft/view?usp=drivesdk"
                      target="_blank"
                      isDark={isDarkTheme}
                    >
                      <AboutButton type="button" isDark={isDarkTheme}>
                        <FaFileAlt size={20} /> Resume
                      </AboutButton>
                    </AnchorLink>
                  </ButtonsContainer>
                  <IconsListContainer isDark={isDarkTheme}>
                    <AnchorLink
                      href="https://www.linkedin.com/in/tarun-kumar-725465242/"
                      isDark={isDarkTheme}
                    >
                      <LinkedInIcon>
                        <FaLinkedin />
                      </LinkedInIcon>
                    </AnchorLink>
                    <AnchorLink
                      href="https://github.com/TarunKumar57?tab=repositories"
                      isDark={isDarkTheme}
                    >
                      <GithubIcon>
                        <FaGithubSquare />
                      </GithubIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <InstagramIcon>
                        <FaInstagramSquare />
                      </InstagramIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </AnchorLink>
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
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
