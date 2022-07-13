import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ({ title }) {
    const { t } = useTranslation();
    return (
        <>
            <th>{t(title)}</th>
        </>
    );
}
