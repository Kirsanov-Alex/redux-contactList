import { createStore, applyMiddleware } from 'redux';
 
import ContactReducer from './reducers/contactReducers'
import logger from 'redux-logger'


const middleWeare = applyMiddleware(logger)

export default createStore(ContactReducer, middleWeare) 