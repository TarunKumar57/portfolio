import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {
  HomeContainer,
  TopContainer,
  HomeImg,
  AboutButton,
} from './styledComponents'
import ThemeContext from '../../context/themeContext'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer isDark={isDarkTheme}>
              <Header />
              <TopContainer>
                <div>
                  <p>Hello,</p>
                  <p>I am Tarun Kumar</p>
                  <p>I'm a software developer</p>
                  <Link to="./about">
                    <AboutButton type="button" isDark={isDarkTheme}>
                      About me
                    </AboutButton>
                  </Link>
                </div>
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
