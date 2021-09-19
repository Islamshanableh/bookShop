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
import { Profile } from './components/profile/profile';
import { Info } from './components/profile/info';
import Dashboard from './components/dashboard';
import { Result } from './components/search/result';
import "./App.css"








export const numberContext = createContext()
export const userContext = createContext();
export const resultContext = createContext();
export const resultS = createContext();

const App = () => {

	const [number,setNumber]=useState(0)
	const cartNumber = {number,setNumber}
	const [token,setToken]=useState()
    const state={token,setToken}
	const [value, setValue] = useState("");
	const [searchVal, setSearchVal] = useState("");
    const setSearch = {value,setValue}
	const valueOfSearch = {searchVal,setSearchVal}

	return (<div>
<numberContext.Provider value={cartNumber}>
<resultContext.Provider value={setSearch}>
 <resultS.Provider value={valueOfSearch}>   
<userContext.Provider value={state}>
<Navigaion/>


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
<Route path = '/result' component = {Result} />
<Route path = '/dash' component = {Dashboard} />



</Switch>

</userContext.Provider>
</resultS.Provider>  
</resultContext.Provider>
</numberContext.Provider>
<div style={{height:"400px" , color:"white"}}>.</div>
<div className="footer1"><Footer></Footer></div>
	</div>)
};

export default App;
