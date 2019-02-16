import initialState from './initialState';
import * as types from '../actions/actionTypes'

export default function ToasterReducer(state = initialState.toasterMessage, action) {
    switch(action.type){
        case types.ADD_TOAST:
            return action.toasterMessage;
        default: 
            return state;
    }
}