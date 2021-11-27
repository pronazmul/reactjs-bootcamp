import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ShopScreen from './components/screens/ShopScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ShopScreen} exact />
      </Switch>
    </Router>
  )
}

export default App
