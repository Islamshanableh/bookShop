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

  
const checkValid = ()=>{
    axios
    .post("http://localhost:5000/login",{email,password})
    .then((res)=>{
        if(!res.data.success){
            return setStatus(<div>{res.data.message}</div>)
        }
        tokenContext.setToken(res.data.token);
        history.push("/home")
    
    }).catch((err)=>{
        throw err
    })
      }
  

  return (
    <>
  
        <div >
            <h2>Login:</h2>
     <input type="email" placeholder="Email-here" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
      <br />
      <input type="password" placeholder="Password Here" onChange={(e) => {
            setPassword(e.target.value);
        }}/>
      <br />
      <button onClick={checkValid}>Login</button>
        </div>
        {status}
        </>
    )
    }
    
    export default Login
