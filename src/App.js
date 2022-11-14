import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';
function App() {
  return (
    <div>
     <Header></Header>

     <Switch>
          <Route path="/" component={Education}></Route>
          <Route path="/" component={Contacts}></Route>
          <Route path="/" component={GettingStarted}></Route>
          <Route path="/" component={GettingStarted}></Route>
          <Route path="/"     component={AboutUs}></Route>
          <Route path="/" component={Finalize}></Route>
          <Route path="/" component={Login}></Route>
          <Route path="/" component={Register}></Route>             
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;
