import React from 'react';
import { Container } from 'reactstrap';

import { bannerColor } from '../common/colors';
export default function Banner({ title }) {
    return (
        <Container className='d-flex border justify-content-center align-items-center p-5 bg-light' >
            <h1 className='text-center'>{title}</h1>
        </Container>
    );
}
 