import styles from "./CompleteState.module.css";
import { Button } from "primereact/button";
import imgComplete from "../../../assets/icons/icon-complete.svg"

function CompleteState() {
  return (
    <div className={styles.content}>
      <div className={styles.divCompleteState}>
      <img src={imgComplete} alt="image complete rounded" width={80} />
        <div className={styles.centralMessage}>
            <span className={styles.titleMessage}>THANK YOU!</span>
            <span className={styles.message}>We've added your card details</span>
        </div>
        <Button
          className={styles.buttonContinue}
          label="Continue"
          onClick={() => window.location.reload()}
        />
      </div>
    </div>
  );
}

export default CompleteState;
