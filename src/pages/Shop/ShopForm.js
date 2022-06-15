import React from 'react';
import { Row, Col, Form, Label, Input, Button } from 'reactstrap';

export default function ShopForm() {
    return (
        <Form>
            <Row>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='ShopName'>Shop Name</Label>
                    <Input type='text' placeholder='Shop Name' />
                </Col>
                <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                    <Label for='ShopName'>Shop Type</Label>
                    <Input type='text' placeholder='Shop Type' />
                </Col>
            </Row>
            <Row>
                <Col className='mx-2 mt-4'>
                    <Button color='primary'>Submit</Button>
                </Col>
            </Row>
        </Form>
    );
}
