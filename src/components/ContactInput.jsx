import React from "react";
import { createRoot } from "react-dom/client";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <div>
        <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
          <h1>Form Input</h1>
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            placeholder="Nama"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <input
            type="text"
            placeholder="Tag"
            value={this.state.tag}
            onChange={this.onTagChangeEventHandler}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactInput;
