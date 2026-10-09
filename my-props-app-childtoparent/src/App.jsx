import { useState } from "react";
import Employee from "./industrylevel/Employee";
import Show from "./industrylevel/Show";
import Sshow from "./industrylevel/Sshow";
import Student from "./industrylevel/Student";
import Ptable from "./industrylevel/Ptable";
import Product from "./industrylevel/Product";
import Ctable from "./industrylevel/Ctable";
import Customer from "./industrylevel/Customer";
import Course from "./industrylevel/Course";
import C2table from "./industrylevel/C2table";
import Patient from "./industrylevel/Patient";
import Patienttable from "./industrylevel/Patienttable";
import Book from "./industrylevel/Book";
import Booktable from "./industrylevel/Btable";
import Teacher from "./industrylevel/Teacher";
import Teachertable from "./industrylevel/Teachertable";
import Vehicle from "./industrylevel/Vehical";
import Vehicletable from "./industrylevel/Vehicletable";
import Order from "./industrylevel/Order";
import Ordertable from "./industrylevel/Ordertable";
import Member from "./industrylevel/Member";
import Membertable from "./industrylevel/Membertable";

const App=()=>{
  const [ref,setRef]=useState(0);

  return (
    <>
    <center>
      <h1>Student form using child to parent</h1>

      <Employee refresh={(e)=>setRef(ref+e)}/><br/>

      <Show  doRefresh={ref}/>
      ====================================================================================================================
      <Student refresh={(e)=>setRef(ref+e)}/>
      <Sshow doRefresh={ref}/>
      ====================================================================================================================
      <Product refresh={(e)=>setRef(ref+e)}/><br/>
      <Ptable doRefresh={ref}/>
      =======================================================================================================
      <Customer refresh={(e)=>setRef(ref+e)}/><br/>
      <Ctable doRefresh={ref}/>
      ======================================================================================================
      <Course refresh={(e)=>setRef(ref+e)}/><br/>
      <C2table doRefresh={ref}/>
      =====================================================================================================================================
      <Patient refresh={(e)=>setRef(ref+e)}/><br/>
      <Patienttable doRefresh={ref}/>
    </center>
    ======================================================================================================================<Book refresh={(e)=>setRef(ref+e)}/><br/>
    <Booktable doRefresh={ref}/>
    ===================================================================================================================
    <Teacher refresh={(e)=>setRef(ref+e)}/><br/>
    <Teachertable doRefresh={ref}/>
    ===================================================================================================================
    <Vehicle refresh={(e)=>setRef(ref+e)}/><br/>
    <Vehicletable doRefresh={ref}/>
    ====================================================================================================================
    <Order refresh={(e)=>setRef(ref+e)}/><br/>
    <Ordertable doRefresh={ref}/>
    ====================================================================================================================
    <Member refresh={(e)=>setRef(ref+e)}/><br/>
    <Membertable doRefresh={ref}/>
    ====================================================================================================================

    </>
  )
};
export default App;