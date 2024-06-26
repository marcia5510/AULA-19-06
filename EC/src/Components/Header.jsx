import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
      <strong>Curriculo Eletronico</strong>
    </header>
  )
}
