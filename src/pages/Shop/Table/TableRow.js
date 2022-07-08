import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ({ id, name, email, handleDelete }) {
    const { t } = useTranslation();
    return (
        <>
            <tr>
                
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <Button color='danger' onClick={() => handleDelete(id)}>{t('delete')}</Button>
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