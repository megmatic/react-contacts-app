import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import UpdateContact from "./UpdateContact";

const Contact = ({ contact, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (updatedContact) => {
    onEdit(edit.id, updatedContact);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <UpdateContact
        id={edit.id}
        contact={edit.contact}
        submitUpdate={submitUpdate}
      />
    );
  }
  return (
    <div className="contact">
      <h3>
        {contact.name}{" "}
        <div className="icons">
          <RiCloseCircleLine
            className="icon"
            onClick={() => onDelete(contact.id)}
          />
          <TiEdit
            onClick={() => setEdit({ id: contact.id, contact: contact })}
            className="icon"
          />
        </div>
      </h3>
      <p>{contact.email}</p>
      <p>{contact.phoneNum}</p>
      <p className="notesHeader">Notes:</p>
      <p>{contact.notes}</p>
    </div>
  );
};

export default Contact;
