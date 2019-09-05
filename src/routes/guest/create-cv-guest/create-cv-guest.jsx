import React, { Component } from 'react'
import classnames from 'classnames'
import './create-cv-guest.scss'
import { GuestLayout } from '../guest-layout'
import { Button } from '../../../components/button/button'
import { modals } from '../../../components/modals/modal-registry'
import { AddSection } from '../../../components/modals/add-section/add-section'
import { FormBasicInformation } from '../../../components/forms/form-basic-information'
import { FormWorkExperience } from '../../../components/forms/form-work-experience'

export class CreateCVGuest extends Component {
  state = {
    options: [{
      name: 'Basic information',
      original: true,
      selected: true
    }, {
      name: 'Work experience',
      original: true,
      selected: false
    }, {
      name: 'Qualifications',
      original: true,
      selected: false
    }, {
      name: 'Education',
      original: true,
      selected: false
    }, {
      name: 'Interests',
      original: true,
      selected: false
    }, {
      name: 'References',
      original: true,
      selected: false
    }]
  }

  attemptAddSection = () => {
    modals.open({
      content: <AddSection onConfirm={(section, special) => {
        this.setState({ options: [...this.state.options, {
          name: section,
          original: false,
          special: special
        }] }, () => {
          modals.close()
        })
      }} />
    })
  }

  renderSortableOptions = (options) => {
    return (
      <ul className='sortable-options'>
        {options.map((option, idx) => (
          <li className={classnames('option', option.selected && 'selected')} key={idx} onClick={() => {
            this.setState({options: options.map((innerOption, innerIdx) => {
              innerOption.selected = innerIdx === idx
              return innerOption
            })})
          }}>
            {option.name}
          </li>
        ))}
      </ul>
    )
  }

  renderForm = () => {
    let { options } = this.state
    options = options.filter(option => option.selected)
    const { name } = options[0]
    switch (name) {
      case ('Basic information'):
        return <FormBasicInformation title={name} />
      case 'Work experience':
        return <FormWorkExperience title={name} />
      default:
        return
    }
  }

  render() {
    const { options } = this.state

    return (
      <GuestLayout content={(
        <div className='create-cv-guest'>
          <p className='notice'>
            <strong>You are not logged in.</strong>
            You may download the resume, but to save for later editing, you will need to signup or login by clicking the 'Save' button (your CV will automatically be added to your account).
          </p>
          <div className='controls'>
            <Button type='help' text='Help' />
            <Button type='preview' text='Quick preview' />
            <Button type='save' text='Save' />
            <Button type='download' text='Download' />
          </div>
          <div className='main-form'>
            <div className='options'>
              {this.renderSortableOptions(options)}
              <Button type='add' className='add' text='Add a new section' onClick={this.attemptAddSection} />
              <p className='msg'>* Click and drag section names in the above list to reorder sections in your CV.</p>
              <p className='msg'>* If you leave the fields in a section empty, the section will not appear in your CV.</p>
            </div>
            {this.renderForm()}
          </div>
        </div>
      )} />
    )
  }
}
