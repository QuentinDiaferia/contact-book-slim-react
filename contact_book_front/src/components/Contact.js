import React from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="Container">
            <fieldset>
                <legend>Contact: {props.contact.name}</legend>

                <div className="form-group">

                    <label>Name</label>
                    <p
                        name = "name"
                        className = "form-control-static"
                    >
                        {props.contact.name}
                    </p>

                    <label>Phone</label>
                    <p
                        name = "phone"
                        className = "form-control-static"
                    >
                        {props.contact.phone}
                    </p>

                </div>

                <Link
                    to = {'../edit/' + props.contact.id}
                    className = "btn btn-secondary"
                >
                    Edit
                </Link>

                <button
                    onClick = {props.onDelete}
                    className = "btn btn-secondary ml-1"
                >
                    Delete
                </button>

            </fieldset>
        </div>

    );
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Contact;
