import Image from 'next/image'
import styles from './styles.module.css'
import logo from './logo.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Tech News logo"
        quality={100}
      />
    </header>
  )
}
