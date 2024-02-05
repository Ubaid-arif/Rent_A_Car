import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CarList from "./component/Screen/CarList";
import CreateCar from "./component/Screen/CreateCar";
import Profile from "./component/Screen/profile";

const App = () => {
  return (
    <>
   
     <Router>
       
         <Routes>
           <Route path="/" element={<Profile/>} />
           <Route path="/list" element={<CarList/>} />
           <Route path="/create" element={<CreateCar/>} />
      
         </Routes>
      
     </Router>
    </>
  );
};

export default App;


