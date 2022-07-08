import React from 'react';
import { Button } from 'reactstrap';
import { Network, Urls, config } from '../../../config'
import { useTranslation } from 'react-i18next';

export default function ({ id, name, email }) {
    const { t } = useTranslation();
    const handleApprove=async(id)=>{
        const response=await Network.put(Urls.approveRequest+id,{},(await config()).headers);
        
    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <Button className='mx-2' color='danger'>
                        {t('delete')}
                    </Button>
                    |
                    <Button
                        className='mx-2'
                        color='primary'
                        onClick={()=>handleApprove(id)}
                    >
                        {t('approve')}
                    </Button>
                </td>
            </tr>
        </>
    );
}
