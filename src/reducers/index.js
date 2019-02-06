import { combineReducers } from 'redux';
import members from './MemberReducer';

const rootReducer = combineReducers({
    members
});

export default rootReducer;