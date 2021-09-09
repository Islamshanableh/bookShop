import React from 'react';
import { Link } from 'react-router-dom';
import {userContext} from "../../App"
const Navigation = () => {
	const token = useContext (userContext) 
	return (<div className="App">
{!token.token?(<div className="navigation">
<Link to= "/signin" >login </Link>
<Link to= "/signup" >signUp</Link>
<Link to= "/Home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link></div>	)
:(<div className="navigation">
<Link to= "/signOut" >signOut</Link>
<Link to= "/Home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link>
</div>)
}
	</div>)
};

export default Navigation;
