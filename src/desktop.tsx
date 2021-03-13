import React from 'react'
import classNames from 'classnames'
import styles from './desktop.module.scss'
import { DesktopProps } from './types'
import Dock from './dock'
import Windows from './windows'

export default function Switch(props: DesktopProps) {
  const style = props.style || {}
  if (props.wallpaper) {
    style.backgroundImage = `url(${props.wallpaper})`
  }
  return (
    <div className={classNames(styles.wrapper, props.className)} style={style}>
      <Dock />
      <Windows />
    </div>
  )
}
