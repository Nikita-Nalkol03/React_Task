
import { Routes, Route, Router } from "react-router-dom";

import Mobile from "./Mobile";
import Kinds from "./Kinds";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Message from "./Message";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <>
    <center>
      <h1>Routing App</h1>
      <Navbar />

      <Routes>
<Route path="/Home" element={<Home />}/>
<Route path="/mobile" element={<Mobile />}/>
<Route path="/kinds" element={<Kinds />}/>
<Route path="/Login" element={<Login/>}/>

<Route element={<ProtectedRoute/>}>

<Route path="dashboard" element={<Dashboard/>}/>
<Route path="profile" element={<Profile/>}>
<Route path="message" element={<Message/>}/>
</Route>

</Route>
      </Routes>
      </center>
    </>
  );
};

export default App;

