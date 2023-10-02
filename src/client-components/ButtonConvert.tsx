"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { useExchangeRates } from "@/context/ExchangeRatesContext";

export default function ButtonConvert() {
  const { exchangeRates } = useExchangeRates();
  const { amount, fromCurrency, toCurrency } = exchangeRates;

  const router = useRouter();
  return (
    <Button
      onClick={() =>
        router.push(`/convert/${fromCurrency}/${toCurrency}/${amount}`)
      }
    >
      Convertir
    </Button>
  );
}
