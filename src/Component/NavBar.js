import "./Navbarcomp.css"
import React, { Component } from "react";
import logo from "../Images/sample.png";
import { Link } from 'react-router-dom';
export default class NavBarcomp extends Component {
  render() {
    return (
        <nav class="_navbar sticky" >
        <div className="logo"><img src="https://gdsciiitb.tech/images/logos/gdsc-logo.gif" alt ="logo"/>
        </div>

        <ul className="nav-links ">
             <input type="checkbox" id="checkbox_toggle" />
             <label htmlFor="checkbox_toggle" className="hamburger"> ☰ </label>
        <div className="menu">
            <li>
              <Link className="link_text font-face-Bold "  to="/">Home</Link>
            </li>
            {/* <li>
              <Link className="link_text font-face-Bold "  disabled   to="/">About</Link>
            </li> */}
            <li >
              <Link className="link_text font-face-Bold " to="/teams">Team</Link>
            </li>
            <li>
              <Link className="link_text font-face-Bold "  disabled   to="/events">Events</Link>
            </li>
            {/* <li>
              <Link className="link_text font-face-Bold "  to="/blogs">Blogs</Link>
            </li> */}
            <li>
            < div className="join_us_btn">
             <a className=" font-face-Bold btn_text" target="_blank" rel="noopener noreferrer" href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/">JOIN US</a>
             </div>
            </li>
          </div>
        </ul>
      </nav>
      
    );
  }
}
