import React from 'react';

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

  render(){
    return(
      <div>
        Successful submission: <br />
        Name: {this.props.contactDetails.name} <br />
        Email: {this.props.contactDetails.email} <br />
        Message: {this.props.contactDetails.message} <br />
      </div>
    )
  }
}