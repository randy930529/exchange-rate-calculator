"use client";

import { useExchangeRates } from "@/context/ExchangeRatesContext";
import Input from "./Input";

export default function InputAmount() {
  const { exchangeRates, updateExchangeRates } = useExchangeRates();
  const amount = exchangeRates.amount;

  return (
    <Input
      type="number"
      value={amount}
      onChange={(e) => updateExchangeRates({
          ...exchangeRates,
          amount: e.target.value,
        })}
      placeholder="0.00"
    />
  );
}
