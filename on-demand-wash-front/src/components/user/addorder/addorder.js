import React,{useState} from 'react';
import axios from 'axios';
import './addorder.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../usernav'

function Addorder(props) {

    const[data,setData]=useState({        
        carbrand:"",
        carmodel:"",
        date:"",
        housenumber:"",
        streetname:"",  
        landmark:"",
        packid:"",
        payment:"success"
    })

    const navigate=useNavigate();
    const [error,setError]=useState();

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("token");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9095/user/addorder"

        function submit(e){
               const  carbrand=data.carbrand
               const carmodel=data.carmodel
               const  date=data.date
               const  housenumber=data.housenumber
               const streetname=data.streetname
               const landmark=data.landmark
               const packid=data.packid
               const  payment=data.payment
                
            e.preventDefault();
            axios.post(url,null,{params:{carbrand,carmodel,date,housenumber,streetname,landmark,packid,payment}} )
                .then(res=>{
                    console.log(res.data);
                    alert("Order added successfully");
                    navigate("/userhome")
                },
               ).catch(err => {
                   if(err.response.status === 403)
                   {

                setError("please login")
                   }
                   if(err.response.status === 400)
                   {

                setError("please enter all details")
                   }
            })

        }

        function handle(e){
            const newdata={...data}
            newdata[e.target.id]=e.target.value
            setData(newdata)
        }
    return (
        <React.Fragment> 
            <Navbar/>
        <h1>Enter Order Details</h1>
        <div  > 
            {error && <div>{error}</div>}
            <form onSubmit={(e)=>submit(e)} className='addform'>
                <label>carbrand: </label>
                <input onChange={(e)=>handle(e)} id="carbrand" value={data.carbrand} placeholder='carbrand' type="text"  /><br/><br/>
                <label>carmodel: </label>
                <input onChange={(e)=>handle(e)} id="carmodel" value={data.carmodel} placeholder='carmodel' type="text"/><br/><br/>
                <label>date: </label>
                <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder='date' type="date"/><br/><br/>
                <label>housenumber: </label>
                <input onChange={(e)=>handle(e)} id="housenumber" value={data.housenumber} placeholder='housenumber' type="text"/><br/><br/>
                <label>landmark: </label>
                <input onChange={(e)=>handle(e)} id="landmark" value={data.landmark} placeholder='landmark' type="text"/><br/><br/>
                <label>streetname: </label>
                <input onChange={(e)=>handle(e)} id="streetname" value={data.streetname} placeholder='streetname' type="text"/><br/><br/>
                <label>packid: </label>
                <input onChange={(e)=>handle(e)} id="packid" value={data.packid} placeholder='packid' type="number"/><br/><br/>
                <label>payment: </label>
                <input onChange={(e)=>handle(e)}  id="payment" value={data.payment} placeholder='payment' type="text"/><br/><br/>

                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
    );
}

export default Addorder;