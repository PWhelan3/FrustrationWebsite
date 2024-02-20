import React, { useState } from 'react';
import './App.css';
import {LandingPage} from './components/LandingPage/LandingPage';
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <LandingPage />
      <Navbar/>

    </>
  )
}

export default App
