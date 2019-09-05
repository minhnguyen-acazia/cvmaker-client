import React, { Component } from 'react'
import classnames from 'classnames'
import './create-cv-guest.scss'
import { GuestLayout } from '../guest-layout'
import { Button } from '../../../components/button/button'
import { modals } from '../../../components/modals/modal-registry'
import { AddSection } from '../../../components/modals/add-section/add-section'

export class CreateCVGuest extends Component {
  state = {
    options: [{
      name: 'Basic information',
      original: true
    }, {
      name: 'Work experience',
      original: true
    }, {
      name: 'Qualifications',
      original: true
    }, {
      name: 'Education',
      original: true
    }, {
      name: 'Interests',
      original: true
    }, {
      name: 'References',
      original: true
    }],
    activeIndex: 0
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

  renderSortableOptions = (options, activeIndex) => {
    return (
      <ul className='sortable-options'>
        {options.map((option, idx) => (
          <li className={classnames('option', idx === activeIndex && 'selected')} key={idx} onClick={() => {
            this.setState({activeIndex: idx})
          }}>
            {option.name}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { options, activeIndex } = this.state

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
              {this.renderSortableOptions(options, activeIndex)}
              <Button type='add' className='add' text='Add a new section' onClick={this.attemptAddSection} />
              <p className='msg'>* Click and drag section names in the above list to reorder sections in your CV.</p>
              <p className='msg'>* If you leave the fields in a section empty, the section will not appear in your CV.</p>
            </div>
          </div>
        </div>
      )} />
    )
  }
}
