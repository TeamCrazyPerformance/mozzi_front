import * as actions from './actionTypes';

export const getExamTableDataRequestList = ({limit = 10, page = 1, sort = 'asc'}) => {
    return {
        type: actions.GET_EXAM_TABLE_DATA,
        limit: limit,
        page: page,
        sort: sort,
    };
};

export const appendExamData = ({}) => {
    return {
        type: actions.APPEND_EXAM_DATA,

    };
};

export const deleteExamData = ({}) => {
    return {
        type: actions.DELETE_EXAM_DATA,
    };
};

export const reviseExamData = ({}) => {
    return {
        type: actions.REVISE_EXAM_DATA,

    };
};