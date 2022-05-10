import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Washnav from './washpacknav'

function Addpack(props) {

    const [data,setData]=useState({

        id:"",
        cost:"",
        name:"",
        description:""
    })
    const navigate=useNavigate()

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/addpack"

        function submit(e){                
            e.preventDefault();
            axios.post(url,data )
                .then(res=>{
                    console.log(res.data);
                    notify();
                    setTimeout(() => navigate('/adminpacks'), 3000)
                },
               ).catch(err => {

                console.log(err)
            })

        }

        const notify=()=>{toast("Pack added successfully")}

        function handle(e){
            const newdata={...data}
            newdata[e.target.id]=e.target.value
            setData(newdata)
        }
    return (
        <div>
              <Washnav/>
              <br/>
               <h2>Add Pack Details</h2>
               <br/>
   <form onSubmit={(e)=>submit(e)} className='register'>
   <div className='form-group'>
                <label>Id: </label>
                <input onChange={(e)=>handle(e)} id="id" value={data.id} placeholder='id' type="number" className='form-control' />
                </div>
                <div className='form-group'>
                <label>Name: </label>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text" className='form-control'/>
               </div>
               <div className='form-group'>
                <label>Cost: </label>
                <input onChange={(e)=>handle(e)} id="cost" value={data.cost} placeholder='cost' type="number" className='form-control'/>
               </div>
               <div className='form-group'>
                <label>Description: </label>
                <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder='description' type="text" className='form-control'/>
                </div>
                <button  className='btn btn-primary btn-block'>Submit</button>
                <ToastContainer></ToastContainer>
                </form>
 
        </div>
    );
}

export default Addpack;