import React from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';
import { connect } from 'react-redux';

function App({selectedContact}) {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>Contact List</h1>
        </header>
        <main>
          <ContactList />
          <ContactForm 
                key={selectedContact.id}
                contactForEdit={selectedContact} />
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = ({selectedContact}) => ({
  selectedContact
})


export default connect(mapStateToProps) (App);
