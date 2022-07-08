import React from 'react';
import { Table } from 'reactstrap';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { useTranslation } from 'react-i18next';
export default function TableLayout({ HeaderData, BodyData,handleDelete }) {
     
    const { t } = useTranslation();
    return (
        <>
            <Table bordered hover className='mt-4 table-responsive'>
                <thead>
                    <tr>
                        {HeaderData.map((title, key) => {
                            return <TableHeader key={key} title={t(title)} />;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {BodyData.map((shop) => {
                        return (
                            <TableRow
                                key={shop._id}
                                id={shop._id}
                                name={shop.name}
                                email={shop.email}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
