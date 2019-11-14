import React from 'react'
import './page-layout.scss'
import { Icon } from '../icon/icon'
import { customHistory } from '../../common/history'

export const PageLayout = ({ content, authenticated }) => {
  return (
    <div className='page-layout'>
      <div className='page-layout__header'>
        <div className='page-layout__header--nav'>
          <p className='headline'>Create, maintain, publish, and share your CVs for free</p>
          <div className='nav-items'>
            {authenticated ? (
              <>
                <div className='nav-item'>Hi User</div>
                <div className='nav-item'>Edit account</div>
                <div className='nav-item'>Logout</div>
              </>
            ) : (
              <div className='login'>
                <Icon type='lock'/>
                <span onClick={() => customHistory.push('/login')}>Login / Signup</span>
              </div>
            )}
          </div>
        </div>
        <div className='page-layout__header--main'>
          <img src={require('../../assets/images/logo.png')} alt='logo' />
        </div>
      </div>
      <div className='page-layout__content'>
        {React.isValidElement(content) && React.cloneElement(content)}
      </div>
      <div className='page-layout__footer'>
        <p className='copyright'>CV Maker &copy; 2010 - 2019. All rights reserved Terms &amp; Privacy policy Contact</p>
      </div>
    </div>
  )
}
