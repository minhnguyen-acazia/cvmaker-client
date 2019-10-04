import React, { Component } from 'react'
import classnames from 'classnames'
import { EditorState } from 'draft-js'
import './create-cv-guest.scss'
import { GuestLayout } from '../guest-layout'
import { Button } from '../../../components/button/button'
import { modals } from '../../../components/modals/modal-registry'
import { AddSection } from '../../../components/modals/add-section/add-section'
import { PreviewOptions } from '../../../components/modals/preview/preview-options'
import { FormBasicInformation } from '../../../components/forms/form-basic-information'
import { FormWorkExperience } from '../../../components/forms/form-work-experience'
import { FormQualifications } from '../../../components/forms/form-qualifications'
import { FormNewSection } from '../../../components/forms/form-new-section'
import { FormNewSectionSpecial } from '../../../components/forms/form-new-section-special'

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
      data: [{ otherInformation: EditorState.createEmpty() }]
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
        this.setState({ types: [...this.state.types.map(n => {
          n.selected = false
          return n
        }), {
          name: section,
          original: false,
          selected: true,
          special: special,
          data: { [section]: EditorState.createEmpty() }
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

  handleInputChange = (e, type, idx, editorState, fieldName) => {
    const { types } = this.state
    const value = e ? e.target.value : editorState
    const name = e ? e.target.name : fieldName

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
    const { name, data, original, special } = types.length > 0 ? types[0] : this.state.types[0]
    switch (name) {
      case 'Basic information':
        return <FormBasicInformation title={name} data={data} handleInputChange={this.handleInputChange} />
      case 'Work experience':
        return <FormWorkExperience title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      case 'Qualifications':
        return <FormQualifications title={name} data={data} handleInputChange={this.handleInputChange} />
      default:
        return special
          ? <FormNewSectionSpecial title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
          : <FormNewSection title={name} data={data} handleInputChange={this.handleInputChange} deleteEntry={this.deleteEntry} original={original} />
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
            <Button type='preview' text='Quick preview' onClick={() => modals.open({ content: <PreviewOptions /> })} />
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
