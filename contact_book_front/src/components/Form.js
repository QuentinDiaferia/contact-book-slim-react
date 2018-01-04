import React from 'react'
import PropTypes from 'prop-types'
import Language from '../services/Language'

function Form(props) {
    let title = Language.get('contacts', 'title-add-contacts'),
        defaultName = '',
        defaultPhone = ''
    if (props.defaultValue) {
        title = Language.get('contacts', 'title-edit-contacts')
        defaultName = props.defaultValue.name
        defaultPhone = props.defaultValue.phone
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

                    <label>{Language.get('contacts', 'label-name')}</label>
                    <input
                        name = "name"
                        onChange = {props.onChange}
                        defaultValue = {defaultName}
                        className = "form-control"
                    />

                    <label>{Language.get('contacts', 'label-phone')}</label>
                    <input
                        name = "phone"
                        onChange = {props.onChange}
                        defaultValue = {defaultPhone}
                        className = "form-control"
                    />

                </div>

                <button className = "btn btn-secondary">
                    {Language.get('general', 'action-submit')}
                </button>

            </fieldset>
        </form>
    )
}

Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    defaultValue: PropTypes.object,
    message: PropTypes.string,
}

export default Form
