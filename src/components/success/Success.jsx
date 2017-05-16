import React from 'react';
import styles from './styles.scss';

export default class Success extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //Send user back to form if they have not completed it yet
    if(!this.props.contactDetails.name){
      window.location = "/";
    }
  }

  handleStartAgain(){
    //TODO: Should props be reset here? User may want to keep email address?
    //send user back to the first page
    window.location = "#/";
  }

  render(){
    return(
      <div className={`col-md-6 ${styles.success}`}>
        <h2> Thank you for your submission</h2>
        <div className={styles.successDetails}>
          Here is a summary of the details you provided:
          <p>
            <strong>Name:</strong> {this.props.contactDetails.name} <br />
            <strong>Email:</strong> {this.props.contactDetails.email} <br />
            <strong>Message:</strong> {this.props.contactDetails.message}
          </p>
          <button className={`btn ${styles.button}`} onClick={()=> this.handleStartAgain()}>Contact again</button>
        </div>
      </div>
    )
  }
}