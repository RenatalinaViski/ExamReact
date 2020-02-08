import React,{ useState, useMemo } from 'react'
import './formLogin.css'

 const user="";
  function setToken(token){
      localStorage.authToken=token
  }

const FormLogin=({log,pas,onSend})=>{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    // useMemo(() => (setLogin(""), setPassword(""), []))
    return (
        <>
           <div className="row justify-content-md-center mt-5">
            <div className="col-sm-3 ">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input value={login} onChange={event =>setLogin(event.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>                
                <button type="submit" onClick={()=>{onSend(login, password); }} className="btn btn-primary">Submit</button>
            </div>
            </div>
        </>
    )
}

export default FormLogin;