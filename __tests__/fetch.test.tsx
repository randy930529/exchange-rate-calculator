import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ListOfCurrenciesOption } from "@/app/server-components/ListOfCurrenciesOption";

describe("ListOfCurrenciesOption", () => {
  test("should convert amount when button is clicked", () => {
    render(
      <ListOfCurrenciesOption
        name="fromCurrency"
        text="Select the currency of origin"
      />,
    );

    const fromCurrencySelect = screen.getByRole("combobox", {
      name: "fromCurrency",
    });
    const convertButton = screen.getByRole("button", { name: "Convert" });

    fireEvent.change(fromCurrencySelect, { target: { value: "USD" } });
    fireEvent.click(convertButton);

    const convertedAmount = screen.getByText("Converted Amount:");
    const exchangeRate = screen.getByText("Exchange Rate:");

    expect(convertedAmount).toBeInTheDocument();
    expect(exchangeRate).toBeInTheDocument();
  });
});
