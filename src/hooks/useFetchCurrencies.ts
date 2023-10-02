const apiUrl = process.env.API_URL as string;
const apiKey = process.env.API_ACCESS_KEY as string;

export async function useFetchCurrencies() {
  try {
    // return await fetch(`${apiUrl}latest?access_key=${apiKey}`).then((res) =>
    //   res.json()
    // );
    return {
      success: true,
      timestamp: 1519296206,
      base: "USD",
      date: "2021-03-17",
      rates: {
        AUD: 1.566015,
        CAD: 1.560132,
        CHF: 1.154727,
        CNY: 7.827874,
        GBP: 0.882047,
        JPY: 132.360679,
        USD: 1.23396,
      },
    };
  } catch (error) {
    console.error("Error fetching currencies:", error);
  }
}
