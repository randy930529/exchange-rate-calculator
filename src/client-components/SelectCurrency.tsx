"use client";

import Select from "./Select";
import { useExchangeRates } from "@/context/ExchangeRatesContext";

export default function SelectCurrency({
  children,
  name,
}: {
  children?: React.ReactNode;
  name?: string;
}) {
  const { exchangeRates, updateExchangeRates } = useExchangeRates();
  const currency = exchangeRates[`${name}`];

  return (
    <Select
      value={currency}
      name={name}
      onChange={(e) =>
        updateExchangeRates({
          ...exchangeRates,
          [e.target.name]: e.target.value,
        })
      }
    >
      {children}
    </Select>
  );
}
