import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Review from '../givereview/givereview'
import { Link } from 'react-router-dom';
import Navbar from '../usernav'

function Getorders(props) {

    const [data,setData]= useState([])

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("token");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9095/user/allorders"

        function get(){

            axios.get(url )
            .then(res=>{
              setData(res.data);
            },
            );
          }

          function review(a){
                // <Review data={a}/>
               
          }

          useEffect(() => {
            get();
             }, []);

             const condition=(e,f)=>{
                if (e === "completed") {
                              
                }
             }


    return (
        <div>
                      <Navbar/>
            <h1>Your orders</h1>

            <table>
          <thead className="thead-dark">
            <tr>
              <th>name</th>
              <th>washername</th>
              <th>status</th>
              <th>date</th>
              <th>payment</th>
              <th>washpack</th>
            </tr>
          </thead>
          <tbody>

              {
                  data.map(d=>(
                      <tr key={d.id}>
                          <td>{d.customerUsername}</td>
                          <td>{d.washerUsername}</td>
                          <td>{d.status}</td>
                          <td>{d.date}</td>
                          <td>{d.payment}</td>
                          <td>{d.washpack.id}</td>
                        
                          {condition(d.status,d.washerUsername)}
                      </tr>
                  ))
              }
          </tbody>
          </table>
        </div>
    );
}

export default Getorders;