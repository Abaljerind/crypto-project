import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Account from "./routes/Account";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinPage from "./components/CoinPage";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=true&price_change_percentage=24";

  useEffect(() => {
    axios
      .request(url)
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
  }, [url]);

  return (
    // ThemeProvider memuat style untuk tema window nya, yang secara otomatis mengganti tema nya sesuai keinginan kita
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
