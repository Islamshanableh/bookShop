import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {userContext} from "../../App"
import { MdAddShoppingCart } from "react-icons/md"
import KERO from '../images/KERO.gif';
import "./navigation.css"

// import {userContext} from "../../App"

const Navigation = () => {
	
	const token = useContext (userContext) 
	token.setToken(localStorage.getItem('token'))
	return (
	
	<nav class="fixed">
		{!token.token?(
	<ul class="nav-list">
	  <li class="nav-item">
	  <h3 class="kero">KERO BOOK</h3>
	  </li>
	  <li class="nav-item">
		<Link to="/login">login </Link>
	  </li>
	  <li class="nav-item">
		<Link to="/signUp">Register</Link>
	  </li>
	  <li class="nav-item">
		<Link to="/home">Home</Link>
	  </li>
	  <li class="nav-item">
		<Link to="/aboutUs">aboutUs</Link>
	  </li>

	</ul>):(
		<ul class="nav-list">
		<li class="nav-item">
		  <img src={KERO} alt="logo"></img>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/logOut" >logOut</Link>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/home" >Home</Link>	
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/aboutUs" >aboutUs</Link>
		</li>
		<li class="nav-item">
		<Link className="Link" to= "/cart" ><MdAddShoppingCart size="2em"/></Link>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/favourite" >Favourite</Link>
		</li>
	  </ul>
	
	)
}
	</nav>
	)
};

export default Navigation;
