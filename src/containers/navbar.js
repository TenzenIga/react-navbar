import React from 'react';

const Navbar = (props) =>{
  let className = props.show ? "navbar": 'navbar-off';
  return (<ul className={className} onMouseEnter={props.onMouseEnter}>
<li><a  href="#home">Home</a></li>
<li><a href="#news">News</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#about">About</a></li>
</ul>
)
}

export default Navbar;
