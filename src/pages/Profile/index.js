import React from 'react';
import { Form, Row, Col, Label, Input,Button } from 'reactstrap';

export default function ProfilePage() {
    return (
        <Form>
            <Row>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='name'>Name</Label>
                    <Input type='text' placeholder='Name' />
                </Col>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='Others'>Others</Label>
                    <Input type='text' placeholder='Others' />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col className='mx-2'><Button color='primary'>Submit</Button></Col>
            </Row>
        </Form>
    );
}
