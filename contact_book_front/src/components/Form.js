import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
    let title = 'Add contact',
        defaultName = '',
        defaultPhone = '';
    if (props.defaultValue) {
        title = 'Edit contact';
        defaultName = props.defaultValue.name;
        defaultPhone = props.defaultValue.phone;
    }
    return (
        <form
            onSubmit = {props.onSubmit}
            className = "Container"
        >
            <fieldset>
                <legend>{title}</legend>

                {props.message ? (
                    <p className = "text-danger">
                         {props.message}
                    </p>
                ) : ''}

                <div className="form-group">

                    <label>Name</label>
                    <input
                        name = "name"
                        onChange = {props.onChange}
                        defaultValue = {defaultName}
                        className = "form-control"
                    />

                    <label>Phone</label>
                    <input
                        name = "phone"
                        onChange = {props.onChange}
                        defaultValue = {defaultPhone}
                        className = "form-control"
                    />

                </div>

                <button className = "btn btn-secondary">
                    Submit
                </button>

            </fieldset>
        </form>
    );
}

Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    defaultValue: PropTypes.object,
    message: PropTypes.string,
}

export default Form;
