import React ,{useState,createContext}from 'react';
import { Route ,Switch} from 'react-router-dom';
import Navigaion from "./components/navigation/index"
import Login from './components/auth/login/index';
import { Register } from './components/auth/signUp';
import { AllBook } from './components/book/Book';
import { Search } from './components/search/Search';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import {FavBage}from "./components/FavBage/FavBage"
import { Logout } from './components/logout/Logout';
import Footer from './components/footer/footer';








export const numberContext = createContext()
export const userContext = createContext();



const App = () => {

	const [number,setNumber]=useState(0)
	const cartNumber = {number,setNumber}
	const [token,setToken]=useState()
    const state={token,setToken}
	return (<div>
<numberContext.Provider value={cartNumber}>
 
    
<userContext.Provider value={state}>
<Navigaion/>
<Search/>

<Switch>
	
<Route path="/login" component={Login}/>
<Route path = "/signUp" component = {Register}/>
<Route path = '/home' component = {AllBook} />
<Route path = '/search' component = {Search} />
<Route path = '/cart' component = {ShoppingCart} />
<Route path = '/logout' component = {Logout} />
<Route path = '/favorite' component = {FavBage} />
<Route path = '/profile' component = {Profile} />
<Route path = '/myProfile' component = {Info} />





</Switch>

</userContext.Provider>
</numberContext.Provider>
<Footer/>
	</div>)
};

export default App;
