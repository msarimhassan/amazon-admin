import React,{useEffect,useState} from 'react'
import TableLayout from './Table/TableLayout';
import {Network,Urls,config} from '../../config'


export default function OrderPage() {
    const HeaderData=['#','Order Name','Type','Action'];
    const[order,setOrders]=useState([]);

    // useEffect(()=>{
    //   getOrders();
    // },[])

    // const getOrders=async()=>{
    //   const response=await Network.get(Urls.getOrders,(await config()).headers);
    // }
    
  return (
    <div>
        <h1>Orders</h1>
        <TableLayout HeaderData={HeaderData} BodyData={order} />
    </div>
  )
}
