import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { HashRouter, Route, Link } from 'react-router-dom';
import styles from '../styles/common.scss';

import Header from './header/header';
import ContactUsForm from './form/ContactUsForm';
import Success from './success/Success';

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

  componentWillMount(){
    // fill props from localStorage if available
    const localStorageData = localStorage.getItem('contact-details');

    if(localStorageData){
      this.props.setContactDetails(JSON.parse(localStorageData));
    }
  }

  componentWillUpdate(nextProps){
    // Watch for changes on Props, and store it to localStorage
    localStorage.setItem('contact-details', JSON.stringify(nextProps.contactDetails));
  }

  render(){
    return(
      <div className={styles.pageContainer}>
      <Header />
        <HashRouter>
          <div className={`container ${styles.contactUsForm}`} >
            <h1>Contact Us</h1>
            <Route exact path="/" component={() => (<ContactUsForm contactDetails={this.props.contactDetails} setContactDetails={this.props.setContactDetails}/>)} />
            <Route exact path="/success" component={() => (<Success contactDetails={this.props.contactDetails}/>)} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;