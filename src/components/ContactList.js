import Contact from "./Contact";

const ContactList = ({ contacts, onDelete, onEdit, closeForm }) => {
  return (
    <>
      {contacts.sort((a, b) => a.name.localeCompare(b.name)).map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onDelete={onDelete}
          onEdit={onEdit}
          closeForm={closeForm}
        />
      ))}
    </>
  );
};

export default ContactList;
