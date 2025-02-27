import axios from "axios";
import { useState, useEffect } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
      //   console.log(res.data.coins);
    });
  }, []);

  return (
    <div className="rounded-div text-text-primary my-12 py-8">
      <h1 className="py-4 text-2xl font-bold">Trending Coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trending.slice(0, 8).map((coin, index) => {
          return (
            <div
              className="rounded-div flex justify-between p-4 duration-300 ease-in-out hover:scale-105"
              key={index + 1}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <img
                    className="mr-4 rounded-full"
                    src={coin.item.small}
                    alt={coin.item.name}
                  />
                  <div>
                    <p className="font-bold">{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="mr-2 w-4"
                    src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                    alt="bitcoin image"
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
