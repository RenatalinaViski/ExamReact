import React, {useState} from 'react'

const FormRegistration=({onSend})=>{
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
  return(
      <>
      <div className="row justify-content-md-center">
            <div className="col-sm-3 ">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input value={login} onChange={event =>setLogin(event.target.value) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input value={email} type="text" onChange={event =>setEmail(event.target.value) } className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" onClick={()=>{ onSend(login, password,email); }} className="btn btn-primary">Submit</button>
            </div>
            </div>
      </>
  )
}
export default FormRegistration;