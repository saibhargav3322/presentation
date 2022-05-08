import React, { useState,useEffect } from 'react';
import axios from 'axios'
import Adminnav from '../adminnav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Washer(props) {
    const [data,setData]=useState([])
    const [washerUsername,setwasherUsername] = useState('');

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/allwashers"

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

             const notifysuccess=()=>{toast("Washer deleted successfully")}

             const notifyfail=()=>{toast("Some error")}

             const deleteuser=(a)=>{
                 const username=a;
                const url="http://localhost:9094/admin/deletewasherbyusername"
                axios.delete(url,{params:{username}}).then(res=>{
                    notifysuccess()
                    console.log(res.data)
                }).catch(err=>{
                    notifyfail();
                })

                // window.location.reload(2000)
                
                setTimeout(function(){
                    window.location.reload(1);
                 }, 3000);
             }


    return (
<div>
    <Adminnav></Adminnav>
 
<h1>Ratings</h1>
<p>Enter customer username to search:   <input type="text" placeholder="username" onChange={e=>setwasherUsername(e.target.value)} className='reservatioinsearch' />

</p>
<table class="table table-striped table-responsive-md btn-table">
<thead className="thead-dark">
<tr>

<th>CustomerName</th>
<th>Username</th>
<th>gmail</th>
<th>location</th>
</tr>
</thead>
<tbody>

{
     data.filter((d)=>{
        if(washerUsername==""){
          return d
        }
        else if(d.username.toLowerCase().includes(washerUsername.toLowerCase())){
          return d
        }
      }).map(d=>(
        <tr key={d.id}>

            <td>{d.name}</td>
            <td>{d.username}</td>
            <td>{d.gmail}</td>
            <td>{d.location}</td>
            <td><button onClick={()=>deleteuser(d.username)}>Delete</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    ))
}
</tbody>
</table>
</div>
    );
}

export default Washer;