import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <img className='logo' src={require('@img/logo.png')} />
                <h1 className='title'>React</h1>
            </div>
        )
    }
}
