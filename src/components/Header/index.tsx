import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from '../../../public/images/logo.svg'


export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a> 
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}