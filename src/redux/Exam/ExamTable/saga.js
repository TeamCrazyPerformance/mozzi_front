import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as api from './api';
import * as actions from './actionTypes';

const getExamTableDataRequestList = function*() {
    yield takeEvery(actions.GET_EXAM_TABLE_DATA, function*({limit, page, sort}) {
        yield put({ type: actions.GET_EXAM_TABLE_DATA_PENDING});

        const getResult = yield call(() => api.getExamTableDataRequestList(limit, page, sort));

        if(getResult.success === true){
            yield put({
                type: actions.GET_EXAM_TABLE_DATA_SUCCESS,
                examTableDataRequestList: getResult.exams,
                page: getResult.page,
                count: getResult.count,
                total: getResult.total,
            });
        } else{
            yield put({ type: actions.GET_EXAM_TABLE_DATA_FAILURE});
        }
    });
};



export default function* getRequestsSaga() {
    yield all([
        fork(getExamTableDataRequestList),
    ]);
}