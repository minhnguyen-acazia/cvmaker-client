import React from 'react'
import './loading-overlay.scss'
import Spinner from 'react-spinkit'

export function LoadingOverlay() {
  return (
    <div className='loading-overlay'>
      <Spinner name='ball-spin-fade-loader' color='#07A9C5' />      
    </div>
  )
}
