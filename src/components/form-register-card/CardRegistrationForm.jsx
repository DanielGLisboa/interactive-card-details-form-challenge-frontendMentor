import styles from "./CardRegistrationForm.module.css";
import { CardDataContext } from "../../context/cardDataContext";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

import { useState, useContext } from "react";
import CompleteState from "./complete-state/CompleteState";

function CardRegistrationForm() {
  const [cadastred, setCadastred] = useState(false);

  const accept = () => {
    setCadastred(true);
  };

  const reject = () => {
    setCadastred(false);
  };

  function confirmRegister(validForm) {
    if (validForm == true) {
      confirmDialog({
        header: "Confirm register",
        message: "Are you sure you want to register this card?",
        accept,
        reject,
      });
    }
  }

  const {
    setMonthExpirationCtx,

    setYearExpirationCtx,

    setCardHolderNameCtx,

    setCardNumberCtx,

    setCvvCtx,
  } = useContext(CardDataContext);

  const [cardHolderNameValue, setCardHolderNameValue] = useState(null);
  const [cardHolderNameInvalid, setCardHolderNameInvalid] = useState(null);
  const [cardHolderNameErrorMsg, setCardHolderNameErrorMsg] = useState(null);

  const [cardNumberValue, setCardNumberValue] = useState(null);
  const [cardNumberInvalid, setCardNumberInvalid] = useState(null);
  const [cardNumberErrorMsg, setCardNumberErrorMsg] = useState(null);

  const [cvv, setCvv] = useState(null);
  const [cvvIvalid, setCvvIvalid] = useState(null);
  const [cvvErrorMsg, setCvvErrorMsg] = useState(null);

  const [monthExpiration, setMonthExpiration] = useState(null);
  const [monthExpirationInvalid, setMonthExpirationInvalid] = useState(null);
  const [months, setMonths] = useState([]);

  const [yearExpiration, setYearExpiration] = useState(null);
  const [yearExpirationInvalid, setYearExpirationInvalid] = useState(null);
  const [years, setYears] = useState([]);

  const [expirationDateErrorMsg, setExpirationDateErrorMsg] = useState(null);

  const searchMonth = () => {
    setMonths([...Array(12).keys()].map((item) => item + 1));
  };

  const searchYear = () => {
    setYears([...Array(10).keys()].map((item) => item + 23));
  };

  const validationForm = () => {
    let validCardHolderName,
      validCardNumber,
      validMonthExpiration,
      validYearExpiration,
      validCvv;

    if (document.querySelector("#cardHolderName").value == "") {
      setCardHolderNameInvalid(styles.inputInvalid);
      setCardHolderNameErrorMsg("Card Holder Name invalid *");
      validCardHolderName = false;
    } else {
      setCardHolderNameInvalid(styles.input);
      setCardHolderNameErrorMsg("");
      validCardHolderName = true;
    }

    if (document.querySelector("#cardNumber").value == "") {
      setCardNumberInvalid(styles.inputInvalid);
      setCardNumberErrorMsg("Card Number invalid *");
      validCardNumber = false;
    } else {
      setCardNumberInvalid(styles.input);
      setCardNumberErrorMsg("");
      validCardNumber = true;
    }

    if (
      monthExpiration == null ||
      monthExpiration > 12 ||
      monthExpiration <= 0 ||
      !Number.parseInt(monthExpiration)
    ) {
      setMonthExpirationInvalid(styles.inputExpInvalid);
      setExpirationDateErrorMsg("Expiration Date invalid *");
      validMonthExpiration = false;
    } else {
      setMonthExpirationInvalid(styles.inputExp);
      setExpirationDateErrorMsg("");
      validMonthExpiration = true;
    }

    if (
      yearExpiration == null ||
      yearExpiration > 32 ||
      yearExpiration < 23 ||
      !Number.parseInt(yearExpiration)
    ) {
      setYearExpirationInvalid(styles.inputExpInvalid);
      setExpirationDateErrorMsg("Exp. Date invalid *");
      validYearExpiration = false;
    } else {
      setYearExpirationInvalid(styles.inputExp);
      setExpirationDateErrorMsg("");
      validYearExpiration = true;
    }

    if (cvv == null || cvv.length < 3 || !Number.parseInt(cvv)) {
      setCvvIvalid(styles.inputInvalid);
      setCvvErrorMsg("Cvv invalid *");
      validCvv = false;
    } else {
      setCvvIvalid(styles.input);
      setCvvErrorMsg("");
      validCvv = true;
    }

    console.log(validMonthExpiration + " " + validMonthExpiration);
    if (
      (validCardHolderName == true) &
      (validCardNumber == true) &
      (validMonthExpiration == true) &
      (validYearExpiration == true) &
      (validCvv == true)
    ) {
      confirmRegister(true);
    }
  };

  return cadastred == false ? (
    <div className={styles.divCardRegistrationForm}>
      <form
        className={styles.cardRegistrationForm}
        onSubmit={(e) => {
          e.preventDefault();
          validationForm();
        }}
      >
        <div className={styles.divInputs}>
          <label htmlFor="cardHolderName">CARDHOLDER NAME</label>

          <InputText
            id="cardHolderName"
            className={classNames(styles.input, cardHolderNameInvalid)}
            value={cardHolderNameValue}
            onChange={async (e) => {
              setCardHolderNameValue(e.target.value);
              setCardHolderNameCtx(e.target.value);
            }}
            maxLength={34}
            autoFocus
            keyfilter={/[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/}
            placeholder="e.g. Fulano de Tal da Silva  "
          />
          <span className={styles.errorMessage}>{cardHolderNameErrorMsg}</span>
        </div>
        <div className={styles.divInputs}>
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <InputMask
            id="cardNumber"
            className={classNames(styles.input, cardNumberInvalid)}
            value={cardNumberValue}
            onChange={(e) => {
              setCardNumberValue(e.target.value);
              setCardNumberCtx(e.target.value);
            }}
            mask="9999 9999 9999 9999"
            placeholder="e.g. 0000 0000 0000 0000"
          />
          <span className={styles.errorMessage}>{cardNumberErrorMsg}</span>
        </div>
        <div className={styles.divLastGroupInputs}>
          <div className={styles.divInputsExp}>
            <label>EXP. DATE (MM/YY)</label>
            <div className={styles.inputsExpirationsDate}>
              <AutoComplete
                id="monthExpiration"
                inputClassName={classNames(
                  styles.inputExp,
                  monthExpirationInvalid
                )}
                value={monthExpiration}
                suggestions={months}
                completeMethod={searchMonth}
                onChange={(e) => {
                  setMonthExpiration(e.target.value);
                  setMonthExpirationCtx(e.target.value);
                }}
                placeholder="MM"
                maxLength={2}
              />

              <AutoComplete
                id="yearExpiration"
                inputClassName={classNames(
                  styles.inputExp,
                  yearExpirationInvalid
                )}
                value={yearExpiration}
                suggestions={years}
                completeMethod={searchYear}
                onChange={(e) => {
                  setYearExpiration(e.target.value);
                  setYearExpirationCtx(e.target.value);
                }}
                placeholder="YY"
                maxLength={2}
              />
            </div>
            <span className={styles.errorMessage}>
              {expirationDateErrorMsg}
            </span>
          </div>

          <div className={styles.divInputs}>
            <label htmlFor="inputCvv">CVV</label>
            <InputText
              id="inputCvv"
              className={classNames(styles.input, styles.inputCvv, cvvIvalid)}
              value={cvv}
              onChange={(e) => {
                setCvv(e.target.value);
                setCvvCtx(e.target.value);
              }}
              placeholder="000"
              maxLength={3}
              keyfilter={/[0-9]/}
            />
            <span className={styles.errorMessage}>{cvvErrorMsg}</span>
          </div>
        </div>

        <Button
          type="submit"
          className={styles.buttonConfirm}
          label="Confirm"
        />
        <ConfirmDialog />
      </form>
    </div>
  ) : (
    <CompleteState />
  );
}

export default CardRegistrationForm;
