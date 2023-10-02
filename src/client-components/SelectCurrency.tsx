"use client";

import React, { useState } from "react";
import Select from "./Select";

export default function SelectCurrency({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currency, setCurrency] = useState("");

  return (
    <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      {children}
    </Select>
  );
}
