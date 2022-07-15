import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function ({ id, name, imgUrl }) {
    const navigate = useNavigate();

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    <img src={imgUrl} style={{ width: '80px' }} />
                </td>
                <td>

                    <Button className='mx-2' color='primary' onClick={() => navigate('/categorypage/addcategory/edit',{state:{id:id}})}>
                        Update 
                    </Button>
                </td>
            </tr>
        </>
    );
}
