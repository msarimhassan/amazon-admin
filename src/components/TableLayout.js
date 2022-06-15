import React from 'react';
import { Table,Container } from 'reactstrap';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
export default function TableLayout({HeaderData, BodyData}) {
    return (
        <>
            <Table bordered hover  className='mt-4 table-responsive'>
                <thead>
                    <tr>
                       {HeaderData.map((title,key)=>{
                         return <TableHeader key={key}  title={title}/>
                       })}
                    </tr>
                </thead>
                <tbody>
                {BodyData.map((product)=>{
                  return (<TableRow key={product.id} id={product.id} name={product.name} category={product.category} link={product.link}/>)
                }) }
                </tbody>
            </Table>
            </>
        
    );
}
