import initialState from './initialState';

export default function MemberReducer(state = initialState.members, action) {
    switch(action.type){
        default: 
            return state;
    }
}