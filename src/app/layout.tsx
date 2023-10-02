import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ExchangeRatesProvider } from "@/context/ExchangeRatesContext";
import Container from "@/client-components/Container";
import InputAmount from "@/client-components/InputAmount";
import { ListOfCurrenciesOption } from "./server-components/ListOfCurrenciesOption";
import ButtonConvert from "@/client-components/ButtonConvert";
import { Suspense } from "react";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange Rate Calculator",
  description: "Simple Exchange Rate Calculator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ExchangeRatesProvider>
          <Container>
            <h1>Exchange Rate Calculator</h1>
            <InputAmount />
            <ListOfCurrenciesOption
              key={"fromCurrency"}
              text={"Select the currency of origin"}
            />
            <ListOfCurrenciesOption
              key={"toCurrency"}
              text={"Select the destination currency"}
            />
            <ButtonConvert />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Container>
        </ExchangeRatesProvider>
      </body>
    </html>
  );
}
