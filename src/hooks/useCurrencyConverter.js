import { useState } from "react";
import { convertCurrency, getCurrency } from "../utils/currency";
import { useExchangeRates } from "./useExchangeRates";

export function useCurrencyConverter() {
  const [amount, setAmount] = useState("100");
  const [fromCode, setFromCode] = useState("USD");
  const [toCode, setToCode] = useState("IRT");

  const { data, isLoading, isError, error, dataUpdatedAt } = useExchangeRates();

  const fromCurrency = getCurrency(fromCode);
  const toCurrency = getCurrency(toCode);

  const numericAmount = Number(amount);

  const isValidAmount =
    amount.trim() !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount >= 0;

  const result =
    data && isValidAmount && fromCurrency && toCurrency
      ? convertCurrency(numericAmount, fromCurrency, toCurrency, data.rates)
      : null;

  function swapCurrencies() {
    setFromCode(toCode);
    setToCode(fromCode);
  }

  return {
    amount,
    setAmount,
    fromCode,
    setFromCode,
    toCode,
    setToCode,
    fromCurrency,
    toCurrency,
    result,
    isValidAmount,
    swapCurrencies,
    isLoading,
    isError,
    error,
    updatedAt: data?.updatedAt ?? null,
    isStale: data?.isStale ?? false,
    dataUpdatedAt,
  };
}
