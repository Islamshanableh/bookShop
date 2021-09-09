import React ,{useState,createContext}from 'react';
import { Route ,Switch} from 'react-router-dom';
import Navigaion from "./components/navigation/index"
import Login from './components/auth/login/index';
export const userContext = createContext();



const App = () => {
	const [token,setToken]=useState()
const state={token,setToken}
	return (<div>
<userContext.Provider value={state}>
<Navigaion/>

<Switch>
<Route path="/login" component={Login}/>
</Switch>

</userContext.Provider>
	</div>)
};

export default App;
