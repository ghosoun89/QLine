
import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header';
import logo from '../style/qline1.jpg';
import logo1 from '../style/logo1.png';
import Login from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import { Grid } from '@material-ui/core';
import IntroPage from './IntroPage.js';
import FlipInfo from './flipInfo.jsx';
import AboutQLine from './AboutQLine.jsx';
import HowItWorks from './HowItWorks.jsx';
import KeyFeatures from './KeyFeatures.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import $ from 'jquery';
import HowQLine from './HowQLine.jsx';
import Loading from './Loading.js';

// Main Render of the components that displays all the component used in our project
// we use stateless functions also for toggling signIn and signUp pages for better UI experience
// Basic event handling has been Introduced as well 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSignUp: false,
      isOpenSignIn: false,
      loading: false
    };
  }

  // function that handles messages in chat box
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    $.ajax({
      url: '/customer-message',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        message: `${newMessage}`
      }),
      success: (res) => {
      console.log("Thank you, we will be in touch")
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // Welcoming message in our app
  componentDidMount() {
    addResponseMessage("Welcome to QLine chat!");
    setTimeout(()=> {
      this.setState({
        loading: !this.state.loading
      })
    }, 3000)
  }

  // sign up toggle or modal effect function
  toggleSignup = () => {
    this.setState({
      isOpenSignUp: !this.state.isOpenSignUp,
      isOpenSignIn: false
    });
  }

  // login toggle or modal effect function
  toggleLogin = () => {
    this.setState({
      isOpenSignIn: !this.state.isOpenSignIn,
      isOpenSignUp: false
    });
  }

  // every component in this folder is presented in this page as this is the page where user
  // will experience UI and all of the information will be presented in this page
  // learning all the steps and ways to use our app will be here
  render() {
    return (
      <Grid>
          <Loading/>
            {this.state.loading &&
                <Grid>
                  <Grid className="container center">
                    <IntroPage toggleSignup={this.toggleSignup}/>
                    <Header logo={logo} toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
                  </Grid>
                  <Grid>
                    <FlipInfo/>
                    <AboutQLine toggleSignup={this.toggleSignup} />
                    <HowItWorks/>
                    <KeyFeatures/>
                  </Grid>
                    <Widget handleNewUserMessage={this.handleNewUserMessage} profileAvatar={logo1}
                    color={"#aa1256"}
                    title="QLine Queue Management System"
                    subtitle="Your Queue Our Service"/>
                    <HowQLine/>
                    <ContactUs/>
                    <Footer/>
                    <Login show={this.state.isOpenSignIn} onClose={this.toggleLogin}></Login>
                    <SignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></SignUp>
            </Grid>}
      </Grid>
    );
  }
}

export default App;

