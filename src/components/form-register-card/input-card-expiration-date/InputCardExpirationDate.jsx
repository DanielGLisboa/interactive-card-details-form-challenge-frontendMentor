import styles from "./InputCardExpirationDate.module.css";
import { CardDataContext } from "../../../context/cardDataContext";

import { useState, useContext } from "react";

import { AutoComplete } from "primereact/autocomplete";

export default function InputCardExpirationDate({ required }) {
  const {
    setMonthExpirationCtx,

    setYearExpirationCtx,
  } = useContext(CardDataContext);

  const [monthExpiration, setMonthExpiration] = useState(null);
  const [months, setMonths] = useState([]);
  const [yearExpiration, setYearExpiration] = useState();
  const [years, setYears] = useState([]);

  const searchMonth = () => {
    setMonths([...Array(12).keys()].map((item) => item + 1));
  };

  const searchYear = () => {
    setYears([...Array(10).keys()].map((item) => item + 23));
  };

  return (
    <div className={styles.divInputs}>
      <label>EXP. DATE (MM/YY)</label>
      <div className={styles.inputsExpirationsDate}>
        <AutoComplete
          className={styles.inputExp}
          value={monthExpiration}
          suggestions={months}
          completeMethod={searchMonth}
          onChange={(e) => {
            setMonthExpiration(e.target.value);
            setMonthExpirationCtx(e.target.value);
          }}
          placeholder="MM"
          maxLength={2}
          required
        />

        <AutoComplete
          className={styles.inputExp}
          value={yearExpiration}
          suggestions={years}
          completeMethod={searchYear}
          onChange={(e) => {
            setYearExpiration(e.target.value);
            setYearExpirationCtx(e.target.value);
          }}
          placeholder="YY"
          maxLength={2}
          required
        />
      </div>
    </div>
  );
}
