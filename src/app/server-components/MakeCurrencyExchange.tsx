import { useCurrencyExchange } from "@/hooks/useCurrencyExchange";
import Result from "@/client-components/Result";

export async function MakeCurrencyExchange({
  from,
  to,
  amount,
}: {
  from: string;
  to: string;
  amount: number;
}) {
  const data = await useCurrencyExchange({ from, to, amount });
  if (data) {
    const { info, result } = data;

    return (
      <Result>
        <p>{`Converted amount: ${result} ${to}`}</p>
        <p>{`Exchange rate: 1 ${from} = ${info.rate} ${to}`}</p>
      </Result>
    );
  }

  return null;
}
