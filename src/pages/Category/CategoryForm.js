import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Col, Label, Input, FormText, Button, Row } from 'reactstrap';

export default function CategoryForm() {
    const { mode } = useParams();

    console.log({ mode });
    return (
        <Form>
            <h1 className='px-3'>Create Categories</h1>
            <Row>
                <Col md={6} sm={12} className='px-4'>
                    <Label for='CategoryName'>Category Name</Label>
                    <Input type='text' placeholder='Category Name' />
                </Col>
                <Col md={6} sm={12} className='px-4'>
                    <Label for='exampleSelect'>Shop Type</Label>
                    <Input type='select' name='shoptype' id='shoptype'>
                        <option>Butcher</option>
                        <option>Butcher</option>
                        <option>Butcher</option>
                        <option>Butcher</option>
                        <option>Butcher</option>
                    </Input>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}  className='px-4'>
                    <Label for='Uplaod Image'>Upload Image</Label>
                    <Input type='file' name='file' id='exampleFile' />
                    <FormText color='danger'>
                        (Required image resolution 400x400, image size 0.2mb)
                    </FormText>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className='px-4 mt-2'>
                    <Button color='primary'>Submit</Button>
                </Col>
            </Row>
        </Form>
    );
}
