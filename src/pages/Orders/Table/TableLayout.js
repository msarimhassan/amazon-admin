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
                    {/* {BodyData.map((product) => {
                        return (
                            <TableRow
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                imgUrl={product.imageUrl}
                                category={product.category.name}
                                deleteProduct={deleteProduct}
                            />
                        );
                    })} */}
                </tbody>
            </Table>
        </>
    );
}
