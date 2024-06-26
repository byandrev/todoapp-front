import { Route, Switch } from 'wouter'

import HomePage from './pages/Home'
import Header from "./components/Header.jsx";
import LoginPage from "./pages/Login.jsx";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} path='/'/>
        <Route component={LoginPage} path='/login'/>
      </Switch>
    </>
  )
}

export default App
