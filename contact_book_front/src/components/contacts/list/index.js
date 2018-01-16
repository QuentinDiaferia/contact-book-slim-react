import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import ContactApi from 'services/contacts'
import List from 'components/contacts/list/List'


class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.contacts.length === 0) {
            ContactApi.getContacts()
        }
    }

    render() {
        return (
            <List elements = {this.props.contacts} />
        )
    }
}

ListContainer.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = store => {
    return {
        contacts: store.contactsState.contacts
    }
}

export default connect(mapStateToProps)(ListContainer)
