import React from 'react';
import { Link } from 'react-router-dom';
import {userContext} from "../../App"
const Navigation = () => {
	return (<div className="App">
{!token.token?(<div className="navigation">
<Link to= "/signin" >login </Link>
<Link to= "/signup" >signUp</Link>
<Link to= "/Home" >Home</Link>	
<Link to= "/aboutUs" >aboutUs</Link></div>	)
:()







	</div>)
};

export default Navigation;
