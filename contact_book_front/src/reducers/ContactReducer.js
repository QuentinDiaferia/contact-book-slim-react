const initialState = {
    contacts: [],
    currentContact: {}
}

const ContactReducer = function(state = initialState, action) {
    switch (action.type) {

        case 'GET_CONTACTS_SUCCESS':
            return {
                contacts: action.contacts,
                currentContact: {}
            }

        case 'GET_CONTACT_SUCCESS':
            return Object.assign({}, state, {
                currentContact: action.contact
            })

        case 'ADD_CONTACT':
            const addedContacts = state.contacts.slice()
            addedContacts.push(action.contact)
            return {
                contacts: addedContacts,
                currentContact: {}
            }

        case 'DELETE_CONTACT':
            const deletedContacts = state.contacts.filter(contact => {
                return contact.id !== action.id
            })
            return {
                contacts: deletedContacts,
                currentContact: {}
            }

        case 'EDIT_CONTACT':
            const updatedContacts = state.contacts.slice()
            const index = updatedContacts.findIndex(contact => contact.id === action.contact.id)
            updatedContacts[index] = action.contact
            return {
                contacts: updatedContacts,
                currentContact: {}
            }

        default:
            return state
    }
}

export default ContactReducer