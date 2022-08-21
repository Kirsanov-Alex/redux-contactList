import React, {useEffect} from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { useDispatch, useSelector } from 'react-redux';
import './ContactList.css';
import { deleteContactsAction, addNewContact,selectContact, getContactsAction} from '../../store/actions/ContactActions';

function ContactList(){

  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state);

	useEffect(() => {
		dispatch(getContactsAction())
  }, [dispatch]);

  const onDelete = (id) => {dispatch(deleteContactsAction(id));
  }

  const addContact = () => { 
    dispatch(addNewContact())
   }
  
  const onEdit = (contact) => {
    dispatch(selectContact(contact))}

    return (
      <div className='list-container'>
        <div className='item-container'>
          {contacts.map((contact)=>{
            return (
              <ContactItem
              key={contact.id}
              contact={contact}
              onDelete = {onDelete}
              onEdit = {onEdit}
            />
            )
          })}
        </div>
        <button onClick={addContact}>New</button>
      </div>
    )
  }

  
  export default ContactList;