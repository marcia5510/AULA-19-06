import Header from './Components/Header'
import Post from './Components/Post'
import Siderbar from './Components/Sidebar'
import styles from './app.module.css'
import './styles.global.css'

function App() {

  return (
    <>
     <div>
      <Header/> 
      <div className={styles.wrapper}>
      <Siderbar/>
      <main>
        <Post/>
      </main>
      </div>
     </div>
    </>
  )
}

export default App
