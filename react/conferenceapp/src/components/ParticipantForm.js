import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

/*TODO Add functional methods*/
const ParticipantForm = () =>(
    <div>
        <Form>
            <FormGroup>
                <Label for="appName">Name:</Label>
                <Input type="text" name="name" placeholder="John Johnson"/>
            </FormGroup>
            <FormGroup>
                <Label for="appDatetime">Birthday</Label>
                <Input
                    type="text"
                    name="datetime"
                    placeholder="01/01/2019 01:00"
                />
            </FormGroup>
        </Form>
        <Button color="primary">OK</Button>
        <Button color="primary">Cancel</Button>
    </div>
);

export default ParticipantForm;