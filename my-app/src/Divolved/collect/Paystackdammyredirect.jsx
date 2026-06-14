
import React , {useEffect, useState}from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



const Paystackdammyredirect = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [total, setTotal] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [artDetails, setArtDetails] = useState(null)

  const navigate = useNavigate();
  const location = useLocation();
  const auth0 = useAuth0?.() || {}
  const { user, getAccessTokenSilently } = auth0;

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const reference = params.getAll("reference") //mode1
    const id = params.getAll("id") //mode2
    const totalParam = params.getAll("total") //mode3

    if (reference) { //verify first
      verifyPaystackPayment(reference);
      return;
    }

    const paymentId = 
    params.getAll("paymentId") || params.getAll("paymentID") || params.getAll("payment_id"); //mode4

      if(paymentId) {
    navigate(`/success?paymentId=${paymentId}`);
    return;
  }

  const success = params.get("success") ///getall
  if (success === "true") {navigate("/success"); return; }
  if (success === "false") {navigate("/failure"); return; }

  if (totalParam) {
    const parsed = parseFloat(totalParam);
    if(!isNaN(parsed)) {
      const base = parseFloat((parsed / 1.05).toFixed(2));
      setItemPrice(base);
      setTotal(parsed);
      if (user?.email) setEmail(user.email) //automatically sets
    }
    try{
      const itemsParam = params.getAll("items") //mode5
      if(itemsParam) setCartItems(JSON.parse(decodeURIComponent(itemsParam)))
    } catch (err) {
        setError("Could not read cart items. try again?")
    }
    return;
  } 
  if (id) fetchArtPrice(id); //</single-artwork buy
  },[location.search]) //here

  const fetchArtPrice = async (id) => {
    try{
      const res = await fetch(`${BASE_URL}/api/art/${id}`);// we'll get all ids, or get data directly from cart</>
      if(!res.ok) throw new Error(`Error fetching art: ${res.status}`);
      const data = await res.json();
      setArtDetails(data)
      if (user?.email) setEmail(user.email); //prefilled email
    }catch (err) {
      setError(err.message);
    }
  };

  const handlePayNow = async(e) =>{
    e.preventDefault();
    setError("");
    
    if(!email) { setError("Please enter your email."); return;}
    if(!total) {setError("Unable to fetch amount. Try again?"); return; }

    setLoading(true) //</>
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE}
      });

      const res = await fetch(`${BASE_URL}/api/payments/paystack/v1/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          amount: total,
          //Single artwork flow for paystack
          ...(artDetails ? {artId: artDetails._id, quantity: 1}: {}),//wd
          ...(cartItems.length > 0 ? {items: cartItems} : {}),//wd
        }),
      });

      const data = await res.json();
      if(res.ok && data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        setError(data.error || "Paystack initialization failed.");
      }
    }catch (err) {
      console.error("Payment initialization error:", err);
      setError("Network error. Try again?");
    } finally {
      setLoading(false)
    }
  };

  const verifyPaystackPayment = async(reference) => {
    setVerifying(true);
    try {
      const res = await fetch(
        `${BASE_URL}/api/payments/paystack/v1/verify/${reference}`
      );
      const data = await  res.json();
      navigate(res.ok && data.success ? '/success' : '/failure');
    }catch {
      navigate("/failure");
    }finally{
      setVerifying(false)
    }
  };

  if (verifying) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#eaece7] gap-4'>
        <style>{fonts}</style>
        <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
          key={i}
          className='w-2 h-2 rounded-full bg-neutral-800 animate-bounce'
          style={{animationDelay: `${i * 0.15}s`}}
          />
        ))}
        </div>
        <p className='font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-400'>
          Verifying payment...
        </p>
      </div>
    );
  }
  const fee = itemPrice ? parseFloat((0.05 * itemPrice).toFixed(2)) : null;

  return (
    <>
    <style>{fonts + animations}</style>
    <div className='min-h-screen flex items-center justify-center bg-[#fafaf8] px-4 py-16'>
      <div className='w-full max-w-md fade-up'>
        {/*Header*/}
        <div className="text-center mb-10">
          <p className='font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-3'>Checkout</p>
          <h1 className='text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 mb-4'>
            style={{fontFamily: "'Cormorant Garamont', Georgia, serif"}}
            Secure Payment
          </h1>
          <div className='w-8 h-px bg-neutral-800 mx-auto mb-4'>
            <p className='font-mono text-[11px] tracking-widest text-neutral-400 uppercase'>Powered by Paystack</p>
          </div>
          {/*Art Preview*/}
          {artDetails && (
            <div className='flex gap-4 items-center border-neutral-100 bg-white p-4 mb-8'>
              <div className="w-20 h-20 flex-shrink overflow-hidden bg-neutral-100">
                <img
                src={artDetails.image}
                alt={artDetails.name}
                className='w-full h-full object-cover'
                />
              </div>
              <div className='flex-1 min-w-0'>
                <p className="text-base font-medium text-neutral-900 truncate"
                style={{fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem"}}>
                  {artDetails.name}
                </p>
                {(artDetails.author || artDetails.inventor) && (
                  <p className='font-mono text-[10px] text-neutral-400 mt-0.5 italic'>
                    {artDetails.author ? `by ${artDetails.author}`: `Inventor: ${artDetails.inventor}`}
                  </p>
                )}
                <p className='font-mono text-[10px] tracking-widest uppercase text-neutral mt-1'>
                  {artDetails.type || "Artwork"}
                </p>
              </div>
            </div>
          )}
          <div className='bg-white border-neutral-100 p-6 space-y-6'>
            <div className='flex flex-col gap-1.5'>
              <label className='font-mono text-[9px] tracking-[0.2em] uppercase text-neutral-400'>Email address</label>
              <input
              type='email'
              name="email"
              placeholder='your@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-neutral-200 bg-[#fafaf8] px-4 py-4 text-sm text-neutral-900 outline-none focus:border-neutral-800 transition-colors font-mono placeholder:text-neutral-300'
              required
              />
            </div>
            {total && (
              <div className='border-t border-neutral-100 pt-5 space-y-2'>
                <p className='font-mono text-mono text-[9px] tracking-[0.2em]uppercase text-neutral-400 mb-3'>Order summary
                </p>
                <div className="flex justify-between font-mono text-xs text-neutral-500">
                  <span>Item price</span>
                  <span>KSH {itemPrice?.toLocaleString()}</span>
                </div>
              <div className="flex justify-between font-mono text-xs text-neutral-400">
                  <span>Platform fee (5%)</span>
                  <span>KSH {fee?.toLocaleString()}</span>
              </div>
                <div className='w-full h-px bg-neutral-100 my-2'>
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-600">Total</span>
                    <span className="text-xl font-medium text-neutral-900"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >KSH {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <p className="font-mono text-[10px] tracking-widest text-red-400 uppercase text-center">{error}</p>
            )}
            <button
            onClick={handlePayNow}
            disabled={loading || !total}
            className={`w-full py-4 font-mono text-[10px] tracking-[0.18em] uppercase transition-all duration-150 active:scale-[0.98] ${loading || !total ? "bg-neutral-200 text-neutral-400 cursor-not-allowed" : "bg-neutral-900 text-white hover:bg-neutral-700 cursor-pointer"}`}
            >
              {loading ? "Redirecting..." : total ? `Pay KSH ${total.toLocaleString()}` : "Fetching amount..."}
            </button>
          </div>
          <p className="font-mono text-[9px] tracking-widest text-neutral-300 uppercase text-center mt-6">Your payment is secured by Paystack</p>
        </div>
      </div>
    </div>
    </>
  )
};

const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@300;400&display=swap');
`;

const animations = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.5s ease both; }
`;

export default Paystackdammyredirect;

// const user: {  //User's payload
//     [key: string]: any;
//     name?: string | undefined;
//     given_name?: string | undefined;
//     family_name?: string | undefined;
//     middle_name?: string | undefined;
//     nickname?: string | undefined;
//     preferred_username?: string | undefined;
//     profile?: string | undefined;
//     picture?: string | undefined;
//     website?: string | undefined;
//     email?: string | undefined;
//     email_verified?: boolean | undefined;
//     gender?: string | undefined;
//     birthdate?: string | undefined;
//     zoneinfo?: string | undefined;
//     locale?: string | undefined;
//     phone_number?: string | undefined;
//     phone_number_verified?: boolean | undefined;
//     address?: string | undefined;
//     updated_at?: string | undefined;
//     sub?: string | undefined;
// }