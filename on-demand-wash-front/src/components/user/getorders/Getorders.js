import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../usernav'
import rating from '../givereview/givereview.service.'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast("thanks for rarings!");
             setMsg(rating.postmethod(a,b,c));

             

             }

             const statuscheck=(a,b)=>{

              if(a.includes("completed"))
              {
                return(
                  <React.Fragment>
                  <button onClick={()=>{parameters("worst",0,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" >worst</button>
                  <button onClick={()=>{parameters("average",4,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect">average</button>
                  <button onClick={()=>{parameters("good",7,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect">good</button>
                  <button onClick={()=>{parameters("best",10,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect">best</button>
                  <ToastContainer />
                  </React.Fragment>
                )
              }
             }

             const cancle=(a)=>{
              const url="http://localhost:9095/user/cancelorder/"+a
               axios.delete(url).then(res=>{
                 console.log(res.data)
               }).catch(err=>{
                 console.log(err)
               })

               toast("Order Canceled")
               setTimeout(function(){
                window.location.reload(1);
             }, 3000);
             }

             const cancleorder=(a,b)=>{

              if(b=="pending")
              {
                return(
                <React.Fragment>
                <button onClick={()=>{cancle(a)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" >Cancel</button>
                <ToastContainer />
                </React.Fragment>
                )
              }
             }



    return (
        <div>
                      <Navbar/>
            <h1>Your orders</h1>

            {/* {msg && <p>{msg}</p>} */}
            {/* <MDBTable bordered borderColor="primary" > */}
            <table class="table table-striped table-responsive-md btn-table">
            <thead>
            <tr>

              <th>name</th>
              <th>washername</th>
              <th>carname</th>
              <th>status</th>
              <th>date</th>
              <th>payment</th>
              <th>washpack</th>
              <th>Cancle Order</th>
              <th>rating</th>
            </tr>
            {/* </MDBTableHead> */}
            </thead>
            {/* <MDBTableBody> */}
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
                          <td>{cancleorder(d.id,d.status)}</td>
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
                          <td>{statuscheck(d.status,d.washerUsername)}</td>
                          

                      </tr>
                  ))
              }
          {/* </MDBTableBody> */}
          </tbody>
          {/* </MDBTable> */}
          </table>
        </div>
    );
}

export default Getorders;