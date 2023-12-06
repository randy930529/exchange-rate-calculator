import { useFetchCurrencies } from "@/hooks/useFetchCurrencies";
import SelectCurrency from "@/client-components/SelectCurrency";

export async function ListOfCurrenciesOption(props: {
  name: string;
  text: string;
}) {
  const data = await useFetchCurrencies();

  if (!data && !data.rates) return <SelectCurrency />;

  const currencies = Object.keys(data.rates || {}).map((code) => (
    <option key={code} value={code}>
      {code}
    </option>
  ));

  return (
    <SelectCurrency key={props.name} name={props.name}>
      <option value="">{props.text}</option>
      {currencies}
    </SelectCurrency>
  );
}
