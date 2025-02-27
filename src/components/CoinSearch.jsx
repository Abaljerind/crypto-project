import { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col justify-between pt-4 pb-6 text-center md:flex-row md:items-center md:text-right">
        <h1 className="my-2 text-2xl font-bold">Seach Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="bg-bg-primary border-bg-input w-full rounded-2xl border px-4 py-2 shadow-xl"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              // Kalau searchText isinya string kosong tampilkan semua value
              if (searchText === "") {
                return value;
              } else if (
                // Kalau value (yang diambil dari array coins) dicek namanya ada didalam state searchText maka tampilkan value tersebut
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            // data ditampilkan dengan map lewat komponen CoinItem yang telah difilter diatas
            .map((coin, index) => {
              return <CoinItem coin={coin} key={index + 1} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
