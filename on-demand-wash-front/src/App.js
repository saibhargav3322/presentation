import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './components/Home/Home'
import Nav from './components/Home/Navbar'
import Service from './components/Home/Services'


import Userlogin from './components/user/login'
import Usernav from './components/user/usernav'
import Userreg from './components/user/register'
import Userorder from './components/user/addorder/addorder'
import Usergetorder from './components/user/getorders/Getorders'
import Userreview from './components/user/givereview/givereview'
import Userhome from './components/user/userhome'

import Washerlogin from './components/washer/washerlogin'
import Washernav from './components/washer/washernav'
import Washerreg from './components/washer/washerreg'

import Adminlogin from './components/admin/adminlogin'
import Adminnav from './components/admin/adminnav'


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Nav/>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
