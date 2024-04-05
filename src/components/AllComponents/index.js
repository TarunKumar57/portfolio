import {Component} from 'react'
// import {Redirect, Route, Switch} from 'react-router-dom'

import Header from '../Header'
import Home from '../Home'
import About from '../About'
import Education from '../Education'
import Projects from '../Projects'
import Contact from '../Contact'

import ThemeContext from '../../context/themeContext'

import {AllContainer, Hr} from './styledComponents'
// Replace your code here
class AllComponents extends Component {
  state = {
    isDarkTheme: true,
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    // eslint-disable-next-line
    const {isDarkTheme, changeTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <AllContainer isDark={isDarkTheme}>
          <Header />
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
        </AllContainer>
      </ThemeContext.Provider>
    )
  }
}

export default AllComponents
