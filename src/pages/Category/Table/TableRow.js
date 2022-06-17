import React from 'react';
import { Button } from 'reactstrap';

export default function ({ id,name,imgUrl }) {
    const handleUpdate=(id)=>{
    console.log({id});
    }

    const url = 'https://amazon-clone-12345.herokuapp.com/';
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    <img src={url + imgUrl} style={{ width: '80px' }} />
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