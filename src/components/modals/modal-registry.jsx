import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import classnames from 'classnames'
import './modal-default.scss'

export class ModalRegistry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }

    // Called when clicking on backdrop or X button:
    this.content = null
    this.modalClassName = null
    this.blur = null
    this.noRoundedCorners = null
    this.noShadow = null
    this.closeOnOverlayClick = true
    modals.open = this.onOpenModal
    modals.close = this.onCloseModal
    modals.submit = this.onSubmittingModal
  }

  onOpenModal = (options) => {
    // Create a callback to fire when modal is force-closed.
    this.onClosed = options.onClosed

    this.content = options.content
    this.closeOnOverlayClick = (options.closeOnOverlayClick !== false)
    this.modalClassName = options.modalClassName
    this.noRoundedCorners = options.noRoundedCorners
    this.noShadow = options.noShadow
    if (options.blur) {
      this.blur = options.blur
      document.getElementById('root').className = 'blur'
    }
    this.setState({ open: true })
  };

  onCloseModal = () => {
    document.getElementById('root').className = ''
    this.blur = false
    this.closeOnOverlayClick = true
    this.setState({ open: false })
  };

  onSubmittingModal = () => {
    this.closeOnOverlayClick = false
    this.forceUpdate()
  }

  render () {
    const { open } = this.state

    return (
      <>
        <Modal
          styles={{
            overlay: {
              backgroundColor: this.blur ? 'inherit' : 'rgba(0, 0, 0, 0.75)'
            }
          }}
          closeOnOverlayClick={this.closeOnOverlayClick}
          focusTrapped={false}
          focusTrapOptions={{}}
          classNames={{ modal: classnames('modal-registry', this.modalClassName, this.noRoundedCorners && 'no-rounded-corners', this.noShadow && 'no-shadow'), overlay: 'modal-registry-blur' }}
          showCloseIcon={false}
          open={open}
          onClose={() => {
            this.onCloseModal()
            if (this.onClosed) {
              this.onClosed()
              this.onClosed = null
            }
          }} center>
          {React.isValidElement(this.content) && React.cloneElement(this.content)}
        </Modal>
      </>
    )
  }
}

type ModalsProps = {
  open: Function,
  close: Function
}

export const modals: ModalsProps = {}
