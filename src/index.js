import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import becomeHost from './pages/becomeHost';
import Signup from './pages/Signup'
import Home from './pages/Home'
import SuccessfulPosting from './pages/SuccessfulPosting'
import MyProfile from './pages/MyProfile'
import CreateProfile from './pages/CreateProfile'
import ChangeProfile from './pages/ChangeProfile'
import SingleProperty from './pages/SinglePropertyPage'
import SuccessfulBooking from './pages/SuccessfulBooking'
import MyBookings from './pages/MyBookings';
import FamilyApartments from './pages/FamilyApartments';
import ScrollToTop from './Components/ScrollToTop';
import PublicProfilePage from './pages/PublicProfilePage';
import {About}  from './pages/About'
import {ContactUs} from './pages/Contactme'
import MortgageCalculator from "./pages/MortgageCalculator";
import PersonalRooms from "./pages/PersonalRooms";
import {HomeEvaluation} from "./pages/HomeEvaluation"
import {Reviews} from "./pages/Reviews";
import {Testimonies} from './pages/Testimonies'


const routing = (
  
  <Router>
  <ScrollToTop/>
    <Route exact path="/" component={App}/>
    <Route exact path="/become-host" component={becomeHost}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/done-posting-home" component={SuccessfulPosting}/>
    <Route exact path="/my-profile" component={MyProfile}/>
    <Route exact path="/create-profile" component={CreateProfile}/>
    <Route exact path="/property" component={SingleProperty}/>
    <Route exact path="/done-booking" component={SuccessfulBooking}/>
    <Route exact path="/my-bookings" component={MyBookings}/>
    <Route exact path="/mortgage-calculator" component={MortgageCalculator}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/listings" component={PersonalRooms}/>
    <Route exact path="/contact-me" component={ContactUs}/>
    <Route exact path="/find-roommates" component={PublicProfilePage}/>
    <Route exact path="/change-profile" component={ChangeProfile}/>
    <Route exact path="/sellers" component={HomeEvaluation}/>
    <Route exact path="/reviews" component={Reviews}/>
    <Route exact path="/testimonies" component={Testimonies}/>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
