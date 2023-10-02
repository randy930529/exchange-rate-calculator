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
      onChange={(e) => updateExchangeRates(e.target.value)}
      placeholder="Ingresa la cantidad"
    />
  );
}
