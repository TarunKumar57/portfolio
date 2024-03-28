import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoArrowDownCircleOutline} from 'react-icons/io5'
import Header from '../Header'
import {
  HomeContainer,
  TopContainer,
  HomeImg,
  AboutButton,
  HomeLeftContainer,
  HomeText,
  Name,
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
          }
          return (
            <HomeContainer isDark={isDarkTheme}>
              <Header />
              <TopContainer>
                <HomeLeftContainer>
                  <HomeText>Hi There 👋</HomeText>
                  <HomeText>
                    I am <Name isDark={isDarkTheme}>Tarun Kumar</Name>
                  </HomeText>
                  <HomeText>I'm a web developer</HomeText>
                  <Link to="./about" style={linkStyle}>
                    <AboutButton type="button" isDark={isDarkTheme}>
                      About me <IoArrowDownCircleOutline size={20} />
                    </AboutButton>
                  </Link>
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
