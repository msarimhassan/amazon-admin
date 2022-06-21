import React,{useEffect,useState} from 'react';
import { Network,Urls,config } from '../../config';
import TableLayout from './Table/TableLayout';
import Loader from '../../assets/animations';

const HeaderData=['Name','Email','Action'];
export default function RequestTable() {
const [requests,setRequests]=useState([]);
const [loading,setLoading]=useState(true);
  useEffect(()=>{
     getRequests()
  },[])

  const getRequests=async()=>{
    setLoading(true);
      const response=await Network.get(Urls.getRequests,(await config()).headers);
      setRequests(response.data.updateRequests);
      setLoading(false);
  }
  return (
    <>
  {loading?<Loader/>:<TableLayout HeaderData={HeaderData} BodyData={requests}/>}
    </>
  )
}
