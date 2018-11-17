import * as React from 'react'

export default class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <img className='logo' src={require('@img/logo.png')} />
                <h1 className='title'>React</h1>
            </div>
        )
    }
}
