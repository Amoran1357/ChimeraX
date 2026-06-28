const BASE_URL = "https://pro-api.coinmarketcap.com";

const API_KEY = process.env.CMC_API_KEY!;

async function request(endpoint: string) {

  const response = await fetch(

    `${BASE_URL}${endpoint}`,

    {

      headers: {

        "X-CMC_PRO_API_KEY": API_KEY,

        Accept: "application/json"

      }

    }

  );

  if (!response.ok) {

    throw new Error(

      `CMC Error ${response.status}`

    );

  }

  return response.json();

}

export async function latestQuotes(

symbols:string[]=["BTC","ETH","BNB"]

){

return request(

`/v2/cryptocurrency/quotes/latest?symbol=${symbols.join(",")}`

);

}

export async function globalMetrics(){

return request(

"/v1/global-metrics/quotes/latest"

);

}
