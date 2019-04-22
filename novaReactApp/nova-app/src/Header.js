import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './App.css';

      const Header = () => (
        <header>
            <nav>
                <ul className="meni">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Strana2'>Strana2</Link></li>
                    <li><Link to='/Lista'>Lista</Link></li>                   
                </ul>
            </nav>
        </header>
      ) 
export default Header
