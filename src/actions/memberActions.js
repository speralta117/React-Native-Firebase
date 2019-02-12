import * as types from './actionTypes';
import { getMembers } from '../api/apiMember';
import memberApi from '../api/apiMock';

export function loadMembersSuccess(members) {
    return { type: types.LOAD_MEMBERS_SUCCESS, members }
}

export function loadMembers() {
    return function(dispatch) {
        memberApi.getMembers().then((members) => {
            dispatch(loadMembersSuccess(members));
        });        
    }
}