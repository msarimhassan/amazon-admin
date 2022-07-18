import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';
import LoadingButton from '../components/LoadingButton';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Network, Urls, config } from '../config';
import Routes from '../common/Routes';

const initialValues = {
    email: '',
};
export default function Code() {
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        setLoading(true);
        const response = await Network.post(Urls.getCode, values, (await config()).headers);
        if (response.status == '404') {
            toast.error(response.data.error, { position: 'top-right' });
            setLoading(false);
            return;
        }
        toast.success(response.data.message, { position: 'top-right' });
        setLoading(false);
        navigate(Routes.verifyUser, {
            state: {
                code: response.data.code,
                email: values.email,
            },
        });
    };
    const { values, handleChange, handleSubmit } = useFormik({ initialValues, onSubmit });
    return (
        <div
            className='d-flex align-items-center justify-content-center'
            style={{ height: '90vh' }}
        >
            <div className='border p-5'>
                <h1>Password Assistance</h1>
                <p>Enter the email address associated with your account</p>
                <Label>Email</Label>
                <Input
                    placeholder='Enter your email'
                    value={values.email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                />
                <div className='mt-4 d-flex justify-content-center' onClick={handleSubmit}>
                    <LoadingButton text='send code' loading={loading} />
                </div>
            </div>
        </div>
    );
}
