import React from 'react';

const Form = ({ handleChange, className, ...props}) => {
    return (
       <textarea 
            className={className} 
            onChange={handleChange} 
            {...props}
            required
        />
    );
}

export default Form;
