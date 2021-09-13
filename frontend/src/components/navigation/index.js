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
	return (<div className="header">
	<div className="logo" ><img src={KERO} alt="Logo" ></img> </div>	
{!token.token?(<div className="navigation">
<Link  className="Link" to= "/login" >login </Link>
<Link  className="Link"to= "/signUp" >Register</Link>
<Link className="Link" to= "/home" >Home</Link>	
<Link className="Link" to= "/aboutUs" >aboutUs</Link>

</div>	)
:(<div className="navigation">
<Link  className="Link"to= "/logOut" >logOut</Link>
<Link  className="Link"to= "/home" >Home</Link>	
<Link  className="Link"to= "/aboutUs" >aboutUs</Link>
<Link className="Link" to= "/cart" ><MdAddShoppingCart className="cart"/>Cart</Link>
</div>)
}
	</div>)
};

export default Navigation;
