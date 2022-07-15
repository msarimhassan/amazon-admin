import React from 'react';
import { Button } from 'reactstrap';
import { Network, Urls, config } from '../../../config'
import { useTranslation } from 'react-i18next';

export default function ({ id, name, email,handleApprove,deleteRequest }) {
    const { t } = useTranslation();

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <Button className='mx-2' color='danger' onClick={()=>deleteRequest(id)}>
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
