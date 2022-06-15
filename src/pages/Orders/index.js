import React from 'react'
import TableLayout from '../../components/TableLayout'
import { OrderData } from '../../common/OrderData';

export default function OrderPage() {
    const HeaderData=['#','Order Name','Type','Action'];
    
  return (
    <div>
        <h1>Orders</h1>
        <TableLayout HeaderData={HeaderData} BodyData={OrderData} />
    </div>
  )
}
