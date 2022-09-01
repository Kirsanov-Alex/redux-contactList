import { ADD_NEW_CONTACT,
     SELECT_CONTACT,
      } from "../actions/ContactActions"

      import ACTION_TYPES from "../actions/actionTypes"

const initialState = {
   contacts:[],
   isFetching: false,
   error: null,
   selectedContact: createEmptyContact()
}


export default function toContactReucer(state = initialState,{type, payload}) {

   switch(type){

       case ADD_NEW_CONTACT: return {...state, selectedContact:createEmptyContact()};
       case SELECT_CONTACT: return{...state, selectedContact:payload}
       //
       case ACTION_TYPES.GET_CONTACTS_SUCCESS: return {...state, contacts: payload, selectedContact:createEmptyContact(), isFetching: false};
       case ACTION_TYPES.GET_CONTACTS_REQUEST: return {...state, isFetching: true}
       case ACTION_TYPES.GET_CONTACTS_ERROR: return {...state, isFetching: false, error: payload}
       //
       case ACTION_TYPES.PUT_CONTACTS_SUCCESS: return {...state, contacts: state.contacts.map((contact)=> contact.id !== payload.id ? contact : payload),
        selectedContact:createEmptyContact(), isFetching: false};
        case ACTION_TYPES.PUT_CONTACTS_REQUEST: return {...state, isFetching: true};
        case ACTION_TYPES.PUT_CONTACTS_ERROR: return {...state, isFetching: false, error: payload}
        //
        case ACTION_TYPES.POST_CONTACTS_SUCCESS: return{...state, contacts: [...state.contacts, payload], isFetching: true};
        case ACTION_TYPES.POST_CONTACTS_REQUEST: return{...state, isFetching: true};
        case ACTION_TYPES.POST_CONTACTS_ERROR: return {...state, isFetching: false, error: payload}
        //
        case ACTION_TYPES.DELETE_CONTACTS_SUCCESS: return {...state, contacts: state.contacts.filter((contact)=> contact.id !==payload), isFetching: false, selectedContact:createEmptyContact()};
        case ACTION_TYPES.DELETE_CONTACTS_REQUEST: return {...state, isFetching: true};
        case ACTION_TYPES.DELETE_CONTACTS_ERROR: return {...state, isFetching: false, error: payload}
      
       default:return state;
        
   }   
}

function createEmptyContact() {
   return {
       firstName: '',
       lastName: '',
       email: '',
       phone: '',
   };
}