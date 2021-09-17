import React ,{useContext,useEffect} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import {userContext} from "../../App"
import { MdAddShoppingCart } from "react-icons/md"
import "./navigation.css"
import { numberContext } from '../../App';

// import {userContext} from "../../App"

const Navigation = () => {
const cart = useContext(numberContext)
console.log(cart);
	const token = useContext (userContext) 
	token.setToken(localStorage.getItem('token'))



// 	 useEffect( async () => {
// 		 try {
// 	  axios
//       .get(
//         "http://localhost:5000/users",

//         {
//           headers: {
//             Authorization: `Bearer ${token.token}`,
//           },
//         }
//       )
//       .then(async(res) => {
		 
//        const numberOfCart= await (res.data.userInfo[0].cart.length)
// 	  cart.setNumber(numberOfCart)
// 	  localStorage.setItem('cart',res.data.userInfo[0].cart.length)
//       });
// 		 } catch (error) {
// 			 throw error 
// 		 }

//   }, []);

	return (
	
	<nav class="fixed">
		{!token.token?(
	<ul class="nav-list">
	  <li class="nav-item">
	  <h3 class="kero">KERO BOOK</h3>
	  </li>
	  <li class="nav-item">
		<Link to="/login">Login </Link>
	  </li>
	  <li class="nav-item">
		<Link to="/signUp">Register</Link>
	  </li>
	  <li class="nav-item">
		<Link to="/home">Home</Link>
	  </li>
	  <li class="nav-item">
		<Link to="/aboutUs">AboutUs</Link>
	  </li>

	</ul>):(
		<ul class="nav-list">
		<li class="nav-item">
		<h3 class="kero">KERO BOOK</h3>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/home" >Home</Link>	
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/aboutUs" >AboutUs</Link>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/favourite" >Favourite</Link>
		</li>
		<li class="nav-item">
		<Link className="Link odai" to= "/cart" ><MdAddShoppingCart size="2em"/> <div className="n">{cart.number}</div></Link>
		</li>
		<li class="nav-item">
		<Link  className="Link"to= "/logOut" >LogOut</Link>
		</li>
	  </ul>
	
	)
}
	</nav>
	)
};

export default Navigation;
