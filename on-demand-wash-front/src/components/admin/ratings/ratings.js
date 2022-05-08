import React, { useState,useEffect } from 'react';
import axios from 'axios'
import Adminnav from '../adminnav'

function Ratings(props) {

    const [data,setData]=useState([])
    const [washerUsername,setWasherUsername] = useState('');

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/allratings"

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
    <Adminnav></Adminnav>
 
<h1>Ratings</h1>
<p>Enter washer username to search:   <input type="text" placeholder="username" onChange={e=>setWasherUsername(e.target.value)} className='reservatioinsearch' />

</p>
<table class="table table-striped table-responsive-md btn-table">
<thead className="thead-dark">
<tr>

<th>CustomerName</th>
<th>WasherUsername</th>
<th>comment</th>
<th>rating</th>
</tr>
</thead>
<tbody>

{
     data.filter((d)=>{
        if(washerUsername==""){
          return d
        }
        else if(d.washer_username.toLowerCase().includes(washerUsername.toLowerCase())){
          return d
        }
      }).map(d=>(
        <tr key={d.id}>

            <td>{d.customer_username}</td>
            <td>{d.washer_username}</td>
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