import React, {useState} from 'react'
import contactService from '../../api/contact-service';
import './ContactForm.css'
import { connect } from 'react-redux';
import { deleteContact,createContact,updateContact } from '../../store/actions/ContactActions';

function ContactForm ({
  contactForEdit, onDelete,createContact,updateContact}) {

    const [editContact, setEditContact] = useState(contactForEdit)

    function createEmptyContact() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      };
    }
  
    const onInputChange = (e) => {
      setEditContact({...editContact, [e.target.name]: e.target.value})
    };
  
    const onClearField = (e) => {
      const sibling = e.target.parentNode.firstChild;
      setEditContact({...editContact, [sibling.name]: ''});
    }
  
    const onFormSubmit = (e) => {
      e.preventDefault();
  
      if (!editContact.id){
        const newContact = {...editContact, id:Date.now()}
        contactService.post('/',newContact)
        .then(({data}) => {createContact(data)})
        .catch(err =>console.log(err))
      }
      else {
        contactService.put(`/${editContact.id}`, editContact)
        .then(({data}) => {updateContact(data)})
        .catch(err =>console.log(err))
  
      }
      setEditContact(createEmptyContact());
    };
  
  
    const onContactDelete = () => {
      contactService.delete(`/${(editContact.id)}`)
      .then(({statusText})=> console.log(statusText))
      .catch(err => console.log(err))  
    onDelete((editContact.id))
    }

    return (
      <form id ='contact-form' onSubmit={onFormSubmit}>
        <div className='form-container'>
          <div className='contact-info'>
            <input
              type='text'
              className = 'text-field'
              placeholder='First Name'
              name='firstName'
              value={editContact.firstName}
              onChange={onInputChange} >
              </input>
              <span className='clear' onClick={onClearField}>X</span>
          </div>
          <div className='contact-info'>
            <input
              type='text'
              className = 'text-field'
              placeholder='Last Name'
              name='lastName'
              value={editContact.lastName}
              onChange={onInputChange} >
              </input>
              <span className='clear' onClick={onClearField}>X</span>
          </div>
          <div className='contact-info'>
            <input
              type='text'
              className = 'text-field'
              placeholder='Email'
              name='email'
              value={editContact.email}
              onChange={onInputChange} >
              </input>
              <span className='clear' onClick={onClearField}>X</span>
          </div>
          <div className='contact-info'>
            <input
              type='text'
              className = 'text-field'
              placeholder='Phone'
              name='phone'
              value={editContact.phone}
              onChange={onInputChange} >
              </input>
              <span className='clear' onClick={onClearField}>X</span>
          </div>
        </div>
        <div className='btns'>
          <button id='save' type='submit'>
            Save
          </button>
          {editContact.id ? (
            <button
            id='delete'
            type='delete'
            onClick={onContactDelete}>
              Delete
            </button>
          ):(
            ''
          )}
        </div> 
      </form>
    )
  }
  
  const mapDispatchToProps = {
    onDelete: deleteContact,
    createContact,
    updateContact,
   };
  
  
  export default connect(null, mapDispatchToProps)(ContactForm);