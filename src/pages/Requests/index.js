import React,{useEffect} from 'react';
import { Network,Urls,config } from '../../config';

export default function RequestTable() {

  useEffect(()=>{
     getRequests()
  },[])

  const getRequests=async()=>{
      const response=await Network.get(Urls.getRequests,(await config()).headers);
      console.log(response.data)
  }
  return (
    <div>RequestTable</div>
  )
}
