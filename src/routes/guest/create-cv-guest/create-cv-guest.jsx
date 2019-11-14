import React, { Component } from 'react'
import classnames from 'classnames'
import './create-cv-guest.scss'
import { PageLayout } from '../../../components/page-layout/page-layout'
import { Button } from '../../../components/button/button'
import { modals } from '../../../components/modals/modal-registry'
import { ResumeOptions } from '../../../components/modals/resume-options/resume-options'
import { FormBasicInformation } from '../../../components/forms/form-basic-information'
import { FormWorkExperience } from '../../../components/forms/form-work-experience'
import { FormEducation } from '../../../components/forms/form-education'
// import { FormQualifications } from '../../../components/forms/form-qualifications'

export class CreateCVGuest extends Component {
  state = {
    forms: {
      basicInformation: {
        id: 'basicInformation',
        name: 'Basic information',
        selected: true,
        data: {}
      },
      workExperience: {
        id: 'workExperience',
        name: 'Work experience',
        selected: false,
        data: [{}]
      },
      education: {
        id: 'education',
        name: 'Education',
        selected: false,
        data: [{}]
      },
      skills: {
        id: 'skills',
        name: 'Skills',
        selected: false,
        data: [{}]
      }
    }
  }

  addEntry = (type) => {
    let { forms } = this.state
    Object.keys(forms).forEach(n => {
      if (n === type) forms[n].data.push({})
    })
    this.setState({ forms })
  }

  deleteEntry = (type, idx) => {
    let { forms } = this.state
    Object.keys(forms).forEach(n => {
      if (n === type) forms[n].data.splice(idx, 1)
    })
    this.setState({ forms })
  }

  handleInputChange = (e, type, idx) => {
    const { forms } = this.state
    const value = e.target.value
    const name = e.target.name

    Object.keys(forms).map(n => {
      if (n === type) {
        if (Array.isArray(forms[n].data)) {
          forms[n].data[idx][name] = value
        } else {
          forms[n].data[name] = value
        }
        return forms[n]
      }
    })

    this.setState({ forms })
  }

  renderSortableOptions = (forms) => {
    return (
      <ul className='sortable-options'>
        {Object.keys(forms).map((type) => (
          <li className={classnames('option', forms[type].selected && 'selected')} key={type} onClick={() => {
            Object.keys(forms).forEach(type => { forms[type].selected = false })
            forms[type].selected = true
            this.setState({ forms })
          }}>
            {forms[type].name}
          </li>
        ))}
      </ul>
    )
  }

  renderForm = () => {
    let { forms } = this.state
    forms = Object.keys(forms)
      .map(type => forms[type])
      .filter(form => form.selected)
    const { id, name, data } = forms.length > 0 ? forms[0] : this.state.forms.workExperience

    switch (id) {
      case 'basicInformation':
        return <FormBasicInformation title={name} data={data} handleInputChange={this.handleInputChange} />
      case 'workExperience':
        return <FormWorkExperience title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      case 'education':
        return <FormEducation title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      // case 'Qualifications':
      //   return <FormQualifications title={name} data={data} handleInputChange={this.handleInputChange} />
      
    }
  }

  render() {
    const { forms } = this.state
    // console.log(forms.education.data)

    return (
      <PageLayout content={(
        <div className='create-cv-guest'>
          <p className='notice'>
            <strong>You are not logged in.</strong>
            You may download the resume, but to save for later editing, you will need to signup or login by clicking the 'Save' button (your CV will automatically be added to your account).
          </p>
          <div className='controls'>
            <Button type='help' text='Help' />
            <Button type='preview' text='Quick preview' onClick={() => modals.open({ content: <ResumeOptions forms={forms} preview /> })} />
            <Button type='save' text='Save' />
            <Button type='download' text='Download' onClick={() => modals.open({ content: <ResumeOptions forms={forms} download /> })} />
          </div>
          <div className='main-form'>
            <div className='options'>
              {this.renderSortableOptions(forms)}
              {/* <Button type='add' className='add' text='Add a new section' onClick={this.attemptAddSection} />
              <p className='msg'>* Click and drag section names in the above list to reorder sections in your CV.</p>
              <p className='msg'>* If you leave the fields in a section empty, the section will not appear in your CV.</p> */}
            </div>
            {this.renderForm()}
          </div>
        </div>
      )} />
    )
  }
}
