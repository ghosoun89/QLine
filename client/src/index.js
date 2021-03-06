import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './First Page Component/App';
import User from './User Component/User.jsx';
import Business from './Business Component/business.jsx';
import Profile from './User Component/Profile.jsx';
import { Router, Route, browserHistory } from 'react-router';
import Login from './First Page Component/popLogin.js';
import SignUp from './First Page Component/popSignUp.js';
import BusinessDashBord from './Business Component/businessDashBord.jsx';
import ContactUs from "./First Page Component/ContactUs.jsx";
import AdminDash from './First Page Component/AdminDashboard.jsx'
import FeaturePage from './First Page Component/FeaturesHomePage.jsx';
import FeaturePage1 from './First Page Component/FeaturesHomePage.1.jsx';
import FeaturePage2 from './First Page Component/FeaturesHomePage.2.jsx';
import FeaturePage3 from './First Page Component/FeaturesHomePage.3.jsx';
import ContactUsSection from './First Page Component/ContactUsSection.jsx';
import ContactUsSection1 from './First Page Component/ContactUsSection.1.jsx';
import ContactUsSection2 from './First Page Component/ContactUsSection.2.jsx';
import ContactUsSection3 from './First Page Component/ContactUsSection.3.jsx';
import SearchQueue from './User Component/SearchQueue'


// all router are presented here to be rendered directly tro the root file of the page/ html
// this page allow pages and functionality to move from page to page
// Router , Link and Browsehistory helps users to implement usage of the route
class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="/sign-in" exact component={Login} />
              <Route path="/sign-up" exact component={SignUp} />
            </Route>
              <Route path="/profile" exact component={Profile} />
              <Route path="/business" exact component={Business} />
              <Route path="/user" exact component={User} />
              <Route path="/BusinessDashBord/:queue_id" exact component={BusinessDashBord} />
              <Route path="/feature" exact component={FeaturePage}/>
              <Route path="/feature_" exact component={FeaturePage1}/>
              <Route path="/feature__" exact component={FeaturePage2}/>
              <Route path="/feature__1" exact component={FeaturePage3}/>
              <Route path="/ContactUs" exact component={ContactUs} />
              <Route path="/admin" exact component={AdminDash} />
              <Router path="/ContactUsSection" exact component={ContactUsSection}/>
              <Router path="/ContactUsSection_" exact component={ContactUsSection1}/>
              <Router path="/ContactUsSection__" exact component={ContactUsSection2}/>
              <Router path="/ContactUsSection__1" exact component={ContactUsSection3}/>
        </Router>
      );
    }
  }
  

ReactDOM.render(<HomePage/>, document.getElementById('root'));


