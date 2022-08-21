import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../store/actions/actionTypes'
import { createContactSaga, deleteContactsSaga, getContactsSaga, updateContactsSaga } from './contactsSagas';

function* rootSaga(){
    yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga)
    yield takeLatest(ACTION_TYPES.POST_CONTACTS_ACTION, createContactSaga)
    yield takeLatest(ACTION_TYPES.PUT_CONTACTS_ACTION, updateContactsSaga)
    yield takeLatest(ACTION_TYPES.DELETE_CONTACTS_ACTION, deleteContactsSaga)
}

export default rootSaga;