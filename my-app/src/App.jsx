import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("./Components/Home"))//prod
const Davinci = lazy(() => import("./Components/Davinci"));
const Explore = lazy(() => import("./Components/Explore/Explore"));
const Shop = lazy(() => import("./Components/Shop"));
const AdminPanel = lazy(() => import("./Components/Security/AdminPanel"));
//import SignUp from "./Components/Security/SignUp";
//import Login from "./Components/Security/Login";
const Logout = lazy(() => import("./Components/Security/Logout"));
const UserProfile = lazy(() => import("./Components/Security/UserProfile"));
const ProtectedRoute = lazy(() => import("./Pages/ProtectedRoute"));
const CallbackPage = lazy(() => import("./Pages/CallbackPage"));
const Post = lazy(() => import("./Divolved/Post"));
import Crypto from "./Pages/Crypto";
const Card1 = lazy(() => import("./Divolved/Blogs/Card1"));
const Card2 = lazy(() => import("./Divolved/Blogs/Card2"));
const Card3 = lazy(() => import("./Divolved/Blogs/Card3"));
const Card4 = lazy(() => import("./Divolved/Blogs/Card4"));
const Buy = lazy(() => import("./Divolved/Buy"));
const Collect = lazy(() => import("./Divolved/collect/Collect"));
const Artcard = lazy(() => import("./Divolved/collect/Artcard"));
const Inventions = lazy(() => import("./Divolved/Inventions"));
const Card = lazy(() => import("./Divolved/collect/Card"));
const Cardo = lazy(() => import("./Divolved/collect/Cardo"));
const Artistinventor = lazy(() => import("./Divolved/Artistinventor"));
//import Artinvent from "./Divolved/Artinvent";
const Whatsnew = lazy(() => import("./Divolved/Whatsnew"));
const Photography = lazy(() => import("./Divolved/Photography"));
const Editorial = lazy(() => import("./Divolved/Editorial"));
const Artworks = lazy(() => import("./Divolved/Artworks"));
const Artworkscard = lazy(() => import("./Divolved/collect/Artworkscard"));
const Categories = lazy(() => import("./Shop/Categories/Categories"));
const Cart = lazy(() => import("./Shop/Cart/Cart"));
const Product = lazy(() => import("./Shop/Productcard/Product"));
const ProductCard = lazy(() => import("./Shop/Productcard/ProductCard"));
const Coming_soon = lazy(() => import("./Components/Waste/Coming_soon"));
const Checkout = lazy(() => import("./Shop/Cart/Checkout/Checkout"));
const Gigc = lazy(() => import("./Shop/Art/Gigc"));
//import Checkoutnow from "./Shop/Art/checkoutnow";
const View = lazy(() => import("./Pages/View"));
const Search = lazy(() => import("./Divolved/Search"));
const Inventioncollect = lazy(() => import("./Divolved/collect/Inventioncollect"));
const Artpost = lazy(() => import("./Components/Explore/Artacc/Artpost"));
const Trade = lazy(() => import("./Components/Waste/Tradeacc/Trade"));
const Paystackredirect = lazy(() => import("./Divolved/collect/Paystackredirect"));
const Success = lazy(() => import("./Shop/Cart/Success"));
const Paymentfail = lazy(() => import("./Shop/Cart/ProductList/Paymentfail"));
const Order = lazy(() => import("./Divolved/Orders/Order"));
const Posted = lazy(() => import("./Divolved/Orders/Posted"));
const CreatorProfile = lazy(() => import("./Components/CreatorProfile"));
const Messages = lazy(() => import("./Components/Messages"));
const Collectionlist = lazy(() => import("./Divolved/collect/Collectionlist"));
const PaystackRedirect2 = lazy(() => import("./Divolved/collect/Paystackredirect2"));
const Paystackdammyredirect = lazy(() => import("./Divolved/collect/Paystackdammyredirect")); //test version
const Wishlist = lazy(() => import("./Divolved/collect/Wishlist"));

