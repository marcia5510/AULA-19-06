import styles from "./comments.module.css"

export default function comments() {
  return (
<>
<div className={styles.comments}>
        <img
         src="https://colegioplanck.com.br/wp-content/uploads/2021/06/Colegio-Planck-Profissao-programador-o-que-faz-esse-profissional-tao-disputado-no-mercado-arte-Autores-Grupo-S2-Marketing-Freepik.jpg" alt="" />
        <div className={styles.commentsContent}>
          
        <header>
            <div>
                <strong>Experiência</strong>
            </div>
        </header>
        <p>Experiencias em sites de vendas,de informaçoes e estudos</p>
    </div>
    </div> 

<div className={styles.comments}>
<img
 src="https://colegioplanck.com.br/wp-content/uploads/2021/06/Colegio-Planck-Profissao-programador-o-que-faz-esse-profissional-tao-disputado-no-mercado-arte-Autores-Grupo-S2-Marketing-Freepik.jpg" alt="" />
<div className={styles.commentsContent}>
  
<header>
    <div>
        <strong>Formação Academica</strong>
    </div>
</header>
<p>Qualificação Front-End Senai</p>
</div>
</div> 

<div className={styles.comments}>
        <img
         src="https://colegioplanck.com.br/wp-content/uploads/2021/06/Colegio-Planck-Profissao-programador-o-que-faz-esse-profissional-tao-disputado-no-mercado-arte-Autores-Grupo-S2-Marketing-Freepik.jpg" alt="" />
        <div className={styles.commentsContent}>
          
        <header>
            <div>
                <strong>Cursos livres</strong>
            </div>
        </header>
        <p>Fotografia e Filmagem</p>
    </div>
    </div> 
    </>
  )
}
