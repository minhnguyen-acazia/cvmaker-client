import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { customHistory } from './common/history'
import { ModalRegistry } from './components/modals/modal-registry'

import { CreateCVGuest } from './routes/guest/create-cv-guest/create-cv-guest'
import { LoginRoute } from './routes/guest/login/login-route'
import { ForgotPasswordRoute } from './routes/guest/forgot-password/forgot-password-route'
import { ResumeExperience } from './components/resumes/resume-experience/resume-experience'
import { ResumeSimpleAndClean } from './components/resumes/resume-simple-and-clean/resume-simple-and-clean'
import { ResumeElegantModern } from './components/resumes/resume-elegant-modern/resume-elegant-modern'

export default class App extends Component {
  render() {
    return (
      <>
        <Router history={customHistory}>
          <Switch>
            <Route exact path='/' component={CreateCVGuest} />
            <Route exact path='/login' component={LoginRoute} />
            <Route exact path='/forgot' component={ForgotPasswordRoute} />
            <Route exact path='/resume-experience' component={ResumeExperience} />
            <Route exact path='/resume-simple-and-clean' component={ResumeSimpleAndClean} />
            <Route exact path='/resume-elegant-modern' component={ResumeElegantModern} />
          </Switch>
        </Router>
        <ModalRegistry />
      </>
    )
  }
}
