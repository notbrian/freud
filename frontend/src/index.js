import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { HashRouter, Route } from 'react-router-dom'

function app () {
  return (
    <HashRouter>
      <div>
        <Route component={App} />
      </div>
    </HashRouter>
  )
}

render(app(), root)
