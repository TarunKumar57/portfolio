import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {IoSunny, IoMoon, IoHome} from 'react-icons/io5'
import {IoMdContact} from 'react-icons/io'
import {AiFillCode} from 'react-icons/ai'
import ThemeContext from '../../context/themeContext'

import {
  NavContainer,
  Logo,
  NavIcon,
  NavListItem,
  NavListContainer,
  NavMobileContainer,
  MobileLogo,
  NavMobileIconsList,
  NavMobileIcon,
} from './styledComponents'

const activeMenuCardItem = {
  initial: 'INITIAL',
  home: 'HOME',
  about: 'ABOUT',
  projects: 'PROJECTS',
  contact: 'CONTACT',
}

const Header = () => {
  const [activeMenu, changeActiveMenu] = useState('initial')
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const linkStyle = {
          textDecoration: 'none',
          color: isDarkTheme ? '#f9f9f9' : '#181818',
        }
        const iconActiveColor = '#ff0b37'

        return (
          <>
            <NavContainer isDark={isDarkTheme}>
              <Link to="/" style={linkStyle}>
                <Logo
                  isDark={isDarkTheme}
                  key="HOME"
                  isActive={activeMenu === activeMenuCardItem.home}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >{`<Tarun Kumar/>`}</Logo>
              </Link>
              <NavListContainer>
                <NavListItem
                  key="HOME"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.home}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >
                  <Link to="/" style={linkStyle}>
                    Home
                  </Link>
                </NavListItem>
                <NavListItem
                  key="ABOUT"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.about}
                  onClick={() => changeActiveMenu(activeMenuCardItem.about)}
                >
                  <Link to="/about" style={linkStyle}>
                    About
                  </Link>
                </NavListItem>
                <NavListItem
                  key="PROJECTS"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.projects}
                  onClick={() => changeActiveMenu(activeMenuCardItem.projects)}
                >
                  <Link to="/projects" style={linkStyle}>
                    Projects
                  </Link>
                </NavListItem>
                <NavListItem
                  key="CONTACT"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.contact}
                  onClick={() => changeActiveMenu(activeMenuCardItem.contact)}
                >
                  <Link to="/contact" style={linkStyle}>
                    Contact
                  </Link>
                </NavListItem>
                <NavIcon
                  onClick={() => changeTheme(!isDarkTheme)}
                  data-testid="theme"
                >
                  {isDarkTheme ? <IoSunny /> : <IoMoon />}
                </NavIcon>
              </NavListContainer>
            </NavContainer>

            <NavMobileContainer isDark={isDarkTheme}>
              <NavMobileIconsList>
                <Link to="/" style={linkStyle}>
                  <MobileLogo
                    isDark={isDarkTheme}
                    key="HOME"
                    isActive={activeMenu === activeMenuCardItem.home}
                    onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                  >{`<TK/>`}</MobileLogo>
                </Link>
                <NavMobileIcon
                  key="HOME"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >
                  <Link to="/" style={linkStyle}>
                    <IoHome
                      color={
                        activeMenu === activeMenuCardItem.home &&
                        iconActiveColor
                      }
                    />
                  </Link>
                </NavMobileIcon>
                <NavMobileIcon
                  key="ABOUT"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.about)}
                >
                  <Link to="/about" style={linkStyle}>
                    <BsInfoCircle
                      color={
                        activeMenu === activeMenuCardItem.about &&
                        iconActiveColor
                      }
                    />
                  </Link>
                </NavMobileIcon>
                <NavMobileIcon
                  key="PROJECTS"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.projects)}
                >
                  <Link to="/projects" style={linkStyle}>
                    <AiFillCode
                      color={
                        activeMenu === activeMenuCardItem.projects &&
                        iconActiveColor
                      }
                    />
                  </Link>
                </NavMobileIcon>
                <NavMobileIcon
                  key="CONTACT"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.contact)}
                >
                  <Link to="/contact" style={linkStyle}>
                    <IoMdContact
                      size={35}
                      color={
                        activeMenu === activeMenuCardItem.contact &&
                        iconActiveColor
                      }
                    />
                  </Link>
                </NavMobileIcon>
                <NavMobileIcon
                  data-testid="theme"
                  onClick={() => changeTheme(!isDarkTheme)}
                >
                  {isDarkTheme ? <IoSunny /> : <IoMoon />}
                </NavMobileIcon>
              </NavMobileIconsList>
            </NavMobileContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
