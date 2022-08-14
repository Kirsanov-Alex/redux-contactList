import React from 'react';
import './ContactItem.css';
import contactService from '../../api/contact-service';
function ContactItem(
  {contact, onDelete, onEdit}
  ) {

  const onItemDelete = (e) => {
    e.stopPropagation();
    onDelete(contact.id)
    contactService.delete(`/${(contact.id)}`)
    .then(({statusText})=> console.log(statusText))
    .catch(err => console.log(err))  
  }

  const onContactEdit = (e) => {
    e.stopPropagation()
    onEdit(contact)
  }
  
   return (
      <div className='contact-item'
      onDoubleClick={onContactEdit}>
        <p className='group-name'>
          {contact.firstName} {contact.lastName}
        </p>
        <span 
        className='delete-btn'
        onClick= {onItemDelete}>
          X</span>
      </div>
    )
  }

export default ContactItem;