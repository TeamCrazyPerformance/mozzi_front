import * as actions from './actionTypes';

const examTableInitialState = {
    examTableDataRequestList: [],
    page: 0,
    count: 0,
    total: 0,
    error: false,
    loadingState: {
        getExamData: false,
        appendExamData: false,
        deleteExamData: false,
        reviseExamData: false,
    }
};

const getExamRequestReducer = (state = examTableInitialState, action) => {
    switch(action.type){
        case actions.GET_EXAM_TABLE_DATA_PENDING: {
            return {
                ...state,
                examTableDataRequestList:[],
                error: false,
                loadingState: {
                    ...state.loadingState,
                    getExamData: true
                }
            };
        }
        case actions.GET_EXAM_TABLE_DATA_SUCCESS: {
            return {
                ...state,
                examTableDataRequestList: action.getExamData,
                page: action.page,
                count: action.count,
                total: action.total,
                error: false,
                loadingState: {
                    ...state.loadingState,
                    examTableData: false
                }
            };
        }
        case actions.GET_EXAM_TABLE_DATA_FAILURE: {
            return {
                ...state,
                examTableDataRequestList: [],
                page: 0,
                count: 0,
                total: 0,
                error: true,
                loadingState: {
                    ...state.loadingState,
                    examTableData: false
                }
            };
        }
        default:{
            return state;
        }
    }
}

export default getExamReducer;