import { combineReducers } from 'redux';
import meetings from './MemberReducer';

const rootReducer = combineReducers({
    meetings
});

export default rootReducer;