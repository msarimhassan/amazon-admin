import React from 'react';
import { Button,Badge } from 'reactstrap';
import { Network, Urls, config } from '../../../config';
import { toast } from 'react-toastify';
export default function ({id,name,quantity,status,orderId}) {

    const handleStatus=async(id) => {
        const response = await Network.put(Urls.updateOrder + orderId, {}, (await config()).headers);
        if (!response.ok)
        {
            return toast.error(response.data.error, { position: 'top-right' });
        }
        window.location.reload();
        toast.success(response.data.message, { position: "top-right" });
    }
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>
                    <Badge color={status==='pending'?'danger':'success'}>{status}</Badge>
                </td>
                <td>
                    <Button className='mx-2' color='primary' onClick={() => handleStatus(orderId)}>
                        Delivered
                    </Button>
                </td>
            </tr>
        </>
    );
}
