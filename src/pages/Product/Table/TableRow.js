import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';

export default function ({ id, name, category, deleteProduct, imgUrl }) {
    let navigate = useNavigate();
    console.log(category);
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>
                    <img src={imgUrl} style={{ width: '100px' }} />
                </td>
                <td>
                    <Button className='mx-2' color='danger' onClick={() => deleteProduct(id)}>
                        Delete
                    </Button>{' '}
                    |
                    <Button
                        className='mx-2'
                        color='primary'
                        onClick={() =>
                            navigate('/productpage/addproduct/edit', {
                                state: { id: id },  
                            })
                        }
                    >
                        Update
                    </Button>
                </td>
            </tr>
        </>
    );
}
