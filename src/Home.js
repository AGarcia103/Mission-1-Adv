import React from "react";
import Navbar from "./HomeNavBar";
import HomeContent from "./HomeContent";
import { FindACar } from "./components/findACar/FindACar";
//import Footer from "./HomeFooter";


export default function Home() {
  return (
    
      <div>
        <Navbar />
        <FindACar/>
        <HomeContent/>
       {/* <Footer/>*/}
      </div>
  );
}
