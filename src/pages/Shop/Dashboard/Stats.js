import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import { Icons } from '../../../common';

export default function Stats() {
    const { AI } = Icons;
  return (
      <Container className='p-5 rounded box-shadow'>
          <h4>Statistics</h4>
          <Row className='mt-5'>
              <Col sm={12} lg={3} md={6}>
                  <AI.AiOutlineStock size={40} />
                  <span className='h3 mx-3'>1</span>
                  <br />
                  <span>Orders</span>
              </Col>
              <Col sm={12} lg={3} md={6}>
                  <AI.AiOutlineUser size={40} />
                  <span className='h3 mx-3'>1</span>
                  <br />
                  <span>Users</span>
              </Col>
              <Col sm={12} lg={3} md={6}>
                  <AI.AiOutlineAppstore size={40} />
                  <span className='h3 mx-3'>1</span>
                  <br />
                  <span>Categories</span>
              </Col>
              <Col sm={12} lg={3} md={5}>
                  <AI.AiOutlineDollar size={40} />
                  <span className='h3 mx-3'>1</span>
                  <br />
                  <span>Revenue</span>
              </Col>
          </Row>
      </Container>
  );
}
