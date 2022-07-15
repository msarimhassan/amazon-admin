import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ({ id, name, email, handleDelete }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <Button color='danger' onClick={() => handleDelete(id)}>
                        {t('delete')}
                    </Button>
                    {'  '}
                    <Button
                        color='primary'
                        onClick={() => navigate('/shoppage/addshop/edit', { state: { id: id } })}
                    >
                        {t('update')}
                    </Button>
                </td>
            </tr>
        </>
    );
}
