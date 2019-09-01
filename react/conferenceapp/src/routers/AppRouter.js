import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EditConference from "../components/EditConference";
import ConferenceRoom from "../components/ConferenceRoom";
import About from "../components/About";
import Header from "../components/Header";
import AddConference from "../components/AddConference";

const AppRouter =()=>(
    <BrowserRouter>
        <Switch>
            <div>
                <Header/>
                <Route path="/" component={ConferenceRoom} exact={true}/>
                <Route path="/about" component={About}/>
                <Route path="/add" component={AddConference}/>
                <Route path="/conference/:id" component={EditConference}/>
            </div>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;