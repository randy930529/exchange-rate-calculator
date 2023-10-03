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
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Exchange Rate
              </span>{" "}
              Calculator
            </h1>

            <InputAmount />
            <ListOfCurrenciesOption
              key={"ListFromCurrency"}
              name={"fromCurrency"}
              text={"Select the currency of origin"}
            />
            <ListOfCurrenciesOption
              key={"ListToCurrency"}
              name={"toCurrency"}
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
