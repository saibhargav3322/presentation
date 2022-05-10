import React, { useState,useEffect } from 'react';
import axios from 'axios'
import Washernav from '../washernav'

function Ratings(props) {

    const [data,setData]=useState([])

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("washertoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9096/washer/ratings"

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


    return (
<div>
        <Washernav></Washernav>
        <br/>
<h1>Your Ratings</h1>

<table class="table table-striped table-responsive-md btn-table" style={{margin:"50px 50px 0px 200px",width:"1100px",border:"2px solid skyblue",borderRadius:'5px'}}>
<thead className="thead-dark">
<tr>

<th>CustomerName</th>
<th>Comment</th>
<th>Rating</th>
</tr>
</thead>
<tbody>

{
    data.map(d=>(
        <tr key={d.id}>

            <td>{d.customer_username}</td>
            <td>{d.comment}</td>
            <td>{d.rating}</td>
        </tr>
    ))
}
</tbody>
</table>
</div>
    );
}

export default Ratings;