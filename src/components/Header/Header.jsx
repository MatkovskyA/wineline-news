import { FormatDate } from "../../helpers/formatDate";
import styles from "./style.module.css"

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>All NEWS</h1>
      <p className={styles.date}>{FormatDate(new Date())}</p>
    </header>
  )
}
