import React, { useState, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export const App = () => { 
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');



  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const isDuplicate = ({ name }) => {
    return contacts.some(item => item.name === name);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Layout>
      <h2>Phonebook</h2>
      <ContactForm onSave={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList items={visibleContacts} onDelete={deleteContact} />
    </Layout>
  );
}