import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Number
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
