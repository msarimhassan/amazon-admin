import React from 'react';
import { Button } from 'reactstrap';

export default function ({ id,name,imgUrl }) {
    const handleUpdate=(id)=>{
    console.log({id});
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    <img src={imgUrl} style={{ width: '80px' }} />
                </td>
                <td>

                    <Button className='mx-2' color='primary' onClick={() => handleUpdate(id)}>
                        Update 
                    </Button>
                </td>
            </tr>
        </>
    );
}
