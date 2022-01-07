import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back To React !!!</h1>
      <h2 className={styles.title}>Hello Amundsen</h2>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
