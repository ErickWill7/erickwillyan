import styles from "./style.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <li className={styles.itens}>
          {" "}
          <a
            className={styles.nomeLink}
            href="https://www.linkedin.com/in/erick-willyan-dos-santos-cruz-370245237/"
            target="_blank"
          >
            Erick Willyan
          </a>
        </li>
        <li className={styles.itens}>
          <a className={styles.nomeLink} href="#home">
            Home
          </a>
        </li>
        <li className={styles.itens}>
          <a className={styles.nomeLink} href="#sobre">
            Sobre mim
          </a>
        </li>
        <li className={styles.itens}>
          {" "}
          <a className={styles.nomeLink} href="#portifolio">
            Projetos
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
