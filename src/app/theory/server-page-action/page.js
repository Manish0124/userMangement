import { fetchListOfProduct } from '@/actions';
import React from 'react'



// async function fetchListOfProduct() {
//     const res = await fetch(`https://dummyjson.com/products`);
//     const data = await res.json();
//     return data?.products;
// }

   export default async function ServerActionExample() {


    //  async function fetchListOfProduct() {
    //      'use server'
    //      const res = await fetch(`https://dummyjson.com/products`);
    //          const data = await res.json();
    //          return data?.products;

    //  }



    const products = await fetchListOfProduct();
    console.log(products);

  return (
   

    <div>
        <h2>server action example --- server components</h2>
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
