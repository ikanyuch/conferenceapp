import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap'

import {Link} from 'react-router-dom'

/*TODO add actions*/
const ConferenceRow = () =>(
    <tr>
        <th scope="row">1</th>
        <td>{`${name} at ${datetime}`}</td>
        <td>
            <Button color="warning" tag={Link} to={`/conference/${id}`}>
                Edit</Button>
            <Button color="danger">Delete</Button>
        </td>
    </tr>
);

export default connect()(ConferenceRow);