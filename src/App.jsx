import { Route, Switch } from 'wouter'

import HomePage from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <Switch>
    <Route component={HomePage} path='/'/>
    <Route component={Profile} path='/profile'/>
    </Switch>
    </>
  )
}

export default App
