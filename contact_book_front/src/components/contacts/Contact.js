import React from 'react';
import PropTypes from 'prop-types'

import Language from 'services/language/actions'

import { Link } from 'react-router-dom'

function Contact(props) {
    return (
        <div className="Container">
            <fieldset>
                <legend>{Language.get('contacts', 'title-contact')}: {props.contact.name}</legend>

                <div className="form-group">

                    <label>{Language.get('contacts', 'label-name')}</label>
                    <p
                        name = "name"
                        className = "form-control-static"
                    >
                        {props.contact.name}
                    </p>

                    <label>{Language.get('contacts', 'label-phone')}</label>
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
                    {Language.get('general', 'action-edit')}
                </Link>

                <button
                    onClick = {props.onDelete}
                    className = "btn btn-secondary ml-1"
                >
                    {Language.get('general', 'action-delete')}
                </button>

            </fieldset>
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Contact
