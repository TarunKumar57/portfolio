import {Component} from 'react'
import {IoMail} from 'react-icons/io5'
import {IoIosCall} from 'react-icons/io'
import {GrMapLocation} from 'react-icons/gr'
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaWhatsappSquare,
  FaTelegram,
  FaMapMarked,
} from 'react-icons/fa'
import {FcLike} from 'react-icons/fc'
// import Header from '../Header'
import {
  ContactContainer,
  TopContainer,
  AvatarImg,
  ContactLeftContainer,
  ContactRightContainer,
  ContactText,
  Name,
  IconsListContainer,
  AnchorLink,
  LinkedInIcon,
  GithubIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
  ContactDetails,
  ContactDetailsText,
  ContactName,
  DesignedByText,
  LikeIcon,
  ContactMobileContainer,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

class Contact extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <ContactContainer isDark={isDarkTheme} id="contact">
              {/* <Header /> */}

              <TopContainer>
                <AvatarImg
                  src={
                    isDarkTheme
                      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711947766/Screenshot_2024_0401_102506_yxj1xa.png'
                      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711947742/Screenshot_2024_0401_102407_onm2dy.png'
                  }
                  alt="img"
                />
                <ContactLeftContainer>
                  <ContactName>Tarun Kumar Portfolio</ContactName>
                  <p>
                    Thank you for visiting my personal portfolio website.
                    <br /> Connect with me over socials.
                  </p>
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
                    <AnchorLink
                      href="https://www.instagram.com/tarun_the_thunderer?igsh=MTVwa25kM3hjd3Bjdw=="
                      isDark={isDarkTheme}
                    >
                      <InstagramIcon>
                        <FaInstagramSquare />
                      </InstagramIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <FacebookIcon>
                        <FaFacebookSquare />
                      </FacebookIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <WhatsAppIcon>
                        <FaWhatsappSquare />
                      </WhatsAppIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </AnchorLink>
                  </IconsListContainer>
                </ContactLeftContainer>
                <ContactRightContainer>
                  <ContactText isDark={isDarkTheme}>Contact Me</ContactText>
                  <ContactDetails>
                    <IoMail size={25} />
                    <ContactDetailsText> tk96925@gmail.com</ContactDetailsText>
                  </ContactDetails>
                  <ContactDetails>
                    <IoIosCall size={25} />
                    <ContactDetailsText>+91 XXXXX XXXXX</ContactDetailsText>
                  </ContactDetails>
                  <ContactDetails>
                    {isDarkTheme ? (
                      <FaMapMarked size={25} />
                    ) : (
                      <GrMapLocation size={25} />
                    )}
                    <ContactDetailsText>
                      Andhra Pradesh, India - 534340
                    </ContactDetailsText>
                  </ContactDetails>
                </ContactRightContainer>
                <ContactMobileContainer>
                  <ContactName>Tarun Kumar Portfolio</ContactName>
                  <p>
                    Thank you for visiting my personal portfolio website.
                    <br /> Connect with me over socials.
                  </p>
                  <IconsListContainer isDark={isDarkTheme}>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <LinkedInIcon>
                        <FaLinkedin />
                      </LinkedInIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
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
                      <FacebookIcon>
                        <FaFacebookSquare />
                      </FacebookIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <WhatsAppIcon>
                        <FaWhatsappSquare />
                      </WhatsAppIcon>
                    </AnchorLink>
                    <AnchorLink href="" isDark={isDarkTheme}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </AnchorLink>
                  </IconsListContainer>
                </ContactMobileContainer>
              </TopContainer>
              <DesignedByText>
                Designed With By
                <LikeIcon>
                  <FcLike />
                </LikeIcon>
                <Name isDark={isDarkTheme}>Tarun Kumar</Name>
              </DesignedByText>
            </ContactContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Contact
