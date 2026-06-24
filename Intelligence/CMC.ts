export async function getCMCQuotes() {

  const res = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY":
          process.env.CMC_API_KEY!
      }
    }
  );

  return res.json();
}
