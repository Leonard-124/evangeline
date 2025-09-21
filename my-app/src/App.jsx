


import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

import Home from "./Components/Home";
import Davinci from "./Components/Davinci";
import Explore from "./Components/Explore/Explore";
import Shop from "./Components/Shop";
import SignUp from "./Components/Security/SignUp";
import Login from "./Components/Security/Login";
import Logout from "./Components/Security/Logout";
import UserProfile from "./Components/Security/UserProfile";
import ProtectedRoute from "./Pages/ProtectedRoute";
import CallbackPage from "./Pages/CallbackPage";
import Crypto from "./Pages/Crypto";
import Card1 from "./Divolved/Blogs/Card1";
import Card2 from "./Divolved/Blogs/Card2";
import Card3 from "./Divolved/Blogs/Card3";
import Card4 from "./Divolved/Blogs/Card4";
import Buy from "./Divolved/Buy";
import Collect from "./Divolved/collect/Collect";
import Artcard from "./Divolved/collect/Artcard";
import Inventions from "./Divolved/Inventions";
import Card from "./Divolved/collect/Card";
import Artistinventor from "./Divolved/Artistinventor";
import Artinvent from "./Divolved/Artinvent";
import Whatsnew from "./Divolved/Whatsnew";
import Photography from "./Divolved/Photography";
import Editorial from "./Divolved/Editorial";
import Artworks from "./Divolved/Artworks";
import Categories from "./Shop/Categories/Categories";
import Art from "./Shop/Art/Art";
import Cart from "./Shop/Cart/Cart";
import Product from "./Shop/Productcard/Product";
import ProductCard from "./Shop/Productcard/ProductCard";
import Coming_soon from "./Components/Coming_soon";
import Checkout from "./Shop/Cart/Checkout/Checkout";
import Gigc from "./Shop/Art/Gigc";
//import Checkoutnow from "./Shop/Art/checkoutnow";
import Artpost from "./Components/Explore/Artacc/Artpost";
import Trade from "./Components/Explore/Tradeacc/Trade";
import Paystackredirect from "./Divolved/collect/Paystackredirect";
import Success from "./Shop/Cart/Success";
import Paymentfail from "./Shop/Cart/ProductList/Paymentfail";

const App = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // Auto-sync user to MongoDB after login/signup
  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getAccessTokenSilently();
        await axios.post(
          "http://localhost:3000/api/users/sync",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (err) {
        console.error("User sync failed:", err);
      }
    };

    if (isAuthenticated && user) {
      syncUser();
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    <Routes>
      {/* Public routes */}
      <Route index element={<Home />} />
      <Route path="/davinci" element={<Davinci />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="trade" element={<Trade />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/productcard" element={<ProductCard />}>
        <Route path="/productcard/product/:id" element={<Product />} />
      </Route>
      <Route path="Categories" element={<Categories />} />
      <Route path="artspost" element={<Artpost />} />
      <Route path="gigcard/:id" element={<Gigc />} />
      {/* <Route path="checkout/:id" element={<Checkoutnow />} /> */}
      <Route path="Cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="/payment-failed" element={<Paymentfail />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Crypto" element={<Crypto />} />
      <Route path="/ComingSoon" element={<Coming_soon />} />
      <Route path="/card1" element={<Card1 />} />
      <Route path="/card2" element={<Card2 />} />
      <Route path="/card3" element={<Card3 />} />
      <Route path="/card4" element={<Card4 />} />
      <Route path="/inventions" element={<Inventions />} />
      <Route path="/inventioncard/:id" element={<Card />} />
      <Route path="/artistinventor" element={<Artistinventor />} />
      <Route path="/whats-new" element={<Whatsnew />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/editorial" element={<Editorial />} />
      <Route path="/paystack-redirect" element={<Paystackredirect />} />

      {/* Auth0 callback route */}
      <Route path="/callback" element={<CallbackPage />} />

      {/* Protected routes */}
      <Route path="/Art" element={<ProtectedRoute><Art /></ProtectedRoute>} />
      <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path="/buy" element={<ProtectedRoute><Buy /></ProtectedRoute>} />
      <Route path="/buy/:id" element={<ProtectedRoute><Collect /></ProtectedRoute>} />
      <Route path="/art/:id" element={<ProtectedRoute><Artcard /></ProtectedRoute>} />
      <Route path="/artworks" element={<ProtectedRoute><Artworks /></ProtectedRoute>} />
      <Route path="/premium-service" element={<ProtectedRoute><Artinvent /></ProtectedRoute>} />

      {/* 404 */}
      <Route path="*" element={<h1 className="text-center text-2xl font-mono">Page Not Found</h1>} />
    </Routes>
  );
};

export default App;