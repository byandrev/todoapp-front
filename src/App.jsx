import { Route, Switch } from 'wouter'

import HomePage from './pages/Home'
import Header from "./components/Header.jsx";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} path='/'/>
      </Switch>
    </>
  )
}

export default App
