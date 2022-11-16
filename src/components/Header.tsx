import styles from './Header.module.css'

import igniteLogo from '../assets/react.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo" />
    </header>
  )
}