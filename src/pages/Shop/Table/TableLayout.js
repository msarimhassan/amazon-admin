import React from 'react';
import { Table } from 'reactstrap';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
export default function TableLayout({ HeaderData, BodyData }) {

    console.log(BodyData);
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
                    {BodyData.map((shop) => {
                        return (
                            <TableRow
                                key={shop._id}
                                id={shop._id}
                                name={shop.name}
                                email={shop.email}
                                // link={product.link}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
