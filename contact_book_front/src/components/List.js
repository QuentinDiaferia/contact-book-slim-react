import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function List(props) {
    const elements = []
    props.elements.forEach(element => {
        elements.push(
            <Link
                className = "list-group-item"
                key = {element.id} 
                to = {'contact/' + element.id}
            >
                {element.name}
            </Link>
        );
    })
    return (
        <div className="list-group">
            {elements}
        </div>
    );
}

List.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List;
