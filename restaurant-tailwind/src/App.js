import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/screens/Dashboard'
import Loader from './components/elements/Loader'

const App = () => {
  // REACT Application Preloader Functionality Setup
  const [isLoading, setIsLoading] = useState(true)
  const handleLoading = () => setIsLoading(false)
  useEffect(() => {
    window.addEventListener('load', handleLoading)
    return () => window.removeEventListener('load', handleLoading)
  })

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          {isLoading ? <Loader /> : <Dashboard />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
