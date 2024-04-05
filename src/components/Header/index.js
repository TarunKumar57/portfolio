import {useState} from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {IoSunny, IoMoon, IoHome} from 'react-icons/io5'
import {IoMdContact} from 'react-icons/io'
import {AiFillCode} from 'react-icons/ai'
import ThemeContext from '../../context/themeContext'

// import Home from '../Home'
// import About from '../About'
// import Education from '../Education'
// import Projects from '../Projects'
// import Contact from '../Contact'

import {
  NavContainer,
  Logo,
  NavIcon,
  NavListItem,
  NavListContainer,
  AnchorLink,
  NavMobileContainer,
  MobileLogo,
  NavMobileIconsList,
  NavMobileIcon,
} from './styledComponents'

const activeMenuCardItem = {
  initial: 'INITIAL',
  home: 'HOME',
  about: 'ABOUT',
  education: 'EDUCATION',
  projects: 'PROJECTS',
  contact: 'CONTACT',
}

const Header = () => {
  const [activeMenu, changeActiveMenu] = useState('initial')
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const iconActiveColor = '#ff0b37'

        return (
          <>
            <NavContainer isDark={isDarkTheme}>
              <AnchorLink href="#home" isDark={isDarkTheme}>
                <Logo
                  key="HOME"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.home}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >{`<Tarun Kumar/>`}</Logo>
              </AnchorLink>
              <NavListContainer>
                <NavListItem
                  key="HOME"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.home}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >
                  <AnchorLink href="#home" isDark={isDarkTheme}>
                    Home
                  </AnchorLink>
                </NavListItem>
                <NavListItem
                  key="ABOUT"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.about}
                  onClick={() => changeActiveMenu(activeMenuCardItem.about)}
                >
                  <AnchorLink href="#about" isDark={isDarkTheme}>
                    About
                  </AnchorLink>
                </NavListItem>
                <NavListItem
                  key="EDUCATION"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.education}
                  onClick={() => changeActiveMenu(activeMenuCardItem.education)}
                >
                  <AnchorLink href="#education" isDark={isDarkTheme}>
                    Education
                  </AnchorLink>
                </NavListItem>
                <NavListItem
                  key="PROJECTS"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.projects}
                  onClick={() => changeActiveMenu(activeMenuCardItem.projects)}
                >
                  <AnchorLink href="#projects" isDark={isDarkTheme}>
                    Projects
                  </AnchorLink>
                </NavListItem>
                <NavListItem
                  key="CONTACT"
                  isDark={isDarkTheme}
                  isActive={activeMenu === activeMenuCardItem.contact}
                  onClick={() => changeActiveMenu(activeMenuCardItem.contact)}
                >
                  <AnchorLink href="#contact" isDark={isDarkTheme}>
                    Contact
                  </AnchorLink>
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
                <AnchorLink href="#home" isDark={isDarkTheme}>
                  <MobileLogo
                    isDark={isDarkTheme}
                    key="HOME"
                    isActive={activeMenu === activeMenuCardItem.home}
                    onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                  >{`<TK/>`}</MobileLogo>
                </AnchorLink>
                <NavMobileIcon
                  key="HOME"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.home)}
                >
                  <AnchorLink href="#home" isDark={isDarkTheme}>
                    <IoHome
                      color={
                        activeMenu === activeMenuCardItem.home &&
                        iconActiveColor
                      }
                    />
                  </AnchorLink>
                </NavMobileIcon>
                <NavMobileIcon
                  key="ABOUT"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.about)}
                >
                  <AnchorLink href="#about" isDark={isDarkTheme}>
                    <BsInfoCircle
                      color={
                        activeMenu === activeMenuCardItem.about &&
                        iconActiveColor
                      }
                    />
                  </AnchorLink>
                </NavMobileIcon>
                <NavMobileIcon
                  key="PROJECTS"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.projects)}
                >
                  <AnchorLink href="#projects" isDark={isDarkTheme}>
                    <AiFillCode
                      color={
                        activeMenu === activeMenuCardItem.projects &&
                        iconActiveColor
                      }
                    />
                  </AnchorLink>
                </NavMobileIcon>
                <NavMobileIcon
                  key="CONTACT"
                  isDark={isDarkTheme}
                  onClick={() => changeActiveMenu(activeMenuCardItem.contact)}
                >
                  <AnchorLink href="#contact" isDark={isDarkTheme}>
                    <IoMdContact
                      size={35}
                      color={
                        activeMenu === activeMenuCardItem.contact &&
                        iconActiveColor
                      }
                    />
                  </AnchorLink>
                </NavMobileIcon>
                <NavMobileIcon
                  data-testid="theme"
                  onClick={() => changeTheme(!isDarkTheme)}
                >
                  {isDarkTheme ? <IoSunny /> : <IoMoon />}
                </NavMobileIcon>
              </NavMobileIconsList>
            </NavMobileContainer>
            {/*           
 <AllContainer isDark={isDarkTheme}>
              <Home />
              <Hr />
              <About />
              <Hr />
              <Education />
              <Hr />
              <Projects />
              <Hr />
              <Contact />
              <Hr />
            </AllContainer> */}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Header
