import React from 'react';
import { Button } from 'reactstrap';
import {Network,Urls,config} from '../../../config'

export default function ({id,name,email}) {
    const handleApprove=async(id)=>{
        const response=await Network.put(Urls.approveRequest+id,{},(await config()).headers);
        console.log(response);
    }
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
                        onClick={()=>handleApprove(id)}
                    >
                        Approve
                    </Button>
                </td>
            </tr>
        </>
    );
}
