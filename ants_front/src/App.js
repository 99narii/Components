import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import { HomeContext, HomeProvider } from './screen/Home/HomeContext';
import React from 'react';
import ImgSlide from './components/SlideImg';
import Navigator from './components/header';
import Footer from './components/Footer';
import Sidebar from './components/SideBar';
import SearchBox from './components/SearchBox';
import ImgInput from './components/ImgInput';
// import { CalendarPage } from './components/calender';
import Gallery from './components/gallery';
import Countdown from './components/DdayNotMoment';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigator />
      </header>
      <Routes>
        <Route exact path="/" element={
          <HomeProvider>
            <Sidebar />
            <SearchBox />
            <Countdown />
            <Gallery />
            <ImgInput />
            <ImgSlide />
            {/* <CalendarPage /> */}
            <Footer company="antsnest" email="info@antsnest.com" />
          </HomeProvider>} key="Home" />
      </Routes>
    </div>
  );
}

export default App;
