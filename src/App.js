import React, { Component } from 'react'
import Contacts from './Component/Contacts/Contacts';
import Header from './Component/Layouts/Header';
import AddContacts from './Component/Contacts/AddContacts';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';//BrowserRouter - parent componenet which stores all other routers
import About from './Component/Pages/About';
import NotFound from './Component/Pages/NotFound';
import Test from './Component/Test/test';
import {Provider} from './Context';
import EditContacts from './Component/Contacts/EditContacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Component/Contacts/Contact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">        
          <Header branding = "Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path ="/" component={Contacts}/>
              <Route exact path ="/contact/add" component={AddContacts}/>
              <Route exact path ="/about/:id" component={About}/>
              <Route exact path ="/test" component={Test}/>
              <Route exact path ="/edit/:id" component={EditContacts}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
      </div>
      </Router>      
    </Provider>
     
  ); 
}

export default App;
