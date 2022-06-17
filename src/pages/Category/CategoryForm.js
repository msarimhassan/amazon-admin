import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Col, Label, Input, FormText, Button, Row } from 'reactstrap';
import { useFormik } from 'formik';
import {Network,Urls,multipartConfig} from '../../config'

const initialValues = {
    name: '',
};
export default function CategoryForm() {
    const { mode } = useParams();
    const [file, setFile] = useState();

    const onSubmit = async(values) => {
        const formData = new FormData();

        formData.append('name',values.name);
        formData.append('image',file);

        const response=await Network.post(Urls.createCategory, formData, (await multipartConfig()).headers);

        console.log({response});


    };

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        onSubmit,
        initialValues,
    });

    return (
        <Form>
            <h1 className='px-3'>Create Categories</h1>
            <Row>
                <Col md={6} sm={12} className='px-4'>
                    <Label for='CategoryName'>Category Name</Label>
                    <Input
                        type='text'
                        placeholder='Category Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={6} sm={12} className='px-4'>
                    <Label for='Uplaod Image'>Upload Image</Label>
                    <Input type='file' name='file' onChange={handleImage} />
                    <FormText color='danger'>
                        (Required image resolution 400x400, image size 0.2mb)
                    </FormText>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className='px-4 mt-2'>
                    <Button color='primary' onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
