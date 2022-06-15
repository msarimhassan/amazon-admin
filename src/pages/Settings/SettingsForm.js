import React from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default function SettingsForm() {
  return (
      <Form>
          <h1>General Settings</h1>
          <FormGroup>
              <Label for='Stripepublickey'>Stripe Public Key</Label>
              <Input type='text' placeholder='Key' />
          </FormGroup>
          <FormGroup>
              <Label for='StripePrivateKey'>Stripe Private Key</Label>
              <Input
                  type='text'
                  placeholder='Key'
              />
          </FormGroup>
          <Button color='primary'>Submit</Button>
      </Form>
  );
}
