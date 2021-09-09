import React,{useState,useContext} from "react";
import axios from "axios"
import { userContext } from "../../../App";
import { useHistory } from "react-router-dom";


const Login=()=>{
    const history = useHistory()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status,setStatus]=useState()
  
  const tokenContext = useContext(userContext);
  

return (<div>

</div>)
}

export default Login