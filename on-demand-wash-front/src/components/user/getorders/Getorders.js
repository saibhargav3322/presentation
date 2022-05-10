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
            toast("Thanks for ratings😊!");
             setMsg(rating.postmethod(a,b,c));

             

             }

             const statuscheck=(a,b)=>{

              if(a.includes("completed"))
              {
                return(
                  <React.Fragment>
                  <button onClick={()=>{parameters("Worst",0,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'red', color:'white',margin:'0px'}}>worst</button>
                  <button onClick={()=>{parameters("Average",4,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'skyblue', color:'white',margin:'10px'}}>average</button>
                  <button onClick={()=>{parameters("Good",7,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'orange', color:'white',margin:'10px'}}>good</button>
                  <button onClick={()=>{parameters("Best",10,b)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'green', color:'white',margin:'10px'}}>best</button>
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
                  <button onClick={()=>{cancle(a)}} className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'red', color:'white'}}>Cancel</button>
                  <ToastContainer />
                  </React.Fragment>
                )
              }
             }



    return (
        <div>
                      <Navbar/>
                      <br/>
            <h1>Your Orders</h1>

            {/* {msg && <p>{msg}</p>} */}
            {/* <MDBTable bordered borderColor="primary" > */}
            <table class="table table-striped table-responsive-md btn-table" style={{margin:"50px 50px 0px 150px",width:"1300px",border:"2px solid skyblue",borderRadius:'5px'}}>
            <thead>
            <tr>

              <th>Name</th>
              <th>WasherName</th>
              <th>CarName</th>
              <th>Status</th>
              <th>Date</th>
              <th>Payment</th>
              <th>WashPack</th>
              <th>CancelOrder</th>
              <th>Rating</th>
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