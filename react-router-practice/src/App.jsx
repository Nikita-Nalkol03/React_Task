import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Mobiles from "./Mobiles";
import NavBar from "./NavBar";

function App() {
  return (
    <center>

      <h1>welcome to my routing app</h1>
        
    <BrowserRouter>
     <NavBar/>
      <Routes>
        {/* <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route> */}
        {/* </Route> */}
{/* 
        <Route path="*" element={<Login />} /> */}
     
        <Route path="/mobiles" element={<Mobiles/>}/>

      </Routes>
    </BrowserRouter>
    </center>
  );
}

export default App;