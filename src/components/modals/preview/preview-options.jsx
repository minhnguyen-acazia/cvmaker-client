import React from 'react'
import './preview-options.scss'
import { modals } from '../modal-registry'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'
import { PreviewResume } from './preview-resume'
// Resume thumbnails
import PreviewElegantModern from '../../../assets/images/preview-elegant-modern.png'
import PreviewExperience from '../../../assets/images/preview-experience.png'
import PreviewMinimalAndClean from  '../../../assets/images/preview-minimal-and-clean.png'
import PreviewSimpleAndClean from '../../../assets/images/preview-simple-and-clean.png'
// Resume components
import { ResumeExperience } from '../../resumes/resume-experience/resume-experience'

export class PreviewOptions extends React.Component {
  state = {
    options: [
      {
        name: 'Elegant Modern',
        img: PreviewElegantModern,
        component: <></>,
        selected: false
      },
      {
        name: 'Experience',
        img: PreviewExperience,
        component: <ResumeExperience />,
        selected: false
      },
      {
        name: 'Minimal and Clean',
        img: PreviewMinimalAndClean,
        component: <></>,
        selected: false
      },
      {
        name: 'Simple and Clean',
        img: PreviewSimpleAndClean,
        component: <></>,
        selected: false
      }
    ]
  }

  onSelectOption = (idx) => {
    const { options } = this.state

    options.forEach((n, index) => {
      n.selected = false
      if (index === idx) n.selected = true 
    })

    this.setState({ options })
  }

  onPreviewResume = () => {
    const { options } = this.state
    modals.close()
    modals.open({
      content: <PreviewResume children={options.find(n => n.selected).component} />
    })
  }

  render() {
    const { options } = this.state

    return (
      <ModalBlueprint className='preview-options' onConfirm={() => this.onPreviewResume()}>
          Style
          <div style={{clear: 'both'}} />
          <div className='options'>
            {options.map((n, idx) => (
              <p>
                <label>{n.name}</label>
                <input type='radio' value='test' checked={n.selected} onChange={() => this.onSelectOption(idx)} />
              </p>
            ))}
          </div>
          <div className='preview-thumb'>
            {options.find(n => n.selected)
            ? <img src={options.find(n => n.selected).img} alt='preview' />
            : ''}
          </div>
      </ModalBlueprint>
    )
  }
}
