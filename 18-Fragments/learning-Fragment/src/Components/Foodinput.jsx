import styles from "./Foodinput.module.css"
const Foodinput=({handleOnChange})=>{
   
  return <input className={styles.foodInput} type="text" placeholder="enter food item here"
  onChange={handleOnChange}
  />
}

export default Foodinput