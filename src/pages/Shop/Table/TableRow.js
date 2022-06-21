import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ({ id,name,email,handleDelete }) {
    return (
        <>
            <tr>
                
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Button color='danger' onClick={()=>handleDelete(id)}>Delete</Button>
                </td>
            </tr>
        </>
    );
}

  {
      /* <Link to={link + '/edit'}>
                        <Button
                            color='success'
                            onClick={() => {
                                console.log(id);
                            }}
                        >
                            Edit
                        </Button>
                    </Link>{' '}
                    <Button
                        color='danger'
                        onClick={() => {
                            console.log(id);
                        }}
                    >
                        Delete
                    </Button> */
  }