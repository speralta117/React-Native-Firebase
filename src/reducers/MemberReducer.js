import initialState from './initialState';
import * as types from '../actions/actionTypes'

export default function MemberReducer(state = initialState.meetings, action) {
    switch(action.type){
        case types.LOAD_MEMBERS_SUCCESS:
            return action.meetings; 
        case types.ADD_MEETING_SUCCESS:
            return [...state, Object.assign({}, action.meeting)];
        default: 
            return state;
    }
}