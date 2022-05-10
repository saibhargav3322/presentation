import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Washnav from './washpacknav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './washpack.css'

function Washpacks(props) {
    const [data,setData]=useState([])
    const [pack,setPack]=useState({})
    const [status,setStatus]=useState()
    const[packdata,setPackdata]=useState({

        id:"",
        cost:"",
        name:"",
        description:""
    })

    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("admintoken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });

        const url="http://localhost:9094/admin/allpacks"
        const baseurl="http://localhost:9098/washerPack/getpack/"
        const packurl="http://localhost:9098/washerPack/updatepack"

        function getpack(a){
            axios.get(baseurl+a).then(res=>{
                
                setPack(res.data);
                console.log(pack)
            }).catch(err=>{
                console.log(err)
            })
        }

        const update=(a)=>{

            getpack(a);
            setStatus(1)
        }

        const table=()=>{
            if(status)
            {
                return(
                    <>
                    <br/><br/>
                    <h2>Enter Details to Update</h2>
                    <form onSubmit={submitpack} className='register'>
                        <div className='form-group'>
                <label>Id: </label>
                <input onChange={(e)=>handle(e)} id="id" value={pack.id} placeholder='id' type="number" className='form-control' />
                </div>
                <div className='form-group'>
                <label>Name: </label>
                <input onChange={(e)=>handle(e)} id="name" value={pack.name} placeholder='name' type="text" className='form-control'/>
               </div>
               <div className='form-group'>
                <label>Cost: </label>
                <input onChange={(e)=>handle(e)} id="cost" value={pack.cost} placeholder='cost' type="number" className='form-control'/>
               </div>
               <div className='form-group'>
                <label>Description: </label>
                <input onChange={(e)=>handle(e)} id="description" value={pack.description} placeholder='description' type="text" className='form-control'/>
                </div>
                <button  className='btn btn-primary btn-block'>Update</button>
                <ToastContainer></ToastContainer>
                </form>
                    </>
                 )
            }
            else{
                return null;
            }
        }

        const submitpack=(e)=>{

            e.preventDefault();
           const id=pack.id;
           const name=pack.name;
           const description=pack.description;
           const cost=pack.cost;
           console.log(pack.id)
           console.log(pack.name)
           console.log(pack.description)
           console.log(pack.cost)
           console.log(id)
           console.log(name)
           console.log(description)
           console.log(cost)
            axios.put(packurl,null,{params:{id,name,description,cost}}).then(res=>{
                console.log(res.data)
            })

            toast("Pack updated successfully!")
            setTimeout(function(){
                window.location.reload(1);
             }, 3000);
        }


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

             function handle(e){
                const newdata={...pack}
                newdata[e.target.id]=e.target.value
                setPack(newdata)
            }
    return (
<div>
<Washnav/>
 <br/>
<h1>All Packs</h1>
{/* <p>Enter washer username to search:   <input type="text" placeholder="username" onChange={e=>setWasherUsername(e.target.value)} className='reservatioinsearch' />

</p> */}
<table class="table table-striped table-responsive-md btn-table" style={{margin:"50px 50px 0px 190px",width:"1200px",border:"2px solid skyblue",borderRadius:'5px'}}>
<thead className="thead-dark">
<tr>

<th>Id</th>
<th>Title</th>
<th>Description</th>
<th>Cost</th>
<th></th>
<th></th>
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
            <td><button onClick={()=>update(d.id)}  className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'skyblue', color:'white'}}>Update</button></td>
            <td><button onClick={()=>deletepack(d.id)}  className="btn btn-outline-primary btn-sm m-0 waves-effect" style={{backgroundColor:'red', color:'white'}}>Delete</button></td>
        </tr>
    ))
}
</tbody>
</table>
<ToastContainer></ToastContainer>

{/* {
   data.map(d=>(
        <div className='packdata'>

            <p>id:{d.id}</p>
            <p>name:{d.name}</p>
            <p>description:{d.description}</p>
            <p>cost:{d.cost}</p>
            <button onClick={()=>update(d.id)}>Update</button>
            <button onClick={()=>deletepack(d.id)}>Delete</button>
        </div>
    ))
} */}


{table()}
</div>
    );
}

export default Washpacks;