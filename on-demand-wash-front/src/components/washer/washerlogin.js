import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router';

function Login()  {

    const[data,setData]=useState({
        username:"",
        password:""
    })

    const navigate =  useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const username = data.username
        const password = data.password
        axios.post('http://localhost:9096/washer/authenticate',null,{params: {username, password}})
        .then(res => {
            console.log(res.data)
            localStorage.setItem('washertoken',res.data);
            navigate("/washernav")

        })
        .catch(err => {
            if(err.response.status === 403)
            {
                alert("Invalid credientials")
            }
        })
    };

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }
    return (
        <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange={e=>handle(e)} id="username" value={data.username}/>
      </div>
       
      <div className="form-group">
          <label>password</label>
          <input type="password" className="form-control" placeholder="password" 
           onChange={e=>handle(e)} id="password" value={data.password}/>
      </div>

      <div className='form-group'>
          <button className='btn btn-primary btn-block' >Login</button>
      </div>
      
    </form>
    )
}

export default Login