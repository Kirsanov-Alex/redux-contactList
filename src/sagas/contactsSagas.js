import {put} from 'redux-saga/effects'
import { 
    deleteContactsError, 
    deleteContactsSuccess, 
    deleteContactsRequest, 
    updateContactsError, 
    updateContactsSuccess, 
    updateContactsRequest, 
    createContactSuccess, 
    createContactError, 
    createContactRequest, 
    getContactsError, 
    getContactsRequest, 
    getContactsSuccess } from '../store/actions/ContactActions'
import contactsService from '../api/contact-service';

export function* getContactsSaga(){
    yield put(getContactsRequest())
    try {
        const contacts = yield contactsService.get('/').then(({data})=> data);
        yield put(getContactsSuccess(contacts));
    } catch (error) {
        yield put(getContactsError(error))
    }
}
export function* createContactSaga({payload}){
    yield put(createContactRequest())
    try {
        const newContact = yield contactsService.post('/', payload).then(({data})=> data);
        yield put(createContactSuccess(newContact));
    } catch (error) {
        yield put(createContactError(error))
    }
}
export function* updateContactsSaga({payload}){
    yield put(updateContactsRequest())
    try {
        const updateContact = yield contactsService.put(`/${payload.id}`, payload)
        .then(({data})=>data)
        yield put(updateContactsSuccess(updateContact))
        
    } catch (error) {
        yield put(updateContactsError(error))   
    }
}
export function* deleteContactsSaga({payload}){
    yield put(deleteContactsRequest())
    try {
        yield contactsService.delete(`/${payload}`)
        yield put(deleteContactsSuccess(payload))
        
    } catch (error) {
        yield put(deleteContactsError(error))  
    }
}