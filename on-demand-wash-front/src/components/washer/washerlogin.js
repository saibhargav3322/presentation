import axios from 'axios';
import React,{useState} from 'react';
import {useNavigate} from 'react-router';
import Washernav from './washernav'

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
            navigate("/washerhome")

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
        <React.Fragment>
        <Washernav></Washernav>
        <br/>
        <form className='loginForm' onSubmit={handleSubmit}>
        <img src='/images/loginfinal.jpg' className='image' style={{filter:"blur(7px)",top:"-30px"}}></img>
        <h2 className='login'>Washer Login</h2>

        <div className="mb-3">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange={e=>handle(e)} id="username" value={data.username}/>
      </div>
       
      <div className="mb-3">
          <label>password</label>
          <input type="password" className="form-control" placeholder="password" 
           onChange={e=>handle(e)} id="password" value={data.password}/>
      </div>

      <div className='d-grid'>
          <button className='btn btn-primary' >Login</button>
      </div>
      
    </form>
    </React.Fragment>
    )
}

export default Login