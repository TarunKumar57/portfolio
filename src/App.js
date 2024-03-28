import {Component} from 'react'
// import {Redirect, Route, Switch} from 'react-router-dom'
import './App.css'
// import Header from './components/Header'
import Home from './components/Home'
import ThemeContext from './context/themeContext'
// Replace your code here
class App extends Component {
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
        <Home />
        {/* <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch> */}
      </ThemeContext.Provider>
    )
  }
}

export default App
