import React, { Component } from 'react'
import classnames from 'classnames'
import './create-cv-guest.scss'
import { GuestLayout } from '../guest-layout'
import { Button } from '../../../components/button/button'
import { modals } from '../../../components/modals/modal-registry'
import { AddSection } from '../../../components/modals/add-section/add-section'
import { FormBasicInformation } from '../../../components/forms/form-basic-information'
import { FormWorkExperience } from '../../../components/forms/form-work-experience'
import { FormNewSection } from '../../../components/forms/form-new-section'

export class CreateCVGuest extends Component {
  state = {
    types: [{
      name: 'Basic information',
      original: true,
      selected: true,
      data: {}
    }, {
      name: 'Work experience',
      original: true,
      selected: false,
      data: [{}]
    }, {
      name: 'Qualifications',
      original: true,
      selected: false,
      data: {}
    }, {
      name: 'Education',
      original: true,
      selected: false,
      data: {}
    }, {
      name: 'Interests',
      original: true,
      selected: false,
      data: {}
    }, {
      name: 'References',
      original: true,
      selected: false,
      data: {}
    }]
  }

  attemptAddSection = () => {
    modals.open({
      content: <AddSection onConfirm={(section, special) => {
        if (!section) return modals.close()
        this.setState({ types: [...this.state.types, {
          name: section,
          original: false,
          special: special
        }] }, () => {
          modals.close()
        })
      }} />
    })
  }

  addEntry = (type) => {
    let { types } = this.state
    types = types.map(n => {
      if (n.name === type) n.data.push({})
      return n
    })
    this.setState({ types })
  }

  deleteEntry = (type, idx) => {
    let { types } = this.state
    if (idx >= 0) {
      types = types.map(n => {
        if (n.name === type) n.data.splice(idx, 1)
        return n
      })
    } else {
      types = types.filter(n => n.name !== type)
    }
    this.setState({ types })
  }

  handleInputChange = (e, type, idx) => {
    const { types } = this.state
    const value = e.target.value
    const name = e.target.name

    types.map(n => {
      if (n.name === type) {
        if (Array.isArray(n.data)) {
          n.data[idx][name] = value
        } else {
          n.data[name] = value
        }
      }
      return n
    })

    this.setState({ types })
  }

  renderSortableOptions = (types) => {
    return (
      <ul className='sortable-options'>
        {types.map((type, idx) => (
          <li className={classnames('option', type.selected && 'selected')} key={idx} onClick={() => {
            this.setState({types: types.map((innerType, innerIdx) => {
              innerType.selected = innerIdx === idx
              return innerType
            })})
          }}>
            {type.name}
          </li>
        ))}
      </ul>
    )
  }

  renderForm = () => {
    let { types } = this.state
    types = types.filter(option => option.selected)
    const { name, data } = types.length > 0 ? types[0] : this.state.types[0]
    switch (name) {
      case 'Basic information':
        return <FormBasicInformation title={name} data={data} handleInputChange={this.handleInputChange} />
      case 'Work experience':
        return <FormWorkExperience title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      default:
        return <FormNewSection title={name} deleteEntry={this.deleteEntry} />
    }
  }

  render() {
    const { types } = this.state

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
              {this.renderSortableOptions(types)}
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
