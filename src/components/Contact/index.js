import {Component} from 'react'
import {Link} from 'react-router-dom'
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
import Header from '../Header'
import {
  ContactContainer,
  TopContainer,
  AvatarImg,
  ContactLeftContainer,
  ContactRightContainer,
  ContactText,
  Name,
  IconsListContainer,
  LinkedInIcon,
  GithubIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
  ContactDetails,
  ContactDetailsText,
  DesignedByText,
  LikeIcon,
  ContactMobileContainer,
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
                <AvatarImg
                  src={
                    isDarkTheme
                      ? 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711947766/Screenshot_2024_0401_102506_yxj1xa.png'
                      : 'https://res.cloudinary.com/dz881zzvx/image/upload/v1711947742/Screenshot_2024_0401_102407_onm2dy.png'
                  }
                  alt="img"
                />
                <ContactLeftContainer>
                  <ContactText>Tarun Kumar Portfolio</ContactText>
                  <p>
                    Thank you for visiting my personal portfolio website.
                    <br /> Connect with me over socials.
                  </p>
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
                      <FacebookIcon>
                        <FaFacebookSquare />
                      </FacebookIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <WhatsAppIcon>
                        <FaWhatsappSquare />
                      </WhatsAppIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </Link>
                  </IconsListContainer>
                </ContactLeftContainer>
                <ContactRightContainer>
                  <ContactText>Contact Me</ContactText>
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
                  <ContactText>Tarun Kumar Portfolio</ContactText>
                  <p>
                    Thank you for visiting my personal portfolio website.
                    <br /> Connect with me over socials.
                  </p>
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
                      <FacebookIcon>
                        <FaFacebookSquare />
                      </FacebookIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <WhatsAppIcon>
                        <FaWhatsappSquare />
                      </WhatsAppIcon>
                    </Link>
                    <Link to="./" style={linkStyle}>
                      <TelegramIcon>
                        <FaTelegram />
                      </TelegramIcon>
                    </Link>
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

export default Home
