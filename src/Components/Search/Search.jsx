import styles from './Seacrh.module.css'

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='search' />
      <button>Search</button>
    </div>
  )
}

export default Search
