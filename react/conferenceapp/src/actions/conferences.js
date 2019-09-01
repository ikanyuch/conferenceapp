import axios from '../axios/axios';

/*TODO add other action generators + watch for routes*/
/*Get Action generator*/
export const GET_CONFERENCES = 'GET_CONFERENCES';

const _getConferences = (conferences) =>({
    type: GET_CONFERENCES,
    conferences
});

export const getConferences = () =>{
    return(dispatch)=>{
        return axios.get('conferences').then(result =>{
            const conferences = [];
            result.data.forEach(conf=>{
                conferences.push(conf);
            });
            dispatch(_getConferences(conferences));
        });
    };
};

/*Add Action Generator*/
export const ADD_CONFERENCE = 'ADD_CONFERENCE';

const _addConference = (conference) =>({
    type: ADD_CONFERENCE,
    conference
});

/*TODO participants should be added*/
export const addConference = (confData ={
    name: '',
    dateTime:''
}) =>{
    return(dispatch)=>{
        const conference = {
            name: confData.name,
            dateTime: confData.dateTime,
            /*TODO participant array should be added*/
        };

        return axios.post('conferences/create', conference).then(result=>{
            dispatch(_addConference(result.data));
        })
    }
};

/*Remove Action Generator*/
export const REMOVE_CONFERENCE = 'REMOVE_CONFERENCE';

const _removeConference = ({id} = {}) =>({
    type: REMOVE_CONFERENCE,
    id
});

export const removeConference = ({id} = {}) =>{
    return (dispatch) =>{
        return axios.delete(`conferences/${id}`).then(()=>{
            dispatch(_removeConference({id}));
        })
    }
};

/*Edit Action Generator*/
export const EDIT_CONFERENCE = 'EDIT_CONFERENCE';

const _editConference = (id,updates) =>({
    type: EDIT_CONFERENCE,
    id,
    updates
});

export const editConference = (id, update) => {
    return (dispatch) => {
        return axios.put(`conferences/${id}`,updates).then(()=>{
            dispatch(_editConference(id,updates));
        });
    }
};

/*TODO add and delete participant action generator*/