import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Container, Row, Col, Form, Label, Input, Button, Card } from 'reactstrap';
import apisauce from 'apisauce';
import { useFormik, Field } from 'formik';
import { loginSchema } from '../validations';
import Urls from '../config/Urls';
import Network from '../config/Network';
import { config } from '../config';

const initialValues = {
    email: '',
    password: '',
    picked: '',
};

export default function Login() {
    const [mode, setMode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const onSubmit = async ({ email, password }) => {
        setError('');
        if (mode == '') {
            setError('Required');
            return;
        }
        delete values['picked'];
        console.log({ values });
        const response = await Network.post(Urls.login,values,(await config()).headers);
        console.log({ response });
    };

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    const handleRadio = (e) => {
        const { name, value } = e.target;
        setMode(value);
    };

    return (
        <Container>
            <Card
                className='my-5 py-5 px-3'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
                <Row>
                    <Col
                        lg={6}
                        className='d-flex justify-content-center align-items-center flex-column'
                    >
                        <img
                            src={Logo}
                            style={{ width: '50vh', objectFit: 'contain' }}
                            className='text-center'
                        />
                        <h1 className='text-center'>Admin Portal</h1>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2>Please sign-in to your account</h2>
                            <Row>
                                <Col>
                                    <Label>Email</Label>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='admin@thehexaa.com'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: 'red' }}>{errors['email']}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label>Password</Label>
                                    <Input
                                        type='password'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: 'red' }}>{errors['password']}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='my-3'>
                                    <input
                                        name='mode'
                                        type='radio'
                                        value='Admin'
                                        className='mx-4'
                                        onChange={handleRadio}
                                    />
                                    <Label>Admin</Label>
                                    <input
                                        name='mode'
                                        type='radio'
                                        value='Company'
                                        className='mx-4'
                                        onChange={handleRadio}
                                    />

                                    <Label>Shop</Label>
                                    <br />
                                    <span style={{ color: 'red' }}>{error}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='my-3'>
                                    <Button color='warning' onClick={handleSubmit}>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}
