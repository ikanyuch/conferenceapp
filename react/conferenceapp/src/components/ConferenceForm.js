import React from 'react';
import {Link} from "react-router-dom";
import {Button, Table} from 'reactstrap';

/*TODO ok button onSubmit fix*/
export default class ConferenceForm extends React.Component{
    constructor(props){
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDateTimeChange = this.onDateTimeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name:props.conference ? props.conference.name:'',
            dateTime:props.conference ? props.conference.dateTime:'',

            error:''
        };
    }
    onNameChange(e){
        const name = e.target.value;
        this.setState(()=>({name:name}));
    }
    onDateTimeChange(e){
        const dateTime = e.target.value;
        this.setState(()=>({dateTime:dateTime}));
    }
    onSubmit(e){
        e.preventDefault();

        if(!this.state.name || !this.state.dateTime || !this.state.conferenceRoom){
            this.setState(()=>({error:'Please set data'}));
        }else{
            this.setState(()=>({error:''}));
            this.props.onSubmitConference({
                name:this.state.name,
                dateTime:this.state.dateTime
                }
            )
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="name" autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input type="text" placeholder="Date Time"
                           value={this.state.dateTime}
                           onChange={this.onDateTimeChange}
                    />
                </form>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birthday</th>
                    </tr>
                    </thead>
                    <tbody>
                    /*TODO add here map for ParticipantRow*/
                    </tbody>
                </Table>
                <Button color="primary" onClick={this.onSubmit}>OK</Button>
                <Button color="primary"
                        tag={Link} to="/"
                >Cancel</Button>
            </div>
        )
    }
}