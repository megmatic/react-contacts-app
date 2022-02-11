import { useState } from "react";

const UpdateContact = ({ id, contact, submitUpdate }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNum, setPhoneNum] = useState(contact.phoneNum);
  const [notes, setNotes] = useState(contact.notes);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
      }
      
      submitUpdate({id, name, email, phoneNum, notes})
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
                  onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="text"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Add Phone Number"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Notes</label>
        <input
          type="textarea"
          placeholder="Add notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Contact" className="btn btn-block" />
    </form>
  );
};

export default UpdateContact;
