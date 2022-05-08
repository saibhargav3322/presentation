import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import Home from './components/Home/Home'
import Nav from './components/Home/Navbar'
import Service from './components/Home/Services'


import Userlogin from './components/user/login'
import Usernav from './components/user/usernav'
import Userreg from './components/user/register'
import Userorder from './components/user/addorder/addorder'
import Usergetorder from './components/user/getorders/Getorders'
import Userreview from './components/user/givereview/givereview.service.'
import Userhome from './components/user/userhome'
import Userupdate from './components/user/profile/profile'

import Washerlogin from './components/washer/washerlogin'
import Washernav from './components/washer/washernav'
import Washerreg from './components/washer/washerreg'
import Washerhome from './components/washer/washerhome'
import Washerorders from './components/washer/getorders/getorders'
import Washerrating from './components/washer/ratings/ratings'
import Washerprofile from './components/washer/profile/profile'

import Adminlogin from './components/admin/adminlogin'
import Adminnav from './components/admin/adminnav'
import Adminhome from './components/admin/adminhome'
import Adminratings from './components/admin/ratings/ratings'
import Adminpacks from './components/admin/washPacks/washpacks'
import Adminaddpack from './components/admin/washPacks/addpack'
import Admindeleteuser from './components/admin/customers/customers'
import Adminwasher from './components/admin/washer/washer'
import Adminorders from './components/admin/orders/orders'


function App() {
  return (
    <div className="App">

     <BrowserRouter>
     {/* <Nav/> */}
        <Routes>
          <Route path="/" element={<Home/>} />        
          <Route path="/userlogin" element={<Userlogin/>} /> 
          <Route path="/usernav" element={<Usernav/>} /> 
          <Route path="/userreg" element={<Userreg/>} /> 
          <Route path="/washerlogin/*" element={<Washerlogin/>} /> 
          <Route path="/washernav" element={<Washernav/>} /> 
          <Route path="/washerreg" element={<Washerreg/>} /> 
          <Route path="/adminnav" element={<Adminnav/>} /> 
          <Route path="/adminlogin" element={<Adminlogin/>} />  
          <Route path="/addorder" element={<Userorder/>} /> 
          <Route path="/getorders" element={<Usergetorder/>} /> 
          <Route path="/givereview" element={<Userreview/>} /> 
          <Route path="/Services" element={<Service/>} /> 
          <Route path="/userhome" element={<Userhome/>} /> 
          <Route path="/userhome" element={<Userhome/>} /> 
          <Route path="/userupdate" element={<Userupdate/>} /> 
          <Route path="/washerhome" element={<Washerhome/>} /> 
          <Route path="/washerorders" element={<Washerorders/>} /> 
          <Route path="/washerratings" element={<Washerrating/>} /> 
          <Route path="/washerprofile" element={<Washerprofile/>} /> 
          <Route path="/adminhome" element={<Adminhome/>} /> 
          <Route path="/adminrating" element={<Adminratings/>} /> 
          <Route path="/adminpacks" element={<Adminpacks/>} /> 
          <Route path="/adminaddpacks" element={<Adminaddpack/>} /> 
          <Route path="/adminuser" element={<Admindeleteuser/>} /> 
          <Route path="/adminwasher" element={<Adminwasher/>} /> 
          <Route path="/adminorders" element={<Adminorders/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
