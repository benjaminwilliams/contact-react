import React from 'react';
import axios from 'axios';


export default class ContactUsForm extends React.Component {

  constructor(props){
    super(props);
    this.getFieldValues = this.getFieldValues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      submittedDetails: {
        name: "",
        email: "",
        message: ""
      }
    }
  }

  componentDidMount(){
    console.log("mounted");
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
    // Using a free online hosted mock API.
    // Response should be the values passed in with a ID and timestamp added
    const APIUrl = "https://reqres.in/api";
    const fieldValues = this.getFieldValues();
    const self = this;
    event.preventDefault();

    this.props.setContactDetails(fieldValues); // save details to props

    // Using axious to post contact us form to API endpoint
    axios.post(APIUrl + '/contact-us', {
      name: fieldValues.name,
      email: fieldValues.email, message: fieldValues.message
    })
      .then((response)=>{
        this.props.setContactDetails({
          name: response.data.name,
          email: response.data.email,
          message: response.data.message
        });
        window.location = '/#/success';

      })
      .catch((error)=>{
        console.log('error: ' + error);
      })
  }


  render(){
    // get contact details from props
    const contactDetails = this.props.contactDetails;
    const submittedDetails = this.state.submittedDetails;
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name" >Name:</label>
        <input id="name" ref="name" type="text" maxLength="256" required defaultValue={contactDetails.name} />
        <label htmlFor="email" >Email Address:</label>
        <input id="email" ref="email" maxLength="256" required type="email" defaultValue={contactDetails.email} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref="message"  type="text" rows="5" maxLength="1000" required />
        <input type="submit" value="Submit"/>


        {submittedDetails.name}
        {submittedDetails.email}
        {submittedDetails.message}
      </form>
    )
  }
}

