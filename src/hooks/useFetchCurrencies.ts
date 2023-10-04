const apiUrl = process.env.API_URL as string;
const apiKey = process.env.API_ACCESS_KEY as string;

export async function useFetchCurrencies() {
  try {
    return await fetch(`${apiUrl}latest?access_key=${apiKey}`).then((res) =>
      res.json(),
    );
  } catch (error) {
    console.error("Error fetching currencies:", error);
  }
}
