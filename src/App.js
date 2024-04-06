import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import AllComponents from './components/AllComponents'
import ProjectsList from './components/ProjectsList'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AllComponents} />
        <Route exact path="/all-projects" component={ProjectsList} />
      </Switch>
    )
  }
}

export default App
