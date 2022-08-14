import React, {useEffect} from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { connect } from 'react-redux';
import './ContactList.css';
import contactService from '../../api/contact-service';
import { getContact, deleteContact,addNewContact,selectContact } from '../../store/actions/ContactActions';

function ContactList({contacts,getContact, addNewContact,selectContact, deleteContact}){

	useEffect(() => {
		contactService.get('/')
		.then(({data}) => {getContact(data)}
    )
    .catch(error => console.log(error))
  }, [getContact])

    return (
      <div className='list-container'>
        <div className='item-container'>
          {contacts.map((contact)=>{
            return (
              <ContactItem
              key={contact.id}
              contact={contact}
              onDelete = {deleteContact}
              onEdit = {selectContact}
            />
            )
          })}
        </div>
        <button onClick={addNewContact}>New</button>
      </div>
    )
  }

  const mapStateToProps = ({contacts}) => ({contacts});
  
  const mapDispatchToProps = {
    getContact,
		addNewContact,
		selectContact,
		deleteContact,
		}
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactList);