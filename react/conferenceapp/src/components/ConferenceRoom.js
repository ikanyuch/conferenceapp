import React from 'react';
import {Button, Table} from 'reactstrap';
import Row from "./ConferenceRow";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

/*TODO solve problem with props not working*/
const ConferenceRoom = (props)=>(
            <div className="container-fluid">
                <h3>List of conferences</h3>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Conference Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.conferences.map(conference=>{
                        return (
                                <Row key={conference.id} {...conference}/>
                        )
                    })}
                    </tbody>
                </Table>
                <Button color="primary"
                        tag={Link} to="/add"
                >Add Conference</Button>
            </div>
);

const mapStateToProps = (state) =>{
    return {
        conferences: state
    };
};

export default connect(mapStateToProps)(ConferenceRoom);
