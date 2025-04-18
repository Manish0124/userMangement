
'use client'

import { fetchListOfProduct } from "@/actions"
import { useEffect, useState } from "react";

export default function ClientPageExample() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

  async function getListOfProducts() {
     const data = await fetchListOfProduct();
     console.log(data);
     if(data) {
         setProducts(data)
         setLoading(false);
     };
     
    
  } 

  useEffect(()=>{
   getListOfProducts();
  },[])

  if(loading) return <h1>Loading please wait ! </h1>

  return (
    <div>
    <h2>client -side page rendring</h2>
    <ul>

     {
        products && products.length > 0 ? (
            products.map((item)=><li>{item.title}</li>)
        ) : ( <h2>NO products found</h2>)
     }


    

        </ul>
    </div>
  )
}

