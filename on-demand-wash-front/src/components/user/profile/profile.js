import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../usernav'
import { useNavigate } from 'react-router-dom';
import '../register.css'

function Profile(props) {

    const [data,setData]=useState({})
    const [username,setUsername]=useState()
    const[passwordd,setPassword]=useState()
    const navigate=useNavigate();

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("token");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9095/user/profile"

        function get(){

            axios.get(url )
            .then(res=>{
              setData(res.data);
              setUsername(res.data.username)
              setPassword(res.data.password)
              console.log(res.data)
            },
            ).catch=(err)=>{
                if(err.response.code === 403)
                {
                    console.log("login pls")
                }
            }
          }

          const handleSubmit = e => {
            e.preventDefault();
            axios.interceptors.request.use(
                config => {
                config.headers.authorization = "Bearer " + localStorage.getItem("token");
                return config;
                },
                error => {
                return Promise.reject(error);
                });
        
    
            
                const name= data.name
                const gmail= data.gmail
               const  password= data.password
               const location= data.location
               const Username= data.username
            
            axios.put('http://localhost:9095/user/update',null,{params:{name,gmail,password,location,Username}}).then(
                res => {
                    console.log(res.data)
                    // //localStorage.removeItem('token')
                    //  navigate("/userhome")
                    //  alert(username)
                    //  alert(data.username)
                    //  alert(passwordd)
                    //  alert(data.password)

                }
            ).catch(
                err => {
                    if(err.response.status === 400)
                    {
                        alert("username already exists")
                    }
                }
            )
            if(username === data.username &&  passwordd === data.password)
            {
               
                navigate("/userhome")
                
            }
            else{

            
            navigate("/userlogin")
// localStorage.removeItem('token')
            }
        };


          useEffect(() => {
            get();
             }, []);

             function handle(e){
                const newdata={...data}
                newdata[e.target.id]=e.target.value
                setData(newdata)
            }

           const  deleteaccount=(e)=>{

                e.preventDefault();
                axios.delete('http://localhost:9095/user/delete').then(
                    res=>
                    {
                        console.log(res.data)
                        localStorage.removeItem('token')
                        navigate("/")
                    }).catch(
                        err=>{
                            console.log(err)
                        }
                    )
            }
    return (
        <div>
            <Navbar/>
            <form className='register' onSubmit={handleSubmit}>
          <h2 className='signup'>Update Details</h2>
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
            <input type="text" className="form-control" placeholder="location" 
            onChange={e=>handle(e)} id="location" value={data.location}/>
        </div>
        <div className="form-group">
            <label>username</label>
            <input type="text" className="form-control" placeholder="username" 
            onChange={e=>handle(e)} id="username" value={data.username}/>
        </div>

        <div className='form-group'>
            <button className='btn btn-primary btn-block'> Update </button>
        </div>
        
      </form>

      <h3>Delete your account?</h3>

      <div className='form-group'>
            <button onClick={(e)=>deleteaccount(e)} className='btn btn-primary btn-block'> Delete </button>
        </div>
            
        </div>
    );
}

export default Profile;