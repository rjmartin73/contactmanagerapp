import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  /// Has access to 'this' if this function is an arrow function,
  /// otherwise you have to bind this to the event onClick={this.onShowClick.bind(this)}
  /// or use a constructor to bind it
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // delete handler
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      //.then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
      //console.error('It works!');
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    //const { suite, street, city, zipcode } = this.props.contact.address;
    //const { catchPhrase, bs } = this.props.contact.company;
    //const cname = this.props.contact.company.name;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body shadow-lg p-3 mb-3 bg-white border border-primary rounded'>
              <h5 className='card-title'>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className='fas fa-sort-down'
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />{' '}
                <Link to={`contact/edit/${id}`}>
                  <i
                    className='fas fa-user-edit'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h5>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item rounded'>Email: {email}</li>
                  <li className='list-group-item rounded'>Phone: {phone}</li>
                  {/* <li className="list-group-item rounded">
                    Address: {suite} {street} <br />
                    {city} {zipcode}
                  </li>
                  <li className="list-group-item rounded">
                    Company: <span className="lead">{cname}</span>
                    <br />
                    <em>{catchPhrase}</em>
                    <br />
                    <em className="text-secondary">{bs}</em>
                    <br />
                    <a href={"http://" + website} target="_new">
                      {"http://" + website}
                    </a>
                  </li> */}
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
};

export default Contact;
