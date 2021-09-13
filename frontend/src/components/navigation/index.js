import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {userContext} from "../../App"




// import {userContext} from "../../App"

const Navigation = () => {
	
	const token = useContext (userContext) 
	token.setToken(localStorage.getItem('token'))
	return (<div className="App">
{!token.token?(<div className="navigation">
<Link to= "/login" >login </Link>
<Link to= "/signUp" >Register</Link>
<Link to= "/home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link>

</div>	)
:(<div className="navigation">
<Link to= "/logOut" >logOut</Link>
<Link to= "/home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link>
<Link to= "/cart" ><MdAddShoppingCart/>Shopping Cart</Link>
</div>)
}
	</div>)
};

export default Navigation;
