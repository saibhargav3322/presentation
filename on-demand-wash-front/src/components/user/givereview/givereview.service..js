import React,{Component, useState} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';
import Navbar from '../usernav'

class Givereview {

//     const[data,setData]=useState({

//         comment:"",
//         washer_username:"",
//         rating:""
//     })
//     const navigate =  useNavigate();



//     axios.interceptors.request.use(
//         config => {
//         config.headers.authorization = "Bearer " + localStorage.getItem("token");
//         return config;
//         },
//         error => {
//         return Promise.reject(error);
//         });
//         const url="http://localhost:9095/user/addrating"
    

        

//       function   submit(e){
//             const  comment=data.comment
//             const washer_username=data.washer_username
//             const rating=data.rating
             
//          e.preventDefault();
//          axios.post(url,null,{params:{comment,washer_username,rating}} )
//              .then(res=>{
//                  console.log(res.data);
//                  alert("rating added successfully");
//                  navigate("/usernav")
//              },
//             );
         
//      }

//      function handle(e){
//         const newdata={...data}
//         newdata[e.target.id]=e.target.value
//         setData(newdata)
//     }


//     return (

//         <React.Fragment> 
//             <Navbar></Navbar>
//         <h1>Enter Order Details</h1>
//         <div  > 
//             <form onSubmit={(e)=>submit(e)} className='addform'>
                
//                 <input onChange={(e)=>handle(e)} id="comment" value={data.comment} placeholder='comment' type="text"  /><br/><br/>

//                 <input onChange={(e)=>handle(e)} id="rating" value={data.rating} placeholder='rating' type="number"/><br/><br/>
//                 <input onChange={(e)=>handle(e)} id="washer_username" value={data.washer_username} placeholder='washer_username' type="text"/><br/><br/>

//                 <button>submit</button>
//             </form>
//         </div>
//     </React.Fragment>
//     )
// constructor()
// {
//     // let comment
//     // let rating
//     // let washerusername

// }

//    setdata=(comment,rating,washerusername)=>{
//        this.comment=comment;
//        this.rating=rating;
//       this.washerusername=washerusername;
//    }

   postmethod(gotcomment,gotrating,gotwasherusername){
           axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("token");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
        const url="http://localhost:9095/user/addrating"

        const  comment=gotcomment
                    const washer_username=gotwasherusername
                    const rating=gotrating
                     
                
              axios.post(url,null,{params:{comment,washer_username,rating}} )
                     .then(res=>{
                         console.log(res.data);
                     },
                    );

                     return "Thankyou for valuable rating"
   }


 }


export default new Givereview();