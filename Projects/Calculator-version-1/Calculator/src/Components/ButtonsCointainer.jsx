import styles from "./ButtonsCointainer.module.css"

const  ButtonsCointainer =()=>{
    
    const buttonNames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return  <div className={styles.buttonContainer}>
        {buttonNames.map(bottonName=><button className={styles.button}>{bottonName}</button>)}
        
        
        

      </div>
   
}

export default ButtonsCointainer