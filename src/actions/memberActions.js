import * as types from './actionTypes';
import { getMeetings, saveMeeting } from '../api/apiMember';
import memberApi from '../api/apiMock';

export function loadMeetingsSuccess(meetings) {
    return { type: types.LOAD_MEMBERS_SUCCESS, meetings }
}

export function addMeetingSuccess(meeting) {
    return { type: types.ADD_MEETING_SUCCESS, meeting }
}

export function loadMeetings() {
    return function(dispatch) {
        getMeetings().then((meetings) => {
            dispatch(loadMeetingsSuccess(meetings));
        });        
    }
}

export function addMeeting(date) {
    return function(dispatch) {
        saveMeeting(date).then((members) => {
            dispatch(addMeetingSuccess(members));
        });        
    }
}