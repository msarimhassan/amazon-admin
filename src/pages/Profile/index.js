import React from 'react';
import { Form, Row, Col, Label, Input, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export default function ProfilePage() {
    const { t } = useTranslation();
    return (
        <Form>
            <Row>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='name'>{t('name') }</Label>
                    <Input type='text' placeholder='Name' />
                </Col>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='Others'>{t('others') }</Label>
                    <Input type='text' placeholder='Others' />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col className='mx-2'><Button color='primary'>{t('submit') }</Button></Col>
            </Row>
        </Form>
    );
}
