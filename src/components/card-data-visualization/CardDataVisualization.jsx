import styles from "./CardDataVisualization.module.css";
import { CardDataContext } from "../../context/cardDataContext";

import { useContext } from "react";

export default function CardDataVisualization() {
  const {
    cardHolderNameCtx,

    cardNumberCtx,

    monthExpirationCtx,

    yearExpirationCtx,

    cvvCtx,
  } = useContext(CardDataContext);

  const cardNumberSplit = cardNumberCtx.split(" ");

  return (
    // front
    <div className={styles.divCardDataVisualization}>
      <div className={styles.frontVisualizationCard}>
        <div className={styles.cardLogo}></div>

        <div className={styles.cardInformations}>
          <div className={styles.cardNumber}>
            {cardNumberCtx == ""
              ? "0000 **** **** 0000"
              : cardNumberSplit[0] + " **** **** " + cardNumberSplit[3]}
          </div>

          <div className={styles.divCardNameAndExpDate}>
            <span>
              {cardHolderNameCtx == ""
                ? "FULANO DE TAL DA SILVA"
                : cardHolderNameCtx.toUpperCase()}
            </span>
            <span>
              {monthExpirationCtx == "" ? "00" : monthExpirationCtx}/
              {yearExpirationCtx == "" ? "00" : yearExpirationCtx}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.backVisualizationCard}>
        <div className={styles.divCvv}>{cvvCtx == "" ? "000" : cvvCtx}</div>
      </div>
    </div>
  );
}
