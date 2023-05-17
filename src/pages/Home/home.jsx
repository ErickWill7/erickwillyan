import styles from "./style.module.css";
function Home() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.texto}>
          <p>Erick Willyan</p>
          <h1 className={styles.titulo1}>FullStack </h1>
          <h1 className={styles.titulo2}>Developer</h1>

          <div className={styles.botoes}>
            <a
              className={styles.button}
              href="https://www.linkedin.com/in/erick-willyan-dos-santos-cruz-370245237/"
              target="_blank"
            >
              Linkedln
            </a>
          </div>
        </div>
        {/* <div className={styles.foto}>
          <img src="./src/components/img/erickSobre.png" alt=" Pessoa" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
