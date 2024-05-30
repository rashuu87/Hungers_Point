import Search from '../Search/Search';
import styles from './Header.module.css';


function Header() {
  return (
    <header className={styles.head}>
      <img src="./images/logo.png" alt="logo" className={styles.logo}/>
      <Search/>
      <div className={styles.menu1}>
      <ul className={styles.menu}>
            <li>Home</li>
            <li>Offer</li>
            <li>Cart</li>
            <li>User</li>
        </ul>
      <span>Login</span>
      </div>
    </header>
  )
}

export default Header
