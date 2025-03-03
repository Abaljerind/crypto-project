import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);

  const { user } = UserAuth();

  // useEffect yang dijalankan berdasarkan perubahan pada email
  useEffect(() => {
    // mencoba mengakses data kita dari firestore (db)
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      // mengubah value state coins berdasarkan data dari doc (firestore) yang ada di watchList
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  // file path untuk mengakses data (coin) yang disimpan secara spesifik data nya berdasarkan user email yang login
  const coinPath = doc(db, "users", `${user?.email}`);

  // function untuk menghapus data (coin) dari watchlist
  const deleteCoin = async (passedId) => {
    try {
      // cara kerjanya:
      // karena tidak bisa menghapus data coin di dalam firebase secara langsung,
      // maka harus dilakukan di client server (frontend)
      // intinya adalah kita mengambil seluruh array yang ada di state coins,
      // lalu kita manipulasi arraynya dengan dihapus data coin nya,
      // lalu kita push lagi seluruh data coin nya kembali ke firebase.

      // result menyimpan data coins yang difilter / dihapus berdasarkan id nya
      const result = coins.filter((item) => item.id !== passedId);

      // di push lagi ke firestore dengan value dari result.
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to={"/"}>Click here to search coins.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin, index) => {
              return (
                <tr key={index + 1} className="h-[60px] overflow-hidden">
                  <td>{coin?.rank}</td>
                  <td>
                    <Link to={`/coin/${coin.id}`}>
                      <div className="flex items-center">
                        <img
                          className="mr-4 w-8"
                          src={coin?.image}
                          alt={coin?.id}
                        />
                        <div>
                          <p className="hidden sm:table-cell">{coin?.name}</p>
                          <p className="text-left text-sm text-gray-500">
                            {coin?.symbol.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="pl-8">
                    <AiOutlineClose
                      onClick={() => deleteCoin(coin.id)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
