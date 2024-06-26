import { Route, Switch } from 'wouter'

import HomePage from './pages/Home'
import Header from "./components/Header.jsx";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register/index.jsx";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route component={HomePage} path='/'/>
        <Route component={LoginPage} path='/login' />
        <Route component={RegisterPage} path='/register' />
      </Switch>
    </>
  )
}

export default App
