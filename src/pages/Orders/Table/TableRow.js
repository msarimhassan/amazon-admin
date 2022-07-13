import React from 'react';
import { Button } from 'reactstrap';

export default function ({id,name,quantity}) {

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                   {quantity}
                </td>
                <td>
                    <Button className='mx-2' color='primary' >
                        Delivered
                    </Button>
                  
                </td>
            </tr>
        </>
    );
}
