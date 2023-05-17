import styles from "./style.module.css";
import LinguagemBox from "../../components/linguagem";
import { FaReact, FaHtml5, FaCss3, FaPhp } from "react-icons/fa";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import profilePic from "../../assets/img/erickSobre.png";

function Sobre() {
  return (
    <div className={styles.container} id="sobre">
      <div className={styles.main}>
        <hr className={styles.linhaTop} />
        <div className={styles.infoContainer}>
          <div className={styles.informacaoBox}>
            <div className={styles.foto}>
              <img src={profilePic} alt="Erick" />
            </div>

            <div className={styles.informacao}>
              <div className={styles.infoConteudo}>
                <div className={styles.infoTitulo}>
                  <h1>Sobre mim</h1>
                </div>
                <p>
                  Olá meu nome é Erick, desenvolvedor <br></br>Júnior em busca
                  de sua primeira vaga.
                </p>
              </div>
              <table>
                <tr>
                  <td>
                    <label className={styles.propriedade}>Nome: </label>
                  </td>
                  <td>
                    <label className={styles.atributo}>Erick Willyan</label>
                  </td>
                </tr>
                {/* //////////////////////////*/}
                <tr>
                  <td>
                    <label className={styles.propriedade}>
                      Data de nascimento:{" "}
                    </label>
                  </td>
                  <td>
                    <label className={styles.atributo}>21/05/2006</label>
                  </td>
                </tr>
                {/* //////////////////////////*/}
                <tr>
                  <td>
                    <label className={styles.propriedade}>Endereço: </label>
                  </td>
                  <td>
                    <label className={styles.atributo}>
                      {" "}
                      Santana de parnaíba | SP{" "}
                    </label>
                  </td>
                </tr>
                {/* //////////////////////////*/}
                <tr>
                  <td>
                    <label className={styles.propriedade}>Email: </label>
                  </td>
                  <td>
                    <label className={styles.atributo}>
                      {" "}
                      erickwillyan2105@gmail.com
                    </label>
                  </td>
                </tr>
                {/* //////////////////////////*/}
                <tr>
                  <td>
                    <label className={styles.propriedade}>Contato: </label>
                  </td>
                  <td>
                    <label className={styles.atributo}>11 93930-6886</label>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.linguagemContainer}>
          <div className={styles.linguagensBox}>
            <div className={styles.linguagensTitulo}>
              <h1>Linguagens</h1>
            </div>
            <div className={styles.linguagemConteudo}>
              <p>
                Habilidades em desenvolver telas {<i>(mobile)</i>} e sites
                responsivos e funcionais utilizando linguagens para o{" "}
                <i>front-end</i> e o <i>back-end</i>.
              </p>
            </div>
            <div className={styles.linguagens}>
              <LinguagemBox linguagem="React js" urlIcon={<FaReact />} />
              <LinguagemBox linguagem="Csharp" urlIcon={<TbBrandCSharp />} />
              <LinguagemBox linguagem="Html" urlIcon={<FaHtml5 />} />
              <LinguagemBox linguagem="CSS" urlIcon={<FaCss3 />} />
              <LinguagemBox
                linguagem="React Native"
                urlIcon={<TbBrandReactNative />}
              />
              <LinguagemBox linguagem="MySql" urlIcon={<SiMysql />} />
              <LinguagemBox linguagem="PHP" urlIcon={<FaPhp />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
