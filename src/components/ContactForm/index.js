import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Example = (props) => {
  return (
        <div style={divWidth} class="my-container"> 
            <h3>Contact</h3>      
        <Form> 

         {/* FULL NAME FORM */}
      <FormGroup>
        <Input htmlFor="fname" type="text" name="email"
          action="https://formspree.io/mknvjllw" method="POST"  
          placeholder="Full Name" style={formStyle} />
      </FormGroup>
      <FormGroup>

        {/* EMAIL FORM */}
        <Input name="_replyto Email" type="text" placeholder="Your Email..."style={formStyle} />
      </FormGroup>

        {/* MESSAGE FORM */}
      <FormGroup>
        <Input type="textarea" name="text"  
          placeholder="Write a message..." style={formStyle} />
      </FormGroup>

      {/* SELECT FILE */}
      <FormGroup>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>

      {/* SUBMIT BUTTON */}
      <Button id="button" type="submit">Submit</Button>
    </Form>
    </div>
  );
}
const divWidth = {
  width: '50%'
}
const formStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginTop: '6px 16px',
    marginBottom: '16px'
}

export default Example;
       