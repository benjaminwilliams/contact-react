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
      name: this.refs.name.value
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
        <label htmlFor="name">Name:</label>
        <input id="name" ref="name" type="text" defaultValue={contactDetails.name} />


        name: {contactDetails.name}<br />
        email: {contactDetails.email}<br />
        message: {contactDetails.message}<br />

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

