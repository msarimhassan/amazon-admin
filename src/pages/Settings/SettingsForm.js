import React from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { useTranslation } from 'react-i18next';


export default function SettingsForm() {
    const { t } = useTranslation();
  return (
      <Form>
          <h1>{ t('general-settings')}</h1>
          <FormGroup>
              <Label for='Stripepublickey'>{ t('stripe-public-key')}</Label>
              <Input type='text' placeholder='Key' />
          </FormGroup>
          <FormGroup>
              <Label for='StripePrivateKey'>{t('stripe-private-key') }</Label>
              <Input
                  type='text'
                  placeholder='Key'
              />
          </FormGroup>
          <Button color='primary'>{t('submit')}</Button>
      </Form>
  );
}
