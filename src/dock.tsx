import React from 'react'
import classNames from 'classnames'
import styles from './dock.module.scss'
import { DockProps } from './types'
import iconComputer from './icon-computer.svg'
import iconDiamond from './icon-diamond.svg'
import iconStar from './icon-star.svg'

export default function Dock({
  className,
  style
}: DockProps) {
  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      <div className={styles.dockItem}>
        <div className={classNames(styles.dockDot, styles.info)}/>
        <div className={styles.dockIcon} style={{ backgroundImage: `url(${iconComputer})` }}></div>
      </div>
      <div className={styles.dockItem}>
        <div className={classNames(styles.dockDot, styles.warn)}/>
        <div className={styles.dockIcon} style={{ backgroundImage: `url(${iconDiamond})` }}></div>
      </div>
      <div className={styles.dockItem}>
        <div className={classNames(styles.dockDot, styles.error)}/>
        <div className={styles.dockIcon} style={{ backgroundImage: `url(${iconStar})` }}></div>
      </div>
      <div className={styles.dockItem}>
        <div className={styles.dockDot}/>
        <div className={styles.dockIcon} style={{ backgroundImage: `url(${iconStar})` }}></div>
      </div>
    </div>
  )
}
