import React from "react";

function DeleteContacts({ id, onDelete }) {
  return (
    <div>
      <button className="contact-item__delete" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
}

export default DeleteContacts;
