 //since this form has props we have to use functional components
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type, 
    onChange,
    error  //all these things are coming from the
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} 
            className={classNames('form-control form-control-lg', {
                'is-invalid': error
            })}
            placeholder={placeholder}
            name={name} 
            value = {value}
            onChange={onChange}
            />
            {error && <div className="invalid-feedback">
                {error}
            </div>}
           
        </div>
    );   
}

TextInputGroup.propTypes = {
    error: PropTypes.string.isRequired,  
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,    
    onChange: PropTypes.func.isRequired
}

// TextInputGroup.defaultProps = {
//     type : 'text'
// }
export default TextInputGroup;