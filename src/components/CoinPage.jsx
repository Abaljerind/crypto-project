import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
      console.log(res.data);
    });
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img className="mr-8 w-20" src={coin.image?.large} alt={coin.name} />
        <div>
          <p className="text-3xl font-bold">{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* left side */}
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                ${coin.market_data?.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-sm text-gray-500">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Votes Up Percentage</p>
              {coin.tickers ? (
                <p>{coin.sentiment_votes_up_percentage}%</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>

          <div className="text-text-accent flex justify-around p-8">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* description */}
      <div className="py-4">
        <p className="text-xl font-bold">About {coin.name}</p>
        <p>{coin.description?.en || "No description available."}</p>
      </div>
    </div>
  );
};

export default CoinPage;
