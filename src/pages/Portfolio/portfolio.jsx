import styles from "./style.module.css";
import Projeto from "../../components/Projeto";
import ProjetoInv from "../../components/ProjetoInv";

function Portfolio() {
  return (
    <div id="portifolio" className={styles.container}>
      <div className={styles.main}>
        <hr className={styles.linhaTop} />

        <div className={styles.titulo}>
          <h1>Projetos</h1>
        </div>

        <Projeto
          foto="../src/components/img/locadora.png"
          titulo="Projeto Locaodora"
          texto="Projeto escolar realizado em grupo, utilizando Csharp para desenvolver um aplicativo desktop, cujo o intuito é gerenciar uma locadora de carros. 
            Neste projeto foi utilizado o conceito CRUD para realizarmos as interações com o banco de dados(MySql), o Csharp foi utilizado no desenvovilmento do layout da aplicação e também realizar as conexões com o banco de dados. "
        />

        <ProjetoInv
          foto="../src/components/img/loja.png"
          titulo="Projeto Loja"
          texto='Projeto escolar realizado utilizando "PHP, MySql, HTML e CSS", o intuito deste projeto era realizar o gerenciamento de uma loja fictícia.
            Neste projeto o PHP foi utilizado para realizar a conexão e as interações(CRUD) com o banco de dados, o HTML e o CSS tinham como função estruturar e estilizar a aplicação web.
            Para o projeto ser executado foi utilizado o "Xampp", desta forma criando um servidor local.
            O banco de dados foi criado com MySql e possui três tabelas(Usuário, Produto e Contato), as informações destas tabelas são manipuladas através das páginas web desenvolvidas'
        />
        <Projeto
          foto="../src/components/img/cnpj.png"
          titulo="Consumo de API CNPJ"
          texto='Projeto escolar onde foi utilizado "PHP e JavaScript" para desenvolver uma aplicação "web" capaz de consumir uma API(json) da "web" de CNPJs e exibir algumas informações sobre o cnpj inserido.
          Para deselvover o layout foi utilizado a biblioteca "Bootstrap" para facilitar o desenvolvimento da página juntamente do "HTML e CSS". '
        />
        <ProjetoInv
          foto="../src/components/img/notas.png"
          titulo="Consumo de API Empresa"
          texto='Projeto escolar com foco no consumo de APIs, para tal consumo foi utilizado o "PHP". Para desenvolvimento do layout foi utilizado "HTML e CSS", para estruturar e estilizar a aplicação "web". 
            O arquivo do tipo "XML" utilizado para estruturar os dados das empresas foi desenvolvido por mim, para compreender esta forma de organizar os dados, desta forma tendo habilidades com diferentes formas de estrura de dados (xml e json).'
        />
      </div>
    </div>
  );
}

export default Portfolio;
