import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Components/Home/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard/Dashboard'
import BookingList from './Components/Dashboard/BookingList/BookingList'
import AddHouse from './Components/Dashboard/AddHouse/AddHouse'
import MyRents from './Components/Dashboard/MyRents/MyRents'
import HomeDetails from './Components/HomeDetails/HomeDetails'
import Login from './Components/Login/Login'

import { Provider } from 'react-redux'
import store from './Components/Redux'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


          <ProtectedRoute path="/houseDetails">
            <HomeDetails />
          </ProtectedRoute>

          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/addHouse">
            <AddHouse />
          </Route>
          <Route path="/myRents">
            <MyRents />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
