import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../Context';


 class Contacts extends Component {

    // deleteContact =(id)=>{
    //     const { contacts } = this.state;

    //     const newContact = contacts.filter(contact => contact.id !== id);

    //     this.setState({
    //         contacts : newContact
    //     });
    // };

    render() {
        return(
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <React.Fragment>
                        <h1 className ="display-4 mb-2">
                            <span className="text-danger" >Contact</span> List 
                        </h1>
                        {contacts.map(contact => (//looping through the contact variable by using map
                            <Contact 
                            key = {contact.id}
                            contact = {contact} 
                            // deleteClickHandler = {this.deleteContact.bind(this,contact.id)}
                            // name = {contact.name} 
                            // email = {contact.email} 
                            // phone = {contact.phone}//instead of passing individual attribute coming from the contact object we can pass the whole contact object
                            />
                        ))}
                    </React.Fragment>
                    )
                }}
            </Consumer>
        )
 
         
        //const { contacts } = this.state;//get the contacts out from the state

    }
}

export default Contacts;