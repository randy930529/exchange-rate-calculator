import React from "react";
import { MakeCurrencyExchange } from "@/app/server-components/MakeCurrencyExchange";

const convertPage = ({
  params,
}: {
  params: { from: string; to: string; amount: number };
}) => {
  return (
    <MakeCurrencyExchange
      from={params.from}
      to={params.to}
      amount={params.amount}
    />
  );
};

export default convertPage;
