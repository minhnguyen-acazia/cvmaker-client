import React, { Component } from 'react'
import classnames from 'classnames'
import './cv-creator.scss'
import { Button } from 'components/button/button'
import { modals } from 'components/modals/modal-registry'
import { ResumeOptions } from 'components/modals/resume-options/resume-options'
import { FormBasicInformation } from 'components/forms/form-basic-information'
import { FormWorkExperience } from 'components/forms/form-work-experience'
import { FormEducation } from 'components/forms/form-education'
import { FormSkills } from 'components/forms/form-skills'
import { AddSkill } from 'components/modals/add-skill/add-skill'
import { SkillCategories } from 'common/static-data'

export class CVCreator extends Component {
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
    },
    resumeType: ''
  }

  componentWillUnmount() {
    const { forms: { basicInformation} } = this.state
    if (basicInformation.data.previewImage) {
      // Revoke data uris to avoid memory leaks
      URL.revokeObjectURL(basicInformation.data.previewImage)
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

  addSkill = (skillCategoryId) => {
    modals.open({
      content: <AddSkill onConfirm={(skill) => {
        const { forms: { skills } } = this.state
        const data = skillCategoryId
          ? skills.data.map(n => {
            if (n.id === skillCategoryId) n.skills.push({ name: skill, value: '' })
            return n
          })
          : [...skills.data, { name: skill, value: '' }]
        this.setState({ forms: {
          ...this.state.forms,
          skills: { ...this.state.forms.skills, data }
        }}, () => modals.close())
      }} />
    })
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

  handleImageUpload = (imageFile) => {
    const { forms } = this.state

    let previewImage = forms.basicInformation.data.previewImage
    // Revoke data uris to avoid memory leaks
    if (previewImage) URL.revokeObjectURL(previewImage)
    // Create data uris for previewing
    previewImage = URL.createObjectURL(imageFile)

    forms.basicInformation.data.previewImage = previewImage
    forms.basicInformation.data.image = imageFile
    this.setState({ forms })
  }

  onSelectResumeType = (resumeId) => {
    // update skill categories after selecting a resume type
    let skillCategories = SkillCategories[resumeId]
    if (skillCategories.length > 0) {
      skillCategories = skillCategories.map(n => ({
        ...n,
        skills: []
      }))
    }

    this.setState({ 
      resumeType: resumeId,
      forms: {
        ...this.state.forms,
        skills: {
          ...this.state.forms.skills,
          data: skillCategories
        }
      }
    })
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
    let { forms, resumeType } = this.state
    const { authenticated } = this.props

    forms = Object.keys(forms)
      .map(type => forms[type])
      .filter(form => form.selected)
    const { id, name, data } = forms.length > 0 ? forms[0] : this.state.forms.workExperience

    switch (id) {
      case 'basicInformation':
        return <FormBasicInformation title={name} data={data} handleInputChange={this.handleInputChange} handleImageUpload={this.handleImageUpload} authenticated={authenticated} />
      case 'workExperience':
        return <FormWorkExperience title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      case 'education':
        return <FormEducation title={name} data={data} handleInputChange={this.handleInputChange} addEntry={this.addEntry} deleteEntry={this.deleteEntry} />
      case 'skills':
        return <FormSkills title={name} data={data} resumeType={resumeType} addSkill={this.addSkill} handleInputChange={this.handleInputChange} />
      default:
        return null
    }
  }

  render() {
    const { forms } = this.state
    const { authenticated } = this.props
    console.log('forms', forms)

    return (
      <div className='cv-creator'>
        {authenticated ? (
          <h1>My CV</h1>
        ) : (
          <p className='notice'>
            <strong>You are not logged in.</strong>
            You may download the resume, but to save for later editing, you will need to signup or login by clicking the 'Save' button (your CV will automatically be added to your account).
          </p>
        )}
        <div className='controls'>
          <Button text='Select a resume' onClick={() => modals.open({ content: <ResumeOptions forms={forms} select selectResumeType={this.onSelectResumeType} /> })} />
          <Button type='help' text='Help' />
          <Button type='preview' text='Quick preview' onClick={() => modals.open({ content: <ResumeOptions forms={forms} preview /> })} />
          <Button type='save' text='Save' />
          <Button type='download' text='Download' onClick={() => modals.open({ content: <ResumeOptions forms={forms} download /> })} />
        </div>
        <div className='main-form'>
          <div className='options'>
            {this.renderSortableOptions(forms)}
          </div>
          {this.renderForm()}
        </div>
      </div>
    )
  }
}
