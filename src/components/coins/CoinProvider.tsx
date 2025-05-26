import Coins from "./Coins";


// get ssr coins dats
export default async function CoinProvider() {
  const res = await fetch(
    'https://main-api.ir-xe.com/api/public/modules/crypto/v1/client/listProduct?paginate=true&page=1&sort_key=&sort_type=&query=',
    {
      next: { revalidate: 350 },
    }
  );
  if (!res.ok) throw new Error('Failed to fetch coins');
  const {data} = await res.json();

  return (
    <Coins data={data} />
  );
}
