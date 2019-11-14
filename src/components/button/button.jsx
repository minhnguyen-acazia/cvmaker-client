import React, { Component } from 'react'
import classnames from 'classnames'
import './button.scss'
import { Icon } from '../icon/icon'

export class Button extends Component {
  getIcon() {
    const { type } = this.props
    switch (type) {
      case 'preview':
        return <Icon type='magnifying-glass' />
      case 'help':
        return <Icon type='info' />
      case 'save':
        return <Icon type='save-disk' />
      case 'download':
        return <Icon type='tick' />
      case 'add':
        return <Icon type='plus' />
      case 'delete':
        return <Icon type='cross' />
      case 'rename':
        return <Icon type='pencil' />
      case 'copy':
        return <Icon type='copy' />
      case 'share':
        return <Icon type='rss' />
      default:
        return
    }
  }

  render() {
    const { text, className, onClick } = this.props
    return (
      <div className={classnames('button', className)} onClick={onClick}>
        {this.getIcon()}
        <span>{text}</span>
      </div>
    )
  }
}
