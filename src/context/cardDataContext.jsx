import { createContext, useState } from "react";

export const CardDataContext = createContext();

export const CardDataProvider = ({ children }) => {
  const [cardHolderNameCtx, setCardHolderNameCtx] = useState("");
  const [cardNumberCtx, setCardNumberCtx] = useState("");
  const [monthExpirationCtx, setMonthExpirationCtx] = useState("");
  const [yearExpirationCtx, setYearExpirationCtx] = useState("");
  const [cvvCtx, setCvvCtx] = useState("000");

  return (
    <CardDataContext.Provider
      value={{
        cardHolderNameCtx,
        setCardHolderNameCtx,

        cardNumberCtx,
        setCardNumberCtx,

        monthExpirationCtx,
        setMonthExpirationCtx,

        yearExpirationCtx,
        setYearExpirationCtx,

        cvvCtx,
        setCvvCtx,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};
