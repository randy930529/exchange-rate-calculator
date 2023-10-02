"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type StateType = {
  amount: string;
  fromCurrency: string;
  toCurrency: string;
};

const initialState: StateType = {
  amount: "0",
  fromCurrency: "",
  toCurrency: "",
} as const;

export const ExchangeRatesContext = createContext({});

export const useExchangeRates = () => {
  const context = useContext(ExchangeRatesContext);
  if (!context)
    throw new Error(
      "useExchangeRates must be used within a ExchangeRatesProvider."
    );
  return context;
};

export const ExchangeRatesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [exchangeRates, setExchangeRates] = useLocalStorage(
    "exchangeRates",
    initialState
  );

  const createExchangeRates = (params: StateType) =>
    setExchangeRates({
      amount: params.amount,
      fromCurrency: params.fromCurrency,
      toCurrency: params.toCurrency,
    });

  const updateExchangeRates = (params: StateType) =>
    setExchangeRates({ ...params });

  const deleteExchangeRates = () => setExchangeRates({ ...initialState });

  return (
    <ExchangeRatesContext.Provider
      value={{
        exchangeRates,
        createExchangeRates,
        updateExchangeRates,
        deleteExchangeRates,
      }}
    >
      {children}
    </ExchangeRatesContext.Provider>
  );
};
