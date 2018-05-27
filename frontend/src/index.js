import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import routes from './routes'

function app () {
  return (
    <HashRouter>
      { routes() }
    </HashRouter>
  )
}

render(app(), root)
