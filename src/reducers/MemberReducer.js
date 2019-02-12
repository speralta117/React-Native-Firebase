import initialState from './initialState';
import * as types from '../actions/actionTypes'

export default function MemberReducer(state = initialState.members, action) {
    switch(action.type){
        case types.LOAD_MEMBERS_SUCCESS:
            return action.members; 
        default: 
            return state;
    }
}