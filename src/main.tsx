// PACKAGE DEPENDENCIES
import * as React from 'react'
import { render } from 'react-dom'

// COMPONENTS
import App from '@components/App'

// STYLES (already imported in the entry point)
// import '@css/app.scss'

render(
    <App />,
    document.getElementById('app') as Element
)
