import { useState } from "react";
import Product from "./Product";
import ShowProduct from "./ShowProduct";

const App=()=>{

  const [ref,setRef]=useState(0);
  const [edit,setEdit]=useState(null);

  return (
    <>
    <Product ref={(e)=>{setRef(ref+e), setEdit(null)}} getEdit={edit}/>
      <ShowProduct ref={ref} handleEdit={(p)=>setEdit(p)}/>
    </>
  )
};
export default App;