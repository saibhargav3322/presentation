import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Review from '../givereview/givereview.service.'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../usernav'
import rating from '../givereview/givereview.service.'

function Getorders(props) {

    const [data,setData]= useState([])
    const navigate=useNavigate();
    const [msg,setMsg]=useState()

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

          useEffect(() => {
            get();
             }, []);

            const parameters=(a,b,c)=>{

            //  rating.setdata(a,b,c);
             setMsg(rating.postmethod(a,b,c));


             }

             const statuscheck=(a,b)=>{

              if(a==="completed")
              {
                return(
                  <React.Fragment>
                  <button onClick={()=>{parameters("worst",0,b)}}>worst</button>
                  <button onClick={()=>{parameters("average",4,b)}}>average</button>
                  <button onClick={()=>{parameters("good",7,b)}}>good</button>
                  <button onClick={()=>{parameters("best",10,b)}}>best</button>
                  </React.Fragment>
                )
              }
             }



    return (
        <div>
                      <Navbar/>
            <h1>Your orders</h1>

            {msg && <p>{msg}</p>}

            <table>
          <thead className="thead-dark">
            <tr>

              <th>name</th>
              <th>washername</th>
              <th>carname</th>
              <th>status</th>
              <th>date</th>
              <th>payment</th>
              <th>washpack</th>
              <th>rating</th>
            </tr>
          </thead>
          <tbody>

              {
                  data.map(d=>(
                      <tr key={d.id}>

                          <td>{d.customerUsername}</td>
                          <td>{d.washerUsername}</td>
                          <td>{d.carModel}</td>
                          <td>{d.status}</td>
                          <td>{d.date}</td>
                          <td>{d.payment}</td>
                          <td>{d.washpack.id}</td>
                          {/* {
                            if(d.status === "completed")
                            {
                              <React.Fragment>
                              <button onClick={()=>{parameters("worst",0,d.washerUsername)}}>worst</button>
                              <button onClick={()=>{parameters("average",4,d.washerUsername)}}>average</button>
                              <button onClick={()=>{parameters("good",7,d.washerUsername)}}>good</button>
                              <button onClick={()=>{parameters("best",10,d.washerUsername)}}>best</button>
                              </React.Fragment>
                            }
                          } */}
                          {statuscheck(d.status,d.washerUsername)}

                      </tr>
                  ))
              }
          </tbody>
          </table>
        </div>
    );
}

export default Getorders;