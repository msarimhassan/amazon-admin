import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
export default function TableLayout({ HeaderData, BodyData}) {
    
    return (
        <>
            <Table bordered hover className='mt-4 table-responsive'>
                <thead>
                    <tr>
                        {HeaderData.map((title, key) => {
                            return <TableHeader key={key} title={title} />;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {BodyData?.map((order) => {
                        return (
                            <TableRow
                                key={order._id}
                                id={order._id}
                                orderId={order.orderId}
                                name={order.productName}
                                quantity={order.quantity}
                                status={order.orderStatus}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
