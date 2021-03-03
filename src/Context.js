import React , {Component}from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) => {//action is executed once we clicked the delete.action is an object which has a type.Type is a capitalized string.
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)//payload is the data sent with the action
            };
            case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
            case 'UPDATE_CONTACT':
                return{
                    ...state,
                    contacts: [action.payload, ...state.contacts]
                };
            default:
                return state;
    }
}

export class Provider extends Component{
    state = {
        contacts: [],
         dispatch: action => //which is used to call an reducer
         this.setState(state => reducer(state,action))
    };

    async componentDidMount(){

        const res = 
        await axios.get('https://jsonplaceholder.typicode.com/users');
        
        this.setState({contacts: res.data});
    }
    render() {
        return(
            //the value inside th Context.Provider will be available thurough out the applictation(state)
            <Context.Provider value = {this.state}> 
                 {this.props.children}  
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;