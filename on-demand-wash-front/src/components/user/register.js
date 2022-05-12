import React, { Component, useState } from 'react'
import axios from  'axios';
import {useNavigate} from 'react-router';
import Navbar from './usernav'
import './register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [data,setData]=useState({
        name:"",
        gmail: "",
        password: "",
        location:"",
        username: ""
    })

    const navigate =  useNavigate();


    const handleSubmit = e => {
        e.preventDefault();

        const userdetails = {
            name: data.name,
            gmail: data.gmail,
            password: data.password,
            location: data.location,
            username: data.username
        };
        axios.post('http://localhost:9095/user/adduser',userdetails).then(
            res => {
                console.log(res.data)
                susstost()
                setTimeout(() => navigate('/userlogin'), 900)
            }
        ).catch(
            err => {
                if(err.response.status === 400)
                {
                    errtost();
                }
            }
        )
    };

    const errtost=()=>toast("Username already exists!")
    const susstost=()=>toast("Registered successfully")

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }

    return (
        <React.Fragment>
        <Navbar/>
      <form className='register' onSubmit={handleSubmit}>
          <img src='./images/regpic.jpg' className='regimage' style={{filter:"blur(10px)"}}></img>
          <br/>
          <h2 className='signup'>Sign up</h2>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" placeholder="Name" 
                onChange={e=>handle(e)} id="name" value={data.name}/>
          </div>
        <div className="form-group">
            <label>gmail</label>
            <input type="email" className="form-control" placeholder="Email" 
                 onChange={e=>handle(e)} id="gmail" value={data.gmail}/>
        </div>
        <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control" placeholder="password" 
            onChange={e=>handle(e)} id="password" value={data.password}/>
        </div>
        <div className="form-group">
            <label>location</label>
            {/* <input type="text" className="form-control" placeholder="location" 
            onChange={e=>handle(e)} id="location" list='city' value={data.location}/> */}
<select id="location" className="form-control" onChange={e=>handle(e)} value={data.location}>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Rajahmundary">Rajahmundary</option>
  <option value="Kakinada">Kakinada</option>
  <option value="Eluru">Eluru</option>
  <option value="Vijayawada">Vijayawada</option>
  <option value="Vizag">Vizag</option>
</select>
{/* <datalist id="city">
  <option value="Hyderabad"/>
  <option value="Delhi"/>
  <option value="Chennai"/>
</datalist> */}
        </div>
        <div className="form-group">
            <label>username</label>
            <input type="text" className="form-control" placeholder="username(Must be Unique)" 
            onChange={e=>handle(e)} id="username" value={data.username}/>
        </div>

        <div className='form-group'>
            <button className='btn btn-primary btn-block'> Sign up </button>
        </div>
        
      </form>
      <ToastContainer></ToastContainer>
      </React.Fragment>
    )
}

export default Register