// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const emailRegex = /^\S+@\S+\.\S+$/;

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError('');
//     setSuccess('');
//   };

//   const validateForm = () => {
//     if (!form.email || !form.password) {
//       setError('Email and password are required.');
//       return false;
//     }
//     if (!emailRegex.test(form.email)) {
//       setError('Invalid email format.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('http://localhost:3000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setSuccess(data.message);
//         localStorage.setItem('token', data.token); // Save JWT for later use
//         setForm({ email: '', password: '' });
//       } else {
//         setError(data.error || 'Login failed.');
//       }
//     } catch {
//       setError('Server error.');
//     }
//     setLoading(false);
//   };

//   const Check = ({ condition }) => (
//     <span className={`ml-1 ${condition ? 'text-green-600' : 'text-red-500'}`}>
//       {condition ? '✅' : '❌'}
//     </span>
//   );

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-5 animate-fadeIn"
//       >
//         <h2 className="text-3xl font-bold text-center text-blue-700">Welcome Back</h2>
//         <p className="text-center text-gray-500 text-sm">Log in to continue</p>

//         <div className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//             className="input-field"
//             required
//           />
//           <div className="flex items-center text-xs text-gray-600">
//             Valid email format <Check condition={emailRegex.test(form.email)} />
//           </div>

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="input-field"
//             required
//           />
//           <div className="flex items-center text-xs text-gray-600">
//             Password entered <Check condition={form.password.length > 0} />
//           </div>
//         </div>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
//             loading
//               ? 'bg-blue-400 cursor-not-allowed'
//               : emailRegex.test(form.email) && form.password
//               ? 'bg-green-600 hover:bg-green-700 animate-pulse'
//               : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
//           }`}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>

//         <p className="text-center text-sm text-gray-600">
//           Don’t have an account?{' '}
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div>
      <h2>Login</h2>
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>

    </>
  )
}

export default Login




