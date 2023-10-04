import { Component } from 'react';
import { ContactForm } from './Phonebook.jsx/ContactForm';
import { ContactList } from './Phonebook.jsx/ContactList';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}
