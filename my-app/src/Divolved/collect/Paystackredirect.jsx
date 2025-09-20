
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaystackRedirect = () => {
  const [cardDetails, setCardDetails] = useState({ email: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ⚠️ Ensure there are no spaces at the end of your BASE_URL
  const BASE_URL = "https://dc0a35b64ef7.ngrok-free.app"; // replace with your ngrok url

  const total = 6000;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get('reference');

    if (reference) {
      verifyPaystackPayment(reference);
      return;
    }

    const paymentId =
      params.get('paymentId') ||
      params.get('paymentID') ||
      params.get('payment_id');

    if (paymentId) {
      navigate(`/success?paymentId=${paymentId}`);
      return;
    }

    const success = params.get('success');
    if (success === 'true') navigate('/success');
    else if (success === 'false') navigate('/failure');
  }, [location]);

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayNow = async (e) => {
    e.preventDefault();
    setError('');

    const { email } = cardDetails;
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/payments/paystack/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          amount: total,
          callback_url: 'http://localhost:5173/paystack-redirect',
        }),
      });

      const data = await res.json();

      if (res.ok && data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        setError(data.error || 'Paystack initialization failed.');
      }
    } catch (err) {
      setError('Network error, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyPaystackPayment = async (reference) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/payments/paystack/verify/${reference}`);
      const data = await res.json();

      if (res.ok && data.success) {
        navigate('/success');
      } else {
        navigate('/failure');
      }
    } catch (err) {
      navigate('/failure');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-20 h-screen flex flex-col justify-center items-center">
      <div className="bg-[#eeeeee] w-[700px] h-[300px] flex flex-col justify-center p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-bold mb-2">You are about to be redirected to a secure payment platform</h1>
        <p className="mb-4">Enter your Email below to continue</p>

        <form onSubmit={handlePayNow}>
          <div className="mb-4 px-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={cardDetails.email}
              onChange={handleCardChange}
              className="border rounded px-3 py-2 w-full mb-2"
            />
          </div>

          {error && <p className="text-red-500 text-center mb-2">{error}</p>}
          {loading && <p className="text-blue-500 text-center mb-2">Processing...</p>}

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Please wait...' : `Pay now ₦${total.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaystackRedirect;
