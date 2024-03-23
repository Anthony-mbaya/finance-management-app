import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu =()=>{
        setMenu(!menu)
    }
  return (
    <div className="nav-bar">
      <h1>CruxTon Ltd Finance App</h1>
      <ul className="nav-list">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleMenu} className="menu-icon">
        { menu ? <AiOutlineClose className="aioutline" /> : <AiOutlineMenu className="aioutline" />} 
      </div>
      <div className={ menu ? "menu-bar" : "hidden"}>
      <h1 className="mt-8">CruxTon Ltd Finance App</h1>
        <ul className="menu-list">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
