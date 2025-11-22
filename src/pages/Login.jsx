import React, { useState } from 'react'

const Login = () => {
const [user,setUser] = useState({
  email:'',
  password:''
})

const handelChangeEmail=(e)=>{
setUser({...user, email:e.target.value})

  
}

const handelChangePassword=(e)=>{
  setUser({...user, password:e.target.value})
  
}





  return (
    <div className='container'>
        <h1>
            LOGin
        </h1>
        <form className="row g-3 w-50">
  <div className="col-md-12">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input onChange={handelChangeEmail} type="email" className="form-control" id="inputEmail4" name='email'/>
    <p>{user.email}</p>
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password"  onChange={handelChangePassword} className="form-control" id="inputPassword4" name='password'/>
    <p>{user.password}</p>
  </div>
 
  <div className="col-12">
    <button type="submit" className="btn btn-success">Sign in</button>
  </div>
</form>
    </div>
  )
}

export default Login