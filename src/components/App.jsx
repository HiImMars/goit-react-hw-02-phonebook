import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === data.name)) {
      return Notify.info(`${data.name} is already in your contacts`);
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    Notify.success(`${data.name} has been successfully added to your contacts`);
  };

  onRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notify.success('The contact has been successfully removed');
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = this.handleFilterContacts();

    return (
      <div className="container">
        <h1 className="title head">Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />
        {contacts.length ? (
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={this.onRemoveContact}
          />
        ) : (
          <p className="">There are no contacts in your phoneboook</p>
        )}
      </div>
    );
  }
}
