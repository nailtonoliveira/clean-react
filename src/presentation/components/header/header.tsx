import React, { memo, useContext } from 'react'
import { Logo } from '@/presentation/components'
import Styles from './header-styles.scss'
import { ApiContext } from '@/presentation/contexts'
import { useHistory } from 'react-router-dom'

const Header = (): JSX.Element => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()

  const logout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentAccount(undefined)
    history.replace('/login')
  }

  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span>Nailton</span>
          <a data-testid="logout" href="#" onClick={logout}>Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
