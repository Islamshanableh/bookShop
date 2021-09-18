import React , {useContext} from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../App";

export const Logout=()=>{

    const state = useContext(userContext)

    
    const history = useHistory()
    localStorage.clear()
    state.setToken("");
    history.push("/home")
    
    return (<div>
        
    </div>)

}
