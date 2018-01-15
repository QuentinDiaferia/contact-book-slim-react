import React from 'react'
import Language from 'services/language/actions'

class Home extends React.Component {
    render() {
        return (
            <div className="Container">
                {Language.get('home', 'title-home')}
            </div>
        )
    }
}

export default Home
