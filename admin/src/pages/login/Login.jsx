import { useState } from "react"
import {useDispatch} from 'react-redux';
import {login} from '../../redux/apiCalls';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username,password});
  }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <input style={{marginBottom:'20px', padding:'10px'}} type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
      <input style={{marginBottom:'20px', padding:'10px'}}  type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
      <button style={{padding:'10px', width:'100px' }} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
