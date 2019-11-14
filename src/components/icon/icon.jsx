import React from 'react'
import './icon.scss'
import classnames from 'classnames'

const ColorWhite = '#fff'
const ColorTurquoiseBlue = '#07A9C5'

export function Icon({type, className}) {
  const getIcon = type => {
    switch (type) {
      case 'lock':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <title>lock</title>
            <path fill={ColorWhite} d="M5 12h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM18 10v-3c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243v3h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM8 10v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828v3z"></path>
          </svg>
        )
      case 'magnifying-glass':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
            <title>magnifying-glass</title>
            <path fill={ColorTurquoiseBlue} d="M20.133 0c-6.539 0-11.86 5.32-11.86 11.863 0 1.566 0.32 3.051 0.871 4.418l-9.144 9.145 6.57 6.574 9.148-9.152c1.367 0.555 2.852 0.875 4.414 0.875 6.543 0 11.867-5.32 11.867-11.858 0.001-6.545-5.323-11.865-11.866-11.865zM20.133 19.727c-4.332 0-7.863-3.531-7.863-7.862 0-4.336 3.531-7.867 7.863-7.867 4.34 0 7.871 3.531 7.871 7.867 0 4.33-3.531 7.862-7.871 7.862z"></path>
          </svg>
        )
      case 'info':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
            <title>information-solid</title>
            <path fill={ColorTurquoiseBlue} d="M2.93 17.070c-1.884-1.821-3.053-4.37-3.053-7.193 0-5.523 4.477-10 10-10 2.823 0 5.372 1.169 7.19 3.050l0.003 0.003c1.737 1.796 2.807 4.247 2.807 6.947 0 5.523-4.477 10-10 10-2.7 0-5.151-1.070-6.95-2.81l0.003 0.003zM9 11v4h2v-6h-2v2zM9 5v2h2v-2h-2z"></path>
          </svg>
        )
      case 'save-disk':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
            <title>save-disk</title>
            <path fill={ColorTurquoiseBlue} d="M0 2c0-1.1 0.9-2 2-2h14l4 4v14c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-16zM5 2v6h10v-6h-10zM11 3h3v4h-3v-4z"></path>
          </svg>
        )
      case 'tick':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <title>tick</title>
            <path fill={ColorTurquoiseBlue} d="M16.972 6.251c-0.967-0.538-2.185-0.188-2.72 0.777l-3.713 6.682-2.125-2.125c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l4 4c0.378 0.379 0.888 0.587 1.414 0.587 0.092 0 0.185-0.006 0.277-0.020 0.621-0.087 1.166-0.46 1.471-1.009l5-9c0.537-0.966 0.189-2.183-0.776-2.72z"></path>
          </svg>
        )
      case 'plus':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <title>plus</title>
            <path fill={ColorTurquoiseBlue} d="M18 10h-4v-4c0-1.104-0.896-2-2-2s-2 0.896-2 2l0.071 4h-4.071c-1.104 0-2 0.896-2 2s0.896 2 2 2l4.071-0.071-0.071 4.071c0 1.104 0.896 2 2 2s2-0.896 2-2v-4.071l4 0.071c1.104 0 2-0.896 2-2s-0.896-2-2-2z"></path>
          </svg>
        )
      case 'cross':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
            <title>cross</title>
            <path fill={ColorTurquoiseBlue} d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        )
      case 'pencil':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <title>pencil</title>
            <path fill={ColorTurquoiseBlue} d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"></path>
          </svg>
        )
      case 'copy':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
            <title>copy</title>
            <path fill={ColorTurquoiseBlue} d="M20 8v-8h-14l-6 6v18h12v8h20v-24h-12zM6 2.828v3.172h-3.172l3.172-3.172zM2 22v-14h6v-6h10v6l-6 6v8h-10zM18 10.828v3.172h-3.172l3.172-3.172zM30 30h-16v-14h6v-6h10v20z"></path>
          </svg>
        )
      case 'rss':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
            <title>rss-alt</title>
            <path fill={ColorTurquoiseBlue} d="M32 32h-4.57c0-15.125-12.305-27.428-27.43-27.428v-4.572c17.641 0 32 14.355 32 32v0zM22.855 32h-4.57c0-10.082-8.207-18.285-18.285-18.285v-4.572c12.602 0 22.855 10.255 22.855 22.857v0zM13.715 32h-4.574c0-5.043-4.098-9.141-9.141-9.141v-4.574c7.562 0 13.715 6.153 13.715 13.715v0zM4.57 32c0-2.523-2.043-4.57-4.57-4.57v4.57h4.57z"></path>
          </svg>
        )
      default:
        return
    }
  }

  return (
    <div className={classnames('icon', className)}>
      {getIcon(type)}
    </div>
  )
}
