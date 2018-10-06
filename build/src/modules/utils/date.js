"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const DISPLAY_FORMAT = 'YYYYMMDD';
const DATETIME_DISPLAY_FORMAT = 'YYYYMMDDhhmmss';
exports.DATETIME_DISPLAY_FORMAT = DATETIME_DISPLAY_FORMAT;
const formatDateToDisplay = (date, format = DISPLAY_FORMAT) => {
    try {
        const obj = moment(date);
        if (obj.isValid()) {
            return moment(date).format(format);
        }
        else {
            return null;
        }
    }
    catch (e) {
        return null;
    }
};
exports.formatDateToDisplay = formatDateToDisplay;
const convertStringToDate = (data, format = DISPLAY_FORMAT) => {
    try {
        const obj = moment.utc(data, format);
        if (obj.isValid()) {
            return obj.toDate();
        }
        else {
            return null;
        }
    }
    catch (e) {
        return null;
    }
};
exports.convertStringToDate = convertStringToDate;
const compareDateOnly = (date1, date2) => {
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() === date2.getTime();
};
exports.compareDateOnly = compareDateOnly;
//# sourceMappingURL=date.js.map