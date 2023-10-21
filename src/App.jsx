import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Header from './components/header';


const App = () => {
  return (
        //Below header are all pages
    <BrowserRouter>
      <Header>

        
      </Header>

      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path= "/sign-in" element = {<SignIn/>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/profile" element = {<Profile></Profile>}></Route>
        <Route path = "/sign-up" element = {<SignUp></SignUp>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
