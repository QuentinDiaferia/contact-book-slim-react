import React from 'react'
import Language from 'services/language'

export default class Home extends React.Component {
    render() {
        return (
            <div className="Container">
                {Language.get('home', 'title-home')}
            </div>
        )
    }
}
