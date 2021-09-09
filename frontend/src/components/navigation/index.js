import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {userContext} from "../../App"

// import {userContext} from "../../App"

const Navigation = () => {
	const token = useContext (userContext) 
	return (<div className="App">
{!token.token?(<div className="navigation">
<Link to= "/login" >login </Link>
<Link to= "/signUp" >Register</Link>
<Link to= "/home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link></div>	)
:(<div className="navigation">
<Link to= "/signOut" >signOut</Link>
<Link to= "/home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link>
</div>)
}
	</div>)
};

export default Navigation;
