import React from 'react'
import { useParams } from 'react-router-dom';
import { Form,FormGroup,Label,Input,Button,FormText } from 'reactstrap';
export default function ProductForm() {
    const {mode}=useParams();

    console.log({mode});
  return (
      <Form>
          <h1>Add New Product</h1>
          
              <Label for='Name'>Name</Label>
              <Input type='text' placeholder='Product Name' />
        

          
              <Label for='weighttype'>Weight Type</Label>
              <Input type='select'>
                  <option>single</option>
                  <option>range</option>
                  <option>null</option>
              </Input>
        
          
              <Label for='Unit'>Unit</Label>
              <Input type='select'>
                  <option>single</option>
                  <option>range</option>
                  <option>null</option>
              </Input>
        
          
              <Label for='exampleSelectMulti'>Category Type</Label>
              <Input type='select'>
                  <option>Electronics</option>
                  <option>Electronics</option>
              </Input>
        

          
              <Label for='exampleFile'>Upload Image</Label>
              <Input type='file' />
              <FormText color='danger'>
                  (Required image resolution 400x400, image size 0.2mb)
              </FormText>
        
          
              <Label for='Tax'>Tax</Label>
              <Input type='text' placeholder='Product Name' />
        
          
              <Label for='Description(English)'>Description(English)</Label>
              <Input type='textarea' name='text' id='exampleText' />
        
          
              <Label for='Description(Spanish)'>Description(Spanish)</Label>
              <Input type='textarea' name='text' id='exampleText' />
        
          <Button color='primary'>Submit</Button>
      </Form>
  );
}
