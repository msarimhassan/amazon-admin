import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Form, Col, Label, Input, FormText, Row } from 'reactstrap';
import { useFormik } from 'formik';
import { Network, Urls, multipartConfig, config } from '../../config';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import LoadingButton from '../../components/LoadingButton';
import Loader from '../../assets/animations';
import i18next from 'i18next';
import Routes from '../../common/Routes';
const initialValues = {
    name: '',
};
export default function CategoryForm() {
    const { mode } = useParams();
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    useEffect(() => {
        if (mode == 'edit') {
            GetCategory();
        }
    }, []);

    const GetCategory = async () => {
        setDataLoading(true);
        const response = await Network.get(
            Urls.getsingleCategory(i18next.language) + location.state.id,
            (
                await config()
            ).headers
        );
        values.name = response.data.category.name;
        setDataLoading(false);
    };
    const onSubmit = async (values) => {
        setLoading(true);
        console.log({ values });
        console.log({ file });
        const formData = new FormData();

        formData.append('name', values.name);
        if (file) {
            formData.append('image', file);
        }
       
        if (mode === 'edit') {
            const response = await Network.put(
                Urls.updateCategory(i18next.language) + location.state.id,
                formData,
                (
                    await multipartConfig()
                ).headers
            );
            if (!response.ok) {
                 setLoading(false);
                return toast.error(response.data.error, { position: 'top-right' });
            }
            setLoading(false);
            toast.success(response.data.message, { position: 'top-right' });
            navigate(Routes.CategoryPage);
            return;
        }

        const response = await Network.post(
            Urls.createCategory(i18next.language),
            formData,
            (
                await multipartConfig()
            ).headers
        );
        if (!response.ok) {
            return toast.error(response.data.error, { position: 'top-right' });
        }
        setLoading(false);
        toast.success(response.data.message, { position: 'top-right' });
        navigate(Routes.CategoryPage);
    };

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        onSubmit,
        initialValues,
    });

    return (
        <>
            {dataLoading ? (
                <Loader />
            ) : (
                <Form>
                    <h1 className='px-3'>{t('create-category')}</h1>
                    <Row>
                        <Col md={6} sm={12} className='px-4'>
                            <Label for='CategoryName'>{t('category-name')}</Label>
                            <Input
                                type='text'
                                placeholder='Category Name'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={6} sm={12} className='px-4'>
                            <Label for='Uplaod Image'>{t('upload-image')}</Label>
                            <Input type='file' name='file' onChange={handleImage} />
                            <FormText color='danger'>
                                (Required image resolution 400x400, image size 0.2mb)
                            </FormText>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='px-4 mt-2'>
                            <div onClick={handleSubmit}>
                                <LoadingButton text={t('submit')} loading={loading} type='submit' />
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </>
    );
}
