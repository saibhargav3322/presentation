import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router';
import { Link } from 'react-router-dom';
import Adminnav from './adminnav'
import '../user/login.css'

function Login()  {

    const[data,setData]=useState({
        name:"",
        password:""
    })

    const navigate =  useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const username = data.name
        const password = data.password
        axios.post('http://localhost:9094/admin/authenticate',null,{params: {username, password}})
        .then(res => {
            console.log(res.data)
            localStorage.setItem('admintoken',res.data);
            navigate("/adminhome")

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
    return (<>
    
        <Adminnav></Adminnav>
        <form className='loginForm' onSubmit={handleSubmit}>
        <img src='/images/loginfinal.jpg' className='image'></img>
        <h2 className='login'>Login</h2>

        <div className="form-group">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange={e=>handle(e)} id="name" value={data.username}/>
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
    </>
    )
}

export default Login