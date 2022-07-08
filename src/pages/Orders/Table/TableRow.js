import React from 'react';
import { Button } from 'reactstrap';

export default function () {

    return (
        <>
            <tr>
                <td>dummy</td>
                <td>dummy</td>
                <td>
                   dummy
                </td>
                <td>
                    <Button className='mx-2' color='danger' >
                        Delete
                    </Button>
                    |
                    <Button
                        className='mx-2'
                        color='primary'>
                        Update
                    </Button>
                </td>
            </tr>
        </>
    );
}
