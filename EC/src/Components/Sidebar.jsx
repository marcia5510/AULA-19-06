import style from './sidebar.module.css'

export default function Siderbar() {
  return (
    <aside className={style.sidebar}>
        <img className={style.cover} src="https://blog.goinfinite.net/wp-content/uploads/2021/09/Linguagens-de-programacao-1.png" alt="" />
        <div className={style.profile} >
         <img className={style.avatar}src="https://cdn-icons-png.flaticon.com/512/10061/10061736.png" alt="" />
         <strong>Seu nome</strong>
         <span>Cargo pretendido</span>
         
         <footer  className={style.respositorio}>
          <a href="">Seu repositorio </a>
         </footer>J
         
        </div>

    </aside>
  )
}
