import React from 'react';
import { connect } from 'react-redux';
import ConferenceForm from "./ConferenceForm";
import {addConference} from "../actions/conferences";

const AddConference = (props) => (
    <div>
        <ConferenceForm
            onSubmitConference = {(conference) =>{
                props.dispatch(addConference(conference));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddConference);