import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default function List(props) {
    const elements = []
    props.elements.forEach(element => {
        elements.push(
            <Link
                className = "list-group-item"
                key = {element.id} 
                to = {BASE_PATH + '/contacts/view/' + element.id}
            >
                {element.name}
            </Link>
        )
    })
    return (
        <div className="list-group">
            {elements}
        </div>
    )
}

List.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
}
