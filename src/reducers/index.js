import { combineReducers } from 'redux';
import meetings from './MemberReducer';
import toaster from './ToasterReducer';

const rootReducer = combineReducers({
    meetings,
    toaster
});

export default rootReducer;