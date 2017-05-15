import React from 'react';



export default class ContactUsForm extends React.Component {

  constructor(props){
    super(props);
    this.getFieldValues = this.getFieldValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Reads the form and returns the entered values
  getFieldValues(){
    return {
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    };
  }

  // Push contact details to props
  handleSubmit(event){
    event.preventDefault();
    this.props.setContactDetails(this.getFieldValues());
  }


  render(){
    // get contact details from props
    const contactDetails = this.props.contactDetails;

    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" >Name:</label>
        <input id="name" ref="name" type="text" maxLength="256" required defaultValue={contactDetails.name} />
        <label htmlFor="email" >Email Address:</label>
        <input id="email" ref="email" maxLength="256" required type="email" defaultValue={contactDetails.email} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref="message"  type="text" rows="5" maxLength="1000" required />



        name: {contactDetails.name}<br />
        email: {contactDetails.email}<br />
        message: {contactDetails.message}<br />

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

