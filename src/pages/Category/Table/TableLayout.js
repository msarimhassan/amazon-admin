import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { useTranslation } from 'react-i18next';
export default function TableLayout({ HeaderData, BodyData }) {

    const {t} = useTranslation();
    console.log(BodyData);
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
                    {BodyData.map((category) => {
                        return (
                            <TableRow
                                key={category._id}
                                id={category._id}
                                name={category.name}
                                imgUrl={category.imageUrl}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}
