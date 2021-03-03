import React, { Component } from 'react'
import {Consumer} from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../Layouts/TextInputGroup';
import axios from 'axios';

class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors:{}
    };

    onChange =  (e) => {
        this.setState({[e.target.name ]: e.target.value}); 
    }
   
    onSubmit = async (dispatch, e) => {
        e.preventDefault();//prevent the submitting default values in the form

        const {name,email,phone} = this.state;

        //check for errors 
        if(name===''){
            this.setState({errors : {name:'Name is required'}});
            return;
        }
        if(email===''){
            this.setState({errors : {email:'Email is required'}});
            return;
        }
        if(phone===''){
            this.setState({errors : {phone: 'Phone is required'}});
            return;
        }
        const newContacts = {//when creating this objrct we don't need to assign values to the name variables because of we can get the values since both key and value is same
            
            name,
            email,
            phone
        }//we have to put a id.to do it we use uuid.it will auto generate an id
        console.log(newContacts); 

        const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContacts)
        dispatch({type:'ADD_CONTACT', payload: res.data});
       
          
        //redirect
        this.props.history.push('/');
         
    }

    render() { //this is a lifr cycle method.need to render the compnent
        const { name, email, phone,errors} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className = "card mb-3">
                <div className = "card-header">Add Contacts</div>
                <div className = "card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                       <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange = {this.onChange}
                        error={errors.name}
                       />
                       <TextInputGroup
                        label="Email"
                        name="email"
                        placeholder="Enter email..."
                        type = "email"                        
                        value={email}
                        onChange = {this.onChange}
                        error={errors.email}
                       />
                       <TextInputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Enter phone..."
                        value={phone}
                        onChange = {this.onChange}
                        error={errors.phone}
                       />                        
                        <input type="submit" value="Add Contacts" className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )

        
    }
}


export default AddContacts;