import styles from "./App.module.css"
import ButtonsCointainer from "./Components/ButtonsCointainer"
import Display from "./Components/Display"


function App() {
 

  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonsCointainer/>
      
    </div>
  )
}

export default App
