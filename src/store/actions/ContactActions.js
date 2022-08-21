import ACTION_TYPES from './actionTypes'

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'
export const addNewContact=(payload) =>{
    return {
        type: ADD_NEW_CONTACT ,
        payload
    }
}

export const SELECT_CONTACT = 'SELECT_CONTACT'
export const selectContact=(payload) =>{
    return {
        type: SELECT_CONTACT,
        payload
    }
}
//Getting
export const getContactsAction = () => { 
    return {
        type: ACTION_TYPES.GET_CONTACTS_ACTION,
    }
 }

export const getContactsRequest = () => { 
    return {
        type: ACTION_TYPES.GET_CONTACTS_REQUEST,
    }
  }

export const getContactsSuccess = (payload) => { 
    return {
        type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
        payload
    }
  }

export const getContactsError = (payload) => { 
    return {
        type: ACTION_TYPES.GET_CONTACTS_ERROR,
        payload
    }
  }
//Creating
export const createContactAction = (payload) => { 
    return {
        type: ACTION_TYPES.POST_CONTACTS_ACTION,
        payload
    }
 }

export const createContactRequest = () => { 
    return {
        type: ACTION_TYPES.POST_CONTACTS_REQUEST,
    }
  }

export const createContactSuccess = (payload) => { 
    return {
        type: ACTION_TYPES.POST_CONTACTS_SUCCESS,
        payload
    }
  }

export const createContactError = (payload) => { 
    return {
        type: ACTION_TYPES.POST_CONTACTS_ERROR,
        payload
    }
  }
//Update
export const updateContactsAction = (payload) => { 
    return {
        type: ACTION_TYPES.PUT_CONTACTS_ACTION,
        payload
    }
 }

export const updateContactsRequest = () => { 
    return {
        type: ACTION_TYPES.PUT_CONTACTS_REQUEST,
    }
  }

export const updateContactsSuccess = (payload) => { 
    return {
        type: ACTION_TYPES.PUT_CONTACTS_SUCCESS,
        payload
    }
  }

export const updateContactsError = (payload) => { 
    return {
        type: ACTION_TYPES.PUT_CONTACTS_ERROR,
        payload
    }
  }
//Delete
export const deleteContactsAction = (payload) => { 
    return {
        type: ACTION_TYPES.DELETE_CONTACTS_ACTION,
        payload
    }
 }

export const deleteContactsRequest = () => { 
    return {
        type: ACTION_TYPES.DELETE_CONTACTS_REQUEST,
    }
  }

export const deleteContactsSuccess = (payload) => { 
    return {
        type: ACTION_TYPES.DELETE_CONTACTS_SUCCESS,
        payload
    }
  }

export const deleteContactsError = (payload) => { 
    return {
        type: ACTION_TYPES.DELETE_CONTACTS_ERROR,
        payload
    }
  }