const apiUrl = process.env.API_URL as string;
const apiKey = process.env.API_ACCESS_KEY as string;
const revalidate = (60 * 10) as number;

type ResType = {
  success: boolean;
  rate: number;
  result: number;
};

type PropsType = {
  from: string;
  to: string;
  amount: number;
};

const FETCH_URL = (props: PropsType) =>
  `${apiUrl}convert?access_key=${apiKey}&from=${props.from}&to=${props.to}&amount=${props.amount}`;

export async function useCurrencyExchange(props: PropsType) {
  try {
    return await fetch(FETCH_URL(props), {
      next: { revalidate },
    }).then<ResType>((res) => res.json());
  } catch (error) {
    console.error("Error converting amount:", error);
  }
}
