import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { useTranslation } from 'react-i18next';
export default function TableLayout({ HeaderData, BodyData}) {
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
                    {BodyData.map((request) => {
                        return (
                            <TableRow
                                key={request._id}
                                id={request._id}
                                name={request.name}
                               email={request.email}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
