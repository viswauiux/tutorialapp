import React from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
