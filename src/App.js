import React from 'react';
import { Navbar } from './Components/Navbar';
import { Display } from './Components/Display';
import { Bridges } from './Components/Bridges';
import { Member } from './Components/Member';
import { Agreements } from './Components/Agreements';
import { Footer } from './Components/Footer';

export const App =()=>{
  return(
    <div>
      <Navbar />
      <Display />
      <Bridges />
      <Member />
      <Agreements />
      <Footer />
    </div>
  )
}