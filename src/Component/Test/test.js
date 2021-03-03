import React, { Component } from 'react'

 class test extends Component {

    state = {
        title: '',
        id: ''
    }

    componentDidMount(){//runs after component is mounted
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())//get the data and map it ti json
        .then(data => this.setState({
            title: data.title,
            id: data.id
        }));
    }
    // componentWillMount(){//runs before the component mount
    //     console.log('componentWillMount...');
    // }

    // componentDidUpdate(){//runs only componenet is going to update:changing the state
    //     console.log('componentDidUpdate...');
    // }

    //  componentWillReceiveProps(nextProps, nextState){//when component receive new properties
    //     console.log('componentWillReceiveProps...');
    // }

    render() {

        const {title , id } = this.state;
        return (
            <div>
                <h1>{id}</h1>
                <p>{title}</p>
            </div>
        )
    }
}
export default test; 