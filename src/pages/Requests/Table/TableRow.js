import React from 'react';
import { Button } from 'reactstrap';


export default function ({id,name,email}) {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <Button className='mx-2' color='danger'>
                        Delete
                    </Button>
                    |
                    <Button
                        className='mx-2'
                        color='primary'
                    >
                        Approve
                    </Button>
                </td>
            </tr>
        </>
    );
}
