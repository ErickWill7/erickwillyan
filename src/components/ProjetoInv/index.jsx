import styles from "./style.module.css";

function ProjetoInv({ foto, titulo, texto }) {
  return (
    <div className={styles.container}>
      <div className={styles.nomeProjeto}>
        <h1>{titulo}</h1>
      </div>
      <div className={styles.componentes}>
        <div className={styles.texto}>
          <div className={styles.tituloTexto}>
            <h1>Conceitos</h1>
          </div>
          <div className={styles.conteudo}>
            <div className={styles.containerConteudo}>
              <p className={styles.p}>{texto}</p>
            </div>
          </div>
        </div>
        <div className={styles.foto}>
          <img src={foto} />
        </div>
      </div>
    </div>
  );
}

export default ProjetoInv;
