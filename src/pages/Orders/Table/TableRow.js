import React from 'react';
import { Button } from 'reactstrap';
import { Network, Urls, config } from '../../../config';
import { toast } from 'react-toastify';
export default function ({id,name,quantity}) {

    const handleStatus=async(id) => {
        const response = await Network.put(Urls.updateOrder + id, {}, (await config()).headers);
        console.log(response);
        if (!response.ok)
        {
            return toast.error(response.data.error, { position: 'top-right' });
        }
        toast.success(response.data.message, { position: "top-right" });
    }
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                   {quantity}
                </td>
                <td>
                    <Button className='mx-2' color='primary' onClick={()=>handleStatus(id)} >
                        Delivered
                    </Button>
                  
                </td>
            </tr>
        </>
    );
}
