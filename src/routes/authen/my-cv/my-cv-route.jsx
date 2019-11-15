import React, { Component } from 'react'
import './my-cv-route.scss'
import { PageLayout } from 'components/page-layout/page-layout'
import { Button } from 'components/button/button'
import { modals } from 'components/modals/modal-registry'
import { ResumeEdit } from 'components/modals/resume-edit/resume-edit'
import { Industries } from 'common/static-data'

export class MyCVRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cv: [
        {
          id: 'a',
          cvName: 'My CV',
          modifiedDate: '02 Oct 2019, 10:2 AM',
          industry: 'other'
        },
        {
          id: 'b',
          cvName: 'Copy of My CV',
          modifiedDate: '02 Oct 2019, 10:2 AM',
          industry: 'other'
        },
        {
          id: 'c',
          cvName: 'Copy of Copy of My CV',
          modifiedDate: '02 Oct 2019, 10:2 AM',
          industry: 'other'
        }
      ]
    }
  }

  onEditCV (item) {
    modals.open({
      content: <ResumeEdit {...item} onConfirm={(cvName, industry) => {
        const { cv } = this.state
        cv.forEach(n => {
          if (n.id === item.id) {
            n.cvName = cvName
            n.industry = industry
          }
        })
        this.setState({ cv }, () => modals.close())
      }} />
    })
  }

  onCreateCV () {
    
  }

  onCopyCV (item, idx) {
    const { cv } = this.state
    const newCV = {
      id: new Date().getTime(),
      cvName: `Copy of ${item.cvName}`,
      modifiedDate: item.modifiedDate,
      industry: item.industry
    }
    cv.splice(idx + 1, 0, newCV)
    this.setState({ cv })
  }

  onDeleteCV (idx) {
    const { cv } = this.state
    cv.splice(idx, 1)
    this.setState({ cv })
  }

  renderRow(item, idx) {
    return (
      <div key={item.id} className='table-item'>
        <div className='name'>
          <span>{item.cvName}</span>
          <div className='edit' onClick={() => this.onEditCV(item)}>
            {Industries.find(n => n.value === item.industry).label}
          </div>
        </div>
        <div className='last-modified'>{item.modifiedDate}</div>
        <div className='options'>
          <div className='left-side'>
            <Button type='share' text='Share' />
          </div>
          <div className='right-side'>
            <Button type='copy' text='Copy' onClick={() => this.onCopyCV(item, idx)} />
            <Button type='rename' text='Rename' onClick={() => this.onEditCV(item)} />
            <Button type='delete' text='Delete' onClick={() => this.onDeleteCV(idx)} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { cv } = this.state

    return (
      <PageLayout authenticated content={(
        <div className='my-cv'>
          <h1>Your CVs</h1>
          <Button text='Create a new CV' />
          <div className='cv-table'>
            <div className='table-header'>
              <div className='name'>Name</div>
              <div className='last-modified'>Last modified</div>
              <div className='options'>Options</div>
            </div>
            <div className='table-content'>
              {cv.map((n, idx) => this.renderRow(n, idx))}
            </div>
          </div>
        </div>
      )} />
    )
  }
}
