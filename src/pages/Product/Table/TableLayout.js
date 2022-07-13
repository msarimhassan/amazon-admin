import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import i18next from 'i18next';
export default function TableLayout({ HeaderData, BodyData, deleteProduct }) {
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
                    {BodyData.map((product) => {
                        return (
                            <TableRow
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                imgUrl={product.imageUrl}
                                category={product.category}
                                deleteProduct={deleteProduct}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
