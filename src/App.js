import React from 'react'
import './App.scss'
import {Route, Switch, withRouter, Redirect } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = (props) => {
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          {routes.map((route, i) => {
            return <Route 
              path={route.path}
              component={route.component} 
              exact={route.exact}
              key={i}
            />}
          )} 
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
      <Footer />
    </div>
  )

}

export default withRouter(App)
