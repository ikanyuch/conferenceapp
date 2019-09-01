import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap'
import {removeConference} from "../actions/conferences";
import {Link} from 'react-router-dom'

const ConferenceRow = ({id,name,datetime, dispatch}) =>(
    <tr>
        <th scope="row">{id}</th>
        <td>{`${name} at ${datetime}`}</td>
        <td>
            <Button color="warning" tag={Link} to={`/conference/${id}`}>
                    Edit</Button>
            <Button color="danger" onClick={()=>{
                dispatch(removeConference({id}))
            }}>Delete</Button>
        </td>
    </tr>
);

export default connect()(ConferenceRow);