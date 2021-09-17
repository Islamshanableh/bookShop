import React ,{useContext,useEffect} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import {userContext} from "../../App"
import { MdAddShoppingCart } from "react-icons/md"
import "./navigation.css"
import { numberContext } from '../../App';
import { Register } from '../auth/signUp';

import Login from '../auth/login';

import { Search } from '../search/Search';

// import {userContext} from "../../App"
import { Profile } from '../profile/profile';



import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { red } from '@material-ui/core/colors';

const Navigation = () => {
const cart = useContext(numberContext)
console.log(cart);
	const token = useContext (userContext) 
	token.setToken(localStorage.getItem('token'))



	 useEffect( async () => {
		 try {
	  axios
      .get(
        "http://localhost:5000/users",

        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then(async(res) => {
		 
       const numberOfCart= await (res.data.userInfo[0].cart.length)
	  cart.setNumber(numberOfCart)
	  console.log("sss");
	  console.log(res.data.userInfo[0].cart.length);
	//   localStorage.setItem('cart',res.data.userInfo[0].cart.length)
      });
		 } catch (error) {
			 throw error 
		 }

  }, );

	return (
	
	<nav className="fixed">
		{!token.token?(
	<ul className="nav-list">
	  <li className="nav-item">
	  <h3 className="kero">KERO BOOK</h3>
	  </li>
	  <li className="nav-item">
		<Search/>
	  </li>
	  <li className="nav-item">
			<Login/>

	  </li>
	  <li className="nav-item">
		<Register/>
	  </li>
	  <li className="nav-item">
		<Link to="/home">Home</Link>
	  </li>
	  <li className="nav-item">
		<About/>
	  </li>
	  <li className="nav-item">
		<Contact/>
	  </li>
	  

	</ul>):(
		<ul className="nav-list">
		<li className="nav-item">
		<h3 className="kero">KERO BOOK</h3>
		</li>
		<li class="nav-item search">
		<Search/>
	  </li>
		<li className="nav-item">
		<Link  className="Link"to= "/home" >Home</Link>	
		</li>
		
		<li className="nav-item">
		<Link  className="Link"to= "/favourite" >Favourite</Link>
		</li>
		<li class="nav-item">
		<Link className="Link odai" to= "/cart" ><MdAddShoppingCart size="2em"/> <div className="n">{cart.number}</div></Link>
		</li>
		<li className="nav-item">
		<About/>
		</li>
		<li className="nav-item">
		<Contact/>
	  </li>
		<li className="nav-item">
		<Link  className="Link"to= "/logOut" >LogOut</Link>
		</li>
		<li className="nav-item">
		<Profile/>
		</li>
	  </ul>
	
	)
}
	</nav>
	)
};

export default Navigation;
