import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Adminnav from '../adminnav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Washpacks(props) {
    const [data,setData]=useState([])

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/allpacks"

        function get(){

            axios.get(url )
            .then(res=>{
              setData(res.data);
              console.log(res.data)
            },
            ).catch=(err)=>{
                if(err.response.code === 403)
                {
                    console.log("login pls")
                }
            }
          }

          useEffect(() => {
            get();
             }, []);


             const deletepack=(a)=>{
                const url="http://localhost:9094/admin/deleteWashPack/"+a
                axios.delete(url).then(res=>{
                    console.log(res.data)
                })

                // window.location.reload(2000)
                toast("Pack deleted successfully")
                setTimeout(function(){
                    window.location.reload(1);
                 }, 3000);
             }
    return (
<div>
    <Adminnav></Adminnav>
 
<h1>All Packs</h1>
{/* <p>Enter washer username to search:   <input type="text" placeholder="username" onChange={e=>setWasherUsername(e.target.value)} className='reservatioinsearch' />

</p> */}
<table class="table table-striped table-responsive-md btn-table">
<thead className="thead-dark">
<tr>

<th>Id</th>
<th>title</th>
<th>Description</th>
<th>cost</th>
</tr>
</thead>
<tbody>

{
   data.map(d=>(
        <tr key={d.id}>

            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.description}</td>
            <td>{d.cost}</td>
            <td><button onClick={()=>deletepack(d.id)}>Delete</button></td>
        </tr>
    ))
}
</tbody>
</table>
<ToastContainer></ToastContainer>
</div>
    );
}

export default Washpacks;