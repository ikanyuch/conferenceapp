import {ADD_CONFERENCE, EDIT_CONFERENCE, GET_CONFERENCES, REMOVE_CONFERENCE} from "../actions/conferences";

const conferencesDefaultState = [];

export default (state = conferencesDefaultState,action)=>{
    switch (action.type) {
        case GET_CONFERENCES:
            return action.conferences;
        case ADD_CONFERENCE:
            return [
                ...state,
                action.conference
            ];
        case REMOVE_CONFERENCE:
            return state.filter(({id}) => id !== action.id);
        case EDIT_CONFERENCE:
            return state.map((conference)=>{
                if (conference.id === action.id){
                    return {
                        ...conference,
                        ...action.updates
                    };
                } else {
                    return conference;
                }
            });
        default:
            return state;
    }
};