import React from 'react'

export default (props) => {
    return (
        <div>
            <h1 className = "display-4">About Contact Manager</h1>
            <h3 className = "display-4">ID : {props.match.params.id}</h3>
            <p className = "lead">Simple App to Manage</p>
            <p className="text-secondary">Version 1.0.0</p>
         </div>
    )
}
