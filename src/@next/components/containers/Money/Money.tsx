import React from "react";
import { IProps } from "./types";
import { getGeoInformation } from "../../../../core/utils";

export const Money: React.FC<IProps> = ({
  money,
  defaultValue,
  ...props
}: IProps) => {
  // TODO SEM - this should come from database.
  const supportedCurrency = ["INR", "AUD", "CAD", "USD"];
  const [currency, setCurrency] = React.useState("");

  React.useEffect(() => {
    async function getCurrency() {
      try {
        const result = (window as any)['geoInfo'] ? (window as any)['geoInfo'] : await getGeoInformation();
        setCurrency(result.currency);
      } catch (error) {
        console.log(error);
      }
    }
    if (currency === "") {
      getCurrency();
    }
  }, [currency]);

  let userCurrency = supportedCurrency.find((x) => x === currency);
  if (!userCurrency) {
    userCurrency = "USD";
  }

  if (!money) {
    return <span {...props}>{defaultValue}</span>;
  }
  return (
    <span {...props}>
      {money.currency && money.currency !== ""
        ? money.amount.toLocaleString(undefined, {
            currency: userCurrency,
            style: "currency",
          })
        : money.amount.toString()}
    </span>
  );
};

Money.displayName = "Money";
export default Money;
