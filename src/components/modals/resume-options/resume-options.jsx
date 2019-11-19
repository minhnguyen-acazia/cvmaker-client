import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import './resume-options.scss'
import { modals } from '../modal-registry'
import { ModalBlueprint } from '../modal-blueprint/modal-blueprint'
import { PreviewResume } from '../preview/preview-resume'
import { ResumeTypes } from 'common/static-data'
// Resume thumbnails
import PreviewElegantModern from '../../../assets/images/preview-elegant-modern.png'
import PreviewExperience from '../../../assets/images/preview-experience.png'
import PreviewMinimalAndClean from  '../../../assets/images/preview-minimal-and-clean.png'
import PreviewSimpleAndClean from '../../../assets/images/preview-simple-and-clean.png'
// Resume components
import { ResumeExperience } from '../../resumes/resume-experience/resume-experience'
import { ResumeSimpleAndClean } from '../../resumes/resume-simple-and-clean/resume-simple-and-clean'
import { ResumeElegantModern } from '../../resumes/resume-elegant-modern/resume-elegant-modern'

export class ResumeOptions extends React.Component {
  state = {
    options: [
      {
        id: ResumeTypes.ELEGANT_MODERN,
        name: 'Elegant Modern',
        img: PreviewElegantModern,
        component: <ResumeElegantModern data={this.props.forms} />,
        selected: false
      },
      {
        id: ResumeTypes.EXPERIENCE,
        name: 'Experience',
        img: PreviewExperience,
        component: <ResumeExperience data={this.props.forms} />,
        selected: true
      },
      {
        id: ResumeTypes.MINIMAL_AND_CLEAN,
        name: 'Minimal and Clean',
        img: PreviewMinimalAndClean,
        component: <></>,
        selected: false
      },
      {
        id: ResumeTypes.SIMPLE_AND_CLEAN,
        name: 'Simple and Clean',
        img: PreviewSimpleAndClean,
        component: <ResumeSimpleAndClean data={this.props.forms} />,
        selected: false
      }
    ],
    type: 'pdf',
    size: 'a4',
    loading: false
  }

  onSelectOption = (idx) => {
    const { options } = this.state

    options.forEach((n, index) => {
      n.selected = false
      if (index === idx) n.selected = true
    })

    this.setState({ options })
  }

  onSelectResume = () => {
    const { options } = this.state
    const { selectResumeType } = this.props
    const selectedOption = options.find(n => n.selected)
    selectResumeType(selectedOption.id)
    modals.close()
  }

  onPreviewResume = () => {
    const { options } = this.state

    modals.open({
      content: <PreviewResume
        children={options.find(n => n.selected).component}
      />
    })
  }

  onDownloadResume = () => {
    const { size } = this.state
    this.setState({ loading: true }, () => {
      const resume = document.querySelector('.mock-data').children[0]
      html2canvas(resume, {
        allowTaint: true
      }).then(canvas => {
        // create an image of the canvas
        const imgData = canvas.toDataURL('image/png')
        // create a pdf from that image and then download
        const pdf = new jsPDF('p', 'mm', size)
        const width = pdf.internal.pageSize.getWidth()
        const height = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
        pdf.save('Resume.pdf', { returnPromise: true }).then(this.setState({ loading: false }))
      })
    })
  }

  render() {
    const { options, type, size, loading } = this.state
    const { preview, download, select } = this.props

    return (
      <>
        <div className='mock-data'>
          {options.find(n => n.selected).component}
        </div>
        <ModalBlueprint className='resume-options' loading={loading} onConfirm={() => {
          if (preview) this.onPreviewResume()
          if (download) this.onDownloadResume()
          if (select) this.onSelectResume()
        }}>
          Style
          <div style={{clear: 'both'}} />
          <div className='options'>
            {options.map((n, idx) => (
              <p key={idx}>
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
          {download && (
            <>
              <div style={{clear: 'both'}} />
              <div className='download-option'>
                Type
                <br />
                <select value={type} onChange={(e) => { this.setState({ type: e.target.value }) }}>
                  <option value='pdf'>PDF</option>
                  <option value='html'>HTML</option>
                  <option value='txt'>TXT</option>
                </select>
              </div>
              <div className='download-option'>
                Page size
                <br />
                <select value={size} onChange={(e) => { this.setState({ size: e.target.value }) }}>
                  <option value='a4'>A4</option>
                  <option value='letter'>US Letter</option>
                </select>
              </div>
              <div style={{clear: 'both'}} />
              <div className='download-option' style={{opacity: 0.4}}>
                E-mail instead of downloading?
                <br />
                <input type='email' disabled />
              </div>
            </>
          )}
        </ModalBlueprint>
      </>
    )
  }
}
