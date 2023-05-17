import styles from "./style.module.css";

function Projeto({ foto, titulo, texto }) {
  return (
    <div className={styles.container}>

      <div className={styles.nomeProjeto}>
        <h1>{titulo}</h1>
      </div>
      <div className={styles.componentes}>
        <div className={styles.foto}>
          <img src={foto} />
        </div>
        <div className={styles.texto}>
          <div className={styles.tituloTexto}>
            <h1>Conceitos</h1>
          </div>

          <div className={styles.containerConteudo}>
            <p>{texto}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projeto;
