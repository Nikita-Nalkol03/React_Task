
import { Routes, Route, Router } from "react-router-dom";

import Mobile from "./Mobile";
import Kinds from "./Kinds";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <>
    <center>
      <h1>Routing App</h1>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />}/>

        
        <Route
          path="/mobile"
          element={<Mobile />}
        />

        <Route
          path="/kinds"
          element={<Kinds />}
        />
      </Routes>
      </center>
    </>
  );
};

export default App;

