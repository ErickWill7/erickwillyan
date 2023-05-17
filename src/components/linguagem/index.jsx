import styles from "./style.module.css";
function linguagem({ linguagem, urlIcon }) {
  return (
    <div className={styles.container}>
      <div className={styles.foto}>{urlIcon}</div>
      <div className={styles.linguagem}>
        <p>{linguagem}</p>
      </div>
    </div>
  );
}

export default linguagem;
