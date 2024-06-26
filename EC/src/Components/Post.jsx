import style from './post.module.css'
import './post.module.css'
  import Comments from './Comments'


export default function Post() {
  return  (
    <article>
      <header>
          <div className={style.post}>
            <img className={style.author} src="" alt=""/>
            <div className={style.authorInfo}>
             <strong>Nome do Profissional</strong>
             <span>Cargo / Função</span>
            </div> 
          </div>
      </header>
      <div className={style.content}>
        <p>Sobre Você</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <p>Link Repositórios</p>
        <p>Último Projeto</p>
      </div>

    
      <div>

      <Comments/>

      </div>
     
    </article>
  
  )
}
