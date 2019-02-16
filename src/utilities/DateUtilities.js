import moment from 'moment';

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if (!parsed.isValid()) {
        return dateString;
    }

    return parsed.format('DD-MM-YYYY');
}

export function createDate(date) {
    return moment(new Date(date));
}