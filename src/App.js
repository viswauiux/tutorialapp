import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
 

function App() {
  return (
    <>
    
        <Header />
        <Outlet></Outlet>
        <Footer></Footer>
  
    </>
  );
}

export default App;
