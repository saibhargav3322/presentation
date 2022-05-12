import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../usernav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addorder(props) {

    const[data,setData]=useState({        
        carbrand:"",
        carmodel:"",
        date:"",
        housenumber:"",
        streetname:"",  
        landmark:"",
        packid:"",
        payment:"success",
        phonenumber:""
    })
    const [pack,setPack]=useState([])

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
               const phonenumber=data.phonenumber
                
            e.preventDefault();
            axios.post(url,null,{params:{carbrand,carmodel,date,housenumber,streetname,landmark,packid,payment,phonenumber}} )
                .then(res=>{
                    console.log(res.data);
                    notify();
                    window.location.href="http://localhost:4000";
                    navigate("/userhome",3000)
                },
               ).catch(err => {
                   if(err.response.status === 403)
                   {

                // setError("please login")
                notify403()
                   }
                   if(err.response.status === 400)
                   {

                // setError("please enter all details")
                notify400()
                   }
            })

        }

        const notify400=()=>{toast("Please fill all contents")}
        const notify403=()=>{toast("Please Login")}

        const notify=()=>{toast("Your Order added successfully")}

        function handle(e){
            const newdata={...data}
            newdata[e.target.id]=e.target.value
            setData(newdata)
        }

        const get=()=>{
            axios.get("http://localhost:9095/user/allpacks").then(res=>{
                setPack(res.data)
            })
        }

        useEffect(() => {
            get();
             }, []);
    return (
        <React.Fragment> 
            <Navbar/>
            <br/>
        <h1 className='signup'>Order Details</h1>
        <br/>
        <div  > 
            {/* {error && <div>{error}</div>} */}
            <form onSubmit={(e)=>submit(e)} className='register'>
                <div className='form-group'>
                <label>Carbrand </label>
                <input onChange={(e)=>handle(e)} id="carbrand" value={data.carbrand} placeholder='carbrand' type="text" className='form-control' />
                </div>
                <div className='form-group'>
                <label>Carmodel </label>
                <input onChange={(e)=>handle(e)} id="carmodel" value={data.carmodel} placeholder='carmodel' type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>Date </label>
                <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder='date' type="date" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>H.No </label>
                <input onChange={(e)=>handle(e)} id="housenumber" value={data.housenumber} placeholder='housenumber' type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>Landmark </label>
                <input onChange={(e)=>handle(e)} id="landmark" value={data.landmark} placeholder='landmark' type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>Streetname </label>
                <input onChange={(e)=>handle(e)} id="streetname" value={data.streetname} placeholder='streetname' type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>Packid </label>
                <input onChange={(e)=>handle(e)} id="packid" value={data.packid} placeholder='packid' type="number" className='form-control'/>
                </div>
                <div className='form-group'>
                <label>PhoneNo. </label>
                <input onChange={(e)=>handle(e)} id="phonenumber" value={data.phonenumber} placeholder='phonenumber' type="text" className='form-control'/>
                </div>
                {/* <label>payment: </label>
                <input onChange={(e)=>handle(e)}  id="payment" value={data.payment} placeholder='payment' type="text"/><br/><br/> */}

                <button className='btn btn-primary btn-block'>Add Order</button>
 
            </form>
            <ToastContainer></ToastContainer>
        </div>
        <table class="table table-striped table-responsive-md btn-table" style={{margin:"50px 50px 0px 190px",width:"1200px",border:"2px solid skyblue",borderRadius:'5px'}}>
<thead className="thead-dark">
<tr>

<th>Id</th>
<th>Title</th>
<th>Description</th>
<th>Cost</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>

{
   pack.map(d=>(
        <tr key={d.id}>

            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.description}</td>
            <td>{d.cost}</td>
        </tr>
    ))
}
</tbody>
</table>

    </React.Fragment>
    );
}

export default Addorder;