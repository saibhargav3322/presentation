import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ordernav from './ordersnav'

function Pendingorders(props) {

    const [data,setData]=useState([])

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/allorders"

        const get=()=>{

            axios.get(url).then(res=>{
                setData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        };

        useEffect(() => {
            get();
             }, []);

    return (
        <div>
            <Ordernav></Ordernav>
            <br/>
               <h2>All Pending Orders</h2>
               <table class="table table-striped table-responsive-md btn-table" style={{margin:"50px 50px 0px 250px",width:"1100px",border:"2px solid skyblue",borderRadius:'5px'}}>

                   <thead className="thead-dark">
                       <tr>
                           <th>CustomerUserName</th>
                           <th>WasherUserName</th>
                           <th>Date</th>
                           <th>Location</th>
                           <th>Status</th>
                           <th>CarBrand</th>
                           <th>CarModel</th>
                           <th>WashPack Id</th>
                           <th>Payment</th>
                       </tr>
                   </thead>
                   <tbody>
                   {
     data.filter((d)=>{
        if(d.status==="pending"){
          return d
        }
      }).map(d=>(
        <tr key={d.id}>
        <td>{d.customerUsername}</td>
        <td>{d.washerUsername}</td>
        <td>{d.date}</td>
        <td>{d.address.city}</td>
        <td>{d.status}</td>
        <td>{d.carBrand}</td>
        <td>{d.carModel}</td>
        <td>{d.washpack.id}</td>
        <td>{d.payment}</td>
            
        </tr>
    ))
}
                   </tbody>
               </table>
              
       
        </div>

    );
}

export default Pendingorders;