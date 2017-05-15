import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { HashRouter, Route, Link } from 'react-router-dom';

import ContactUsForm from './form/ContactUsForm';
import Success from './form/Success';

const DisplayForm = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ContactUsForm} />
        <Match exactly pattern="/success" component={Success} />
      </div>
    </BrowserRouter>
  )
};

// Add Props from redux here
function mapStateToProps(state){
  return{
    contactDetails: state.contactDetails
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}


class Main extends React.Component {

  constructor(){
    super();
  }


  render(){
    return(
      <HashRouter>
        <div>
          <Route exact path="/" component={() => (<ContactUsForm contactDetails={this.props.contactDetails} setContactDetails={this.props.setContactDetails}/>)} />
          <Route exact path="/success" component={Success} />
        </div>
      </HashRouter>
      // <div>
      //   <h1>Contact Us</h1>
      //   <p>Use the following form to contact us. We will reply as soon as possible</p>
      //   <ContactUsForm contactDetails={this.props.contactDetails} setContactDetails={this.props.setContactDetails} />
      // </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;