import React, { memo } from 'react'
import { Logo } from '@/presentation/components'
import Styles from './header-styles.scss'

const Header = (): JSX.Element => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span>Nailton</span>
          <a href="#">Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
