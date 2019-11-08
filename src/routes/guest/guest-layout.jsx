import React, { Component } from 'react'
import './guest-layout.scss'
import { Icon } from '../../components/icon/icon'
import { customHistory } from '../../common/history'

export class GuestLayout extends Component {
  render() {
    const { content } = this.props

    return (
      <div className='guest-layout'>
        <div className='guest-layout__header'>
          <div className='guest-layout__header--nav'>
            <p className='headline'>Create, maintain, publish, and share your CVs for free</p>
            <div className='login'>
              <Icon type='lock'/>
              <span onClick={() => customHistory.push('/login')}>Login / Signup</span>
            </div>
          </div>
          <div className='guest-layout__header--main'>
            <img src={require('../../assets/images/logo.png')} alt='logo' />
          </div>
        </div>
        <div className='guest-layout__content'>
          {React.isValidElement(content) && React.cloneElement(content)}
        </div>
        <div className='guest-layout__footer'>
          <p className='copyright'>CV Maker &copy; 2010 - 2019. All rights reserved Terms &amp; Privacy policy Contact</p>
        </div>
      </div>
    )
  }
}
