import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Ordernav from './ordersnav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Getorders(props) {

    const [data,setData]= useState([])

    const style={
        backgroundColor:"green"
    }

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("washertoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9096/washer/allorders"

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

             const acceptedby=(a)=>{
                // const mongoId = new ObjectID(a.toString(16)+1e16)
               

               // console.log(a)
                 axios.get("http://localhost:9096/washer/acceptanorder/"+a).then(res=>{
                     console.log(res.data)
                     if(res.data==="Order has been canceled")
                     {
                        return ordercanceled();
                     }
                 }).catch(err=>{
                     console.log(err)
                 })
                 setTimeout(function(){
                    window.location.reload(1);
                 }, 3000);
             }

             const ordercanceled=()=>{
                 toast("Order has been canceled")
                 setTimeout(function(){
                    window.location.reload(1);
                 }, 3000);
             }

             const completedby=(a)=>{
                axios.get("http://localhost:9096/washer/completeanorder/"+a).then(res=>{
                    console.log(res.data);
                }).catch(err=>{
                    console.log(err)
                    
                })
                window.location.reload()
            }


             const statuscheck=(a,b)=>{

                if(a==="pending")
                {
                    return(
                        <React.Fragment>
                        <button style={style} className="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={()=>acceptedby(b)}>accept</button>
                    <ToastContainer></ToastContainer>
                    </React.Fragment>
                    )
                    
                }
                if(a.includes("accepted by"))
                {
                    return <button style={style} className="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={()=>completedby(b)}>complete</button>
                }
             }
    return (
        <div>
 <Ordernav/>

<h1>Your Pending Orders</h1>

<table class="table table-striped table-responsive-md btn-table">
<thead className="thead-dark">
<tr>


<th>CustomerName</th>
<th>carname</th>
<th>status</th>
<th>date</th>
<th>payment</th>
<th>washpack id</th>
<th>washpack name</th>
<th></th>
</tr>
</thead>
<tbody>

{    data.filter(d=>{
        if(d.status ==="accepted by "+d.washerUsername)
        {
            return d;
        }
    }).map(d=>(
        <tr key={d.id}>
            <td>{d.customerUsername}</td>
            <td>{d.carModel}</td>
            <td>{d.status}</td>
            <td>{d.date}</td>
            <td>{d.payment}</td>
            <td>{d.washpack.id}</td>
            <td>{d.washpack.name}</td>
            {statuscheck(d.status,d.id)}
        </tr>
    ))
}
</tbody>
</table>

</div>
    );
}

export default Getorders;