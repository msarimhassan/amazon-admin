import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Label, Input, Button } from 'reactstrap';
import { Urls, config, Network } from '../../config';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
const initialValues = {
    name: '',
    email: '',
    password: '',
};

export default function ShopForm() {
    const [roles, setRoles] = useState();
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    const [mode, setMode] = useState([]);
    const onSubmit = async (values) => {
        console.log(values);
        const obj = { ...values, role: mode.value };
        console.log(obj);
        const response = await Network.post(Urls.createShop, obj, (await config()).headers);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });
    useEffect(() => {
        getRoles();
    }, []);

    const getRoles = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getRoles, (await config()).headers);
        setLoading(false);

        const newarray = response.data.roles.map((element) => {
            return {
                label: element.name,
                value: element._id,
            };
        });
        setRoles(newarray);
    };

    return (
        <Form>
            <Row>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='ShopName'>{t('shop-name') }</Label>
                    <Input
                        type='text'
                        placeholder='Shop Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                    <Label for='ShopName'>{t('email') }</Label>
                    <Input
                        type='email'
                        placeholder='Enter Email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <Row className='my-4'>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='ShopName'>{t('password')}</Label>
                    <Input
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                    <Label for='Role'>{t('role') }</Label>
                    <Select
                        onChange={setMode}
                       isDisabled={loading}
                        options={roles}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='mx-2 mt-4'>
                    <Button color='primary' onClick={handleSubmit}>
                        {t('create') }
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
