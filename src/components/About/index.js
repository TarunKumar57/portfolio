import {Component} from 'react'
import {FaFileAlt} from 'react-icons/fa'
// import Header from '../Header'
import {
  AboutContainer,
  TopContainer,
  AboutImg,
  ContactButton,
  AboutRightContainer,
  AboutHeading,
  AboutParagraph,
  AboutPara,
  AnchorLink,
  AboutMobileContainer,
  AboutMobileImageResumeContainer,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <AboutContainer isDark={isDarkTheme} id="about">
              {/* <Header /> */}
              <TopContainer>
                <AboutImg
                  src="https://res.cloudinary.com/dz881zzvx/image/upload/v1687686673/IMG_20191018_115409_qablkk.jpg"
                  alt="profile"
                />
                <AboutRightContainer>
                  <AboutHeading isDark={isDarkTheme}>About Me</AboutHeading>
                  <AboutParagraph>
                    I am Tarun Kumar, B.Tech Mechanical graduate, I am very
                    passionate about improving my coding skills & developing
                    applications & websites. I build WebApps and Websites using
                    MERN Stack. Working for myself to improve my skills. Love to
                    build Full-Stack clones. I am eager to apply my knowledge
                    and skills to real-world challenges in the tech industry.
                    <AboutPara>
                      Currently looking for opportunities in software
                      development as a Software Developer
                    </AboutPara>
                  </AboutParagraph>
                  <AnchorLink
                    href="https://drive.google.com/file/d/133tKXzw7DwOtgJNp4H9dZZPZ_1Oue6ft/view?usp=drivesdk"
                    target="_blank"
                    isDark={isDarkTheme}
                  >
                    <ContactButton type="button" isDark={isDarkTheme}>
                      <FaFileAlt size={20} /> Resume
                    </ContactButton>
                  </AnchorLink>
                </AboutRightContainer>
              </TopContainer>
              <AboutMobileContainer>
                <AboutMobileImageResumeContainer>
                  <AboutImg
                    src="https://res.cloudinary.com/dz881zzvx/image/upload/v1687686673/IMG_20191018_115409_qablkk.jpg"
                    alt="profile"
                  />
                  <AnchorLink
                    href="https://drive.google.com/file/d/133tKXzw7DwOtgJNp4H9dZZPZ_1Oue6ft/view?usp=drivesdk"
                    target="_blank"
                    isDark={isDarkTheme}
                  >
                    <ContactButton type="button" isDark={isDarkTheme}>
                      <FaFileAlt size={20} /> Resume
                    </ContactButton>
                  </AnchorLink>
                </AboutMobileImageResumeContainer>
                <AboutHeading isDark={isDarkTheme}>About Me</AboutHeading>
                <AboutParagraph>
                  A passionate Full Stack Software Developer 🚀 having an
                  experience of building Web and Mobile applications with
                  JavaScript / Reactjs / Nodejs / React Native and some other
                  cool libraries and frameworks.
                </AboutParagraph>
              </AboutMobileContainer>
            </AboutContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
