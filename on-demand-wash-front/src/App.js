import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route,Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import Home from './components/Home/Home'
import Nav from './components/Home/Navbar'
import Service from './components/Home/Services'
import Errorpage from './components/Home/errorpage';


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
import Washerorders from './components/washer/orders/getorders'
import Washerrating from './components/washer/ratings/ratings'
import Washerprofile from './components/washer/profile/profile'
import Wordernav from './components/washer/orders/ordersnav'
import Washerpending from './components/washer/orders/pendingorders'
import Washeraccepted from './components/washer/orders/acceptedorders'
import Washercompleted from './components/washer/orders/completedorders'


import Adminlogin from './components/admin/adminlogin'
import Adminnav from './components/admin/adminnav'
import Adminhome from './components/admin/adminhome'
import Adminratings from './components/admin/ratings/ratings'
import Adminpacks from './components/admin/washPacks/washpacks'
import Adminaddpack from './components/admin/washPacks/addpack'
import Admindeleteuser from './components/admin/customers/customers'
import Adminwasher from './components/admin/washer/washer'
import Adminorders from './components/admin/orders/orders'
import Adminordernav from './components/admin/orders/ordersnav'
import Adminpending from './components/admin/orders/pendinforders'
import Adminaccepted from './components/admin/orders/acceptedorders'
import Admincompleted from './components/admin/orders/completedorders'
import Admincanceled from './components/admin/orders/cancledorders'
import Adminpacknav from './components/admin/washPacks/washpacknav'


function App() {
  return (
    <div className="App">

     <BrowserRouter>
     {/* <Nav/> */}
        <Routes>
          <Route path='*' element={<Errorpage/>}></Route>
          <Route path="/" element={<Home/>} />  
          <Route path="/Services" element={<Service/>} />     



          <Route path="/washerlogin/*" element={<Washerlogin/>} /> 
          <Route path="/washernav" element={<Washernav/>} /> 
          <Route path="/washerreg" element={<Washerreg/>} /> 
          <Route path="/washerhome" element={<Washerhome/>} /> 
          <Route path="/washerorders" element={<Washerorders/>} /> 
          <Route path="/washerratings" element={<Washerrating/>} /> 
          <Route path="/washerprofile" element={<Washerprofile/>} /> 
          <Route path="/washerordernav" element={<Wordernav/>} /> 
          <Route path="/washerorderpending" element={<Washerpending/>} /> 
          <Route path="/washerorderaccepted" element={<Washeraccepted/>} /> 
          <Route path="/washerordercompleted" element={<Washercompleted/>} /> 




          <Route path="/adminnav" element={<Adminnav/>} /> 
          <Route path="/adminlogin" element={<Adminlogin/>} />  
          <Route path="/adminhome" element={<Adminhome/>} /> 
          <Route path="/adminrating" element={<Adminratings/>} /> 
          <Route path="/adminpacks" element={<Adminpacks/>} /> 
          <Route path="/adminaddpacks" element={<Adminaddpack/>} /> 
          <Route path="/adminuser" element={<Admindeleteuser/>} /> 
          <Route path="/adminwasher" element={<Adminwasher/>} /> 
          <Route path="/adminorders" element={<Adminorders/>} /> 
          <Route path="/adminordersnav" element={<Adminordernav/>} /> 
          <Route path="/adminpending" element={<Adminpending/>} /> 
          <Route path="/adminaccepted" element={<Adminaccepted/>} />
          <Route path="/admincompleted" element={<Admincompleted/>} />
          <Route path="/admincancled" element={<Admincanceled/>} />
          <Route path="/adminpacksnav" element={<Adminpacknav/>} />





          <Route path="/userlogin" element={<Userlogin/>} /> 
          <Route path="/usernav" element={<Usernav/>} /> 
          <Route path="/userreg" element={<Userreg/>} /> 
          <Route path="/addorder" element={<Userorder/>} /> 
          <Route path="/getorders" element={<Usergetorder/>} /> 
          <Route path="/givereview" element={<Userreview/>} /> 
          <Route path="/userhome" element={<Userhome/>} /> 
          <Route path="/userhome" element={<Userhome/>} /> 
          <Route path="/userupdate" element={<Userupdate/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
