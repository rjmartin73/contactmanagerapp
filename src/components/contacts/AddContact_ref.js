import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '555-555-2525'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card mb-3'>
        <div className='card-header bg-primary text-white'>Add Contact</div>
        <div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='form-control lg'
                  placeholder='Enter Name...'
                  defaultValue={name}
                  ref={this.nameInput}
                />
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control lg'
                  placeholder='Enter Email...'
                  defaultValue={email}
                  ref={this.emailInput}
                />
                <label htmlFor='name'>Phone</label>
                <input
                  type='phone'
                  name='phone'
                  className='form-control lg'
                  placeholder='Enter Phone...'
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <button
                type='submit'
                className='btn btn-outline-primary my-2 my-sm-0 btn-primary'
              >
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
