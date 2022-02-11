import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";


function App() {
  const [showAddContact, setShowAddContact] = useState(false)
  const [contacts, setContacts] = useState([])
  
  
  const addContact = contact => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newContact = { id, ...contact}
    const newContacts = [newContact, ...contacts]
    setContacts(newContacts)
    console.log(contact, ...contacts)
  }

  const updateContact = (contactId, updatedContact) => {
    setContacts(prev => prev.map(item => (item.id === contactId ? updatedContact : item)))
  }

  const deleteContact = id => {
    const updatedContacts = [...contacts].filter(contact => contact.id !== id)
    setContacts(updatedContacts)
  }

  const closeForm = () => {
    setShowAddContact(!showAddContact)
  }


  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddContact(!showAddContact)}
        showAdd={showAddContact}
      />
      {showAddContact && <AddContact onAdd={addContact} closeForm={closeForm} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={updateContact}
          closeForm={closeForm}
        />
      ) : (
        <p>You have no friends. Add a contact to feel less lonely.</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
