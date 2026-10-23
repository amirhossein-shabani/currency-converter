import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "../services/exchangeRate";

export function useExchangeRates() {
  return useQuery({
    queryKey: ["exchange-rates"],
    queryFn: getExchangeRates,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    retry: 2,
  });
}
