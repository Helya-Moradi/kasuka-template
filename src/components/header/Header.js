import React from 'react';
import Navbar from './navbar/Navbar';
import HeadContainer from './headContainer/HeadContainer';

export default function Header() {
  return (
    <div id="header">
      <Navbar/>
      <HeadContainer/>
    </div>
  )
}
