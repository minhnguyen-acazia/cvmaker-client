import React, { Component } from 'react'
import './resume-edit.scss'
import { ModalBlueprint } from 'components/modals/modal-blueprint/modal-blueprint'
import { FormInput } from 'components/form-input/form-input'
import { Industries } from 'common/static-data'

export class ResumeEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cvName: '',
      industry: 'other'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { cvName, industry } = this.props
    this.setState({ cvName, industry })
  }

  handleChange(event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { cvName, industry } = this.state
    const { onConfirm } = this.props
    return (
      <ModalBlueprint
        className='resume-edit' buttonLabels={['Save', 'Cancel']}
        onConfirm={() => onConfirm(cvName, industry)}
      >
        <FormInput className='field' name='cvName' type='text' value={cvName} handleChange={this.handleChange} label='Enter a name for your CV' />
        <FormInput className='field' name='industry' type='select' value={industry} handleChange={this.handleChange} label='Industry' options={Industries} />
      </ModalBlueprint>
    )
  }
}
