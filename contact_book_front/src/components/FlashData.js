import React from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Flash from 'services/flash/actions'

function FlashData(props) {
    if (props.flashData.message) {
        return (
            <div className="FlashData">
                <div className={"alert alert-" + props.flashData.type} role="alert">
                    {props.flashData.message}
                    <button type="button" onClick={props.dismissAlert} className="close">
                        <span>&times;</span>
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

FlashData.propTypes = {
    flashData: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
    return {
        flashData: store.flashData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dismissAlert: () => Flash.empty()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashData)
