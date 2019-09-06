import React from 'react'
import classnames from 'classnames'
import './modal-blueprint.scss'
import { Icon } from '../../icon/icon'
import { Button } from '../../button/button'
import { modals } from '../modal-registry'

export function ModalBlueprint({ children, className, onConfirm, onCancel, buttonLabels = ['OK', 'Cancel'] }) {
  return (
    <div className={classnames('modal-blueprint', className)}>
      <div className='modal-blueprint__header' onClick={() => {
        onCancel()
        modals.close()
      }}>
        <Icon type='cross' />
      </div>

      <div className='modal-blueprint__content'>
        {children}
      </div>

      <div className='modal-blueprint__footer'>
        <Button text={buttonLabels[0]} onClick={onConfirm} />
        <Button text={buttonLabels[1]} onClick={onCancel} />
      </div>
    </div>
  )
}

ModalBlueprint.defaultProps = {
  onConfirm: () => {},
  onCancel: () => {}
}
