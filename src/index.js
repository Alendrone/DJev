import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DJEvMusic from './views/dj-ev-music'
import Listen from './views/listen'
import Bookings from './views/bookings'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DJEvMusic} exact path="/" />
        <Route component={Listen} exact path="/listen" />
        <Route component={Bookings} exact path="/bookings" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

var hmbr = document.getElementsByClassName('toggle')[0],
mnu = document.getElementsByClassName('drawer')[0],
exit = document.querySelector('.d-ev-music-icon02');

hmbr.addEventListener("click", () => {
if (hmbr.style.display === "none") return;
else mnu.style.display = "block";
},{once:false});
exit.addEventListener("click", () => {
if (exit.style.display === "none") return;
mnu.style.display = "none";
},{once:false});