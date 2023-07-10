import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DJEvMusic from './views/dj-ev-music'
import Listen from './views/listen'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DJEvMusic} exact path="/" />
        <Route component={Listen} exact path="/listen" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