//Test imports
const Blogs = lazy(() => import("../Tests/Components/Home"));
const Blog1 = lazy(() => import("../Tests/Pages/Blogs/Blog1"));
const Blog2 = lazy(() => import("../Tests/Pages/Blogs/Blog2"));
const Blog3 = lazy(() => import("../Tests/Pages/Blogs/Blog3"));
const Blog4 = lazy(() => import("../Tests/Pages/Blogs/Blog4"));
const Blog5 = lazy(() => import("../Tests/Pages/Blogs/Blog5"));


function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f3f3]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#33352e0]" />
    </div>
  )
}


const App = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // Auto-sync user to MongoDB after login/signup
  useEffect(() => {
    const syncUser = async () => {
      try {
        const token = await getAccessTokenSilently();
        await axios.post(
          "https://unix.up.railway.app/api/users/users",
          {},
          { headers: { Authorization: `Bearer ${token}` } },
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
    <div>
      <Suspense fallback={<PageLoader />}>
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
      <Route path="/failure" element={<Paymentfail />} />
      {/* <Route path="/SignUp" element={<SignUp />} /> */}
      <Route path="/logout" element={<Logout />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/Crypto" element={<Crypto />} />
      <Route path="/ComingSoon" element={<Coming_soon />} />
      <Route path="/best_art" element={<Card1 />} />
      <Route path="/top_best" element={<Card2 />} />
      <Route path="/best_inventors" element={<Card3 />} />
      <Route path="/why_choose_art_design" element={<Card4 />} />
      <Route path="/inventions" element={<Inventions />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/artistinventor" element={<Artistinventor />} />
      <Route path="/whats-new" element={<Whatsnew />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/editorial" element={<Editorial />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/artworks" element={<Artworks />} />
      <Route path="/search" element={<Search />} />
      <Route path="/creator/:username" element={<CreatorProfile />} />
      {/* <Route path="/paystack-redirect" element={<Paystackredirect />} /> */}

      {/* Auth0 callback route */}
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/admin" element={<AdminPanel />} />

       // Test routes
      <Route path="/beyond_the_bead" element={<Blog1 />} />
      <Route path="/the_identity_crisis_of_urban_kenyan_artists" element={<Blog2 />} />
      <Route path="/the_language_of_kitenge" element={<Blog3 />} />
      <Route path="/blog4" element={<Blog4 />} />
      <Route path="/blog5" element={<Blog5 />} />
      <Route path="/latest_art_blogs" element={<Blogs />} />

      {/* Protected routes */}
      <Route
        path="/Checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/post"
        element={
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/buy/:id"
        element={
          <ProtectedRoute>
            <Collect />
          </ProtectedRoute>
        }
      />
      <Route
        path="/art/:id"
        element={
          <ProtectedRoute>
            <Artcard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artworkscard/:id"
        element={
          <ProtectedRoute>
            <Artworkscard />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/premium-service" element={<ProtectedRoute><Artinvent /></ProtectedRoute>} /> */}
      <Route
        path="/invention/:id"
        element={
          <ProtectedRoute>
            <Inventioncollect />
          </ProtectedRoute>
        }
      />
      <Route
        path="/paystack-redirect"
        element={
          <ProtectedRoute>
            <Paystackredirect />
          </ProtectedRoute>
        }
      />
      <Route
        path="/paystack-redirect2"
        element={
          <ProtectedRoute>
            <PaystackRedirect2 />
          </ProtectedRoute>
        }
      />
    <Route //Not used in production.
    path="/paystack_dammy_redirect"
    element={
      <ProtectedRoute>
        <Paystackdammyredirect />
      </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventioncard/:id"
        element={
          <ProtectedRoute>
            <Card />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artworks/:id"
        element={
          <ProtectedRoute>
            <Cardo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myworks"
        element={
          <ProtectedRoute>
            <Posted />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <Collectionlist />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <h1 className="text-center text-2xl font-mono">Page Not Found</h1>
        }
      />
    </Routes>
      </Suspense>
    </div>
  );
};

export default App;
