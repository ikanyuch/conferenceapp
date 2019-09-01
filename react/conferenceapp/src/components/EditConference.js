import React from 'react';
import ConferenceForm from "./ConferenceForm";
import { connect } from 'react-redux';
import {editConference} from "../actions/conferences";

const EditConference = (props) =>(
    <div>
        <ConferenceForm
            conference = {props.conference}
            onSubmitConference={(conference)=>{
                props.dispatch(editConference(props.conference.id,conference));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state,props) =>{
    return {
        conference: state.find((conference)=>
            conference.id === props.match.params.id
        )
    };
};

export default connect(mapStateToProps)(EditConference);
