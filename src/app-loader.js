import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { customHistory } from './common/history'
import { ModalRegistry } from './components/modals/modal-registry'

import { CreateCVGuest } from './routes/guest/create-cv-guest/create-cv-guest'
import { ResumeExperience } from './components/resumes/resume-experience/resume-experience'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={CreateCVGuest} />
            <Route exact path='/resume-experience' component={ResumeExperience} />
          </Switch>
        </Router>
        <ModalRegistry />
      </>
    )
  }
}
