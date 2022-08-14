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
          Contact List
        </header>
        <main>
          <ContactList />
          <ContactForm 
                key={selectedContact.id}
                onEdit={selectedContact} />
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = (selectedContact) => {
  return selectedContact 
}

export default connect(mapStateToProps)(App);
