class DateHelper {

    constructor() {
        throw new Error('Class cannot be instanciate.')
    }

    static textToDate(text) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text))
            throw new Error('Must be in the format yyyy-mm-dd');
        return new Date(...text.split('-').map((it, i) => it - i % 2));
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
}