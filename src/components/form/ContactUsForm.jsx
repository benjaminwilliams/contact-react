import React from 'react';
import axios from 'axios';
import formStyles from './styles.scss';

export default class ContactUsForm extends React.Component {

  constructor(props){
    super(props);
    this.getFieldValues = this.getFieldValues.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }


  // Reads the form and returns the entered values
  getFieldValues(){
    return {
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    };
  }

  // Save inputs to props
  // Would not use in the real world for a form this small, but useful to test localStorage
  handleSave(event){
    event.preventDefault();
    const fieldValues = this.getFieldValues();
    this.props.setContactDetails(fieldValues);
  }

  submitForm(fieldValues){
    // Using a free online hosted mock API.
    // Response should be the values passed in with a ID and timestamp added
    let APIUrl = "https://reqres.in/api";

    //TODO: Remove this killswitch, it is only for the demo
    // Stops the form sending to the correct API endpoint
    if(fieldValues.name === "error"){
      APIUrl = "https://";
    }
    // Using axious to post contact us form to API endpoint
    axios.post(APIUrl + '/contact-us', {
      name: fieldValues.name,
      email: fieldValues.email, message: fieldValues.message
    })
      .then(response =>{
        this.props.setContactDetails({
          name: response.data.name,
          email: response.data.email,
          message: response.data.message
        });
        window.location = '/#/success';
      })
      .catch(error =>{
        console.log('error: ' + error);
      })
  }

  // Push contact details to props
  handleSubmit(event){
    event.preventDefault();

    const fieldValues = this.getFieldValues();

    this.props.setContactDetails(fieldValues); // save details to props
    this.submitForm(fieldValues);
  }

  render(){
    // get contact details from props
    const contactDetails = this.props.contactDetails;
    return(
      <div className="row">
        <form onSubmit={this.handleSubmit} className={`col-md-6 ${formStyles.form}`}>
          <div className={`form-group ${formStyles.nameWrapper}`}>
            <label htmlFor="name" >Name:</label>
            <input id="name" ref="name" type="text" maxLength="256" required defaultValue={contactDetails.name} className="form-control"/>
          </div>

          <div className={`form-group ${formStyles.emailWrapper}`}>
            <label htmlFor="email" >Email Address:</label>
            <input id="email" ref="email" maxLength="256" required type="email" defaultValue={contactDetails.email} className="form-control"/>
          </div>
          <div className={`form-group ${formStyles.messageWrapper}`}>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" ref="message"  type="text" rows="5" maxLength="1000" required className="form-control" defaultValue={contactDetails.message}/>
          </div>
          <button className={`btn ${formStyles.saveButton}`} onClick={(e)=> this.handleSave(e)}>Save</button>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

