

// import React, { useState, useMemo } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState('');

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^254\d{9}$/;

//   const checkPasswordStrength = (pwd) => {
//     if (pwd.length < 8) return 'Too short';
//     const hasUpper = /[A-Z]/.test(pwd);
//     const hasLower = /[a-z]/.test(pwd);
//     const hasNumber = /\d/.test(pwd);
//     const hasSpecial = /[^A-Za-z0-9]/.test(pwd);

//     if (hasUpper && hasLower && hasNumber && hasSpecial) return 'Strong';
//     if ((hasUpper || hasLower) && hasNumber) return 'Medium';
//     return 'Weak';
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//     setError('');
//     setSuccess('');

//     if (name === 'password') {
//       setPasswordStrength(checkPasswordStrength(value));
//     }
//   };

//   const validateForm = () => {
//     if (!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword) return false;
//     if (!emailRegex.test(form.email)) return false;
//     if (!phoneRegex.test(form.phone)) return false;
//     if (form.password !== form.confirmPassword) return false;
//     if (form.password.length < 8) return false;
//     return true;
//   };

//   const allChecksPassed = useMemo(() => {
//     return (
//       form.name.trim().length > 0 &&
//       emailRegex.test(form.email) &&
//       phoneRegex.test(form.phone) &&
//       form.password.length >= 8 &&
//       /[A-Z]/.test(form.password) &&
//       /[a-z]/.test(form.password) &&
//       /\d/.test(form.password) &&
//       /[^A-Za-z0-9]/.test(form.password) &&
//       form.password === form.confirmPassword
//     );
//   }, [form]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!validateForm()) {
//       setError('Please fix the highlighted issues before submitting.');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('http://localhost:3000/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setSuccess(data.message);
//         setForm({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
//         setPasswordStrength('');
//       } else {
//         setError(data.error || 'Signup failed.');
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
//         <h2 className="text-3xl font-bold text-center text-blue-700">Create Account</h2>
//         <p className="text-center text-gray-500 text-sm">Join us and start your journey today</p>

//         <div className="space-y-4">
//           <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="input-field" required />
//           <div className="flex items-center text-xs text-gray-600">Name entered <Check condition={form.name.trim().length > 0} /></div>

//           <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="input-field" required />
//           <div className="flex items-center text-xs text-gray-600">Valid email format <Check condition={emailRegex.test(form.email)} /></div>

//           <input type="text" name="phone" placeholder="Phone (254XXXXXXXXX)" value={form.phone} onChange={handleChange} className="input-field" required />
//           <div className="flex items-center text-xs text-gray-600">Matches 254XXXXXXXXX <Check condition={phoneRegex.test(form.phone)} /></div>

//           <div>
//             <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="input-field" required />
//             {form.password && (
//               <p className={`text-xs mt-1 ${passwordStrength === 'Strong' ? 'text-green-600' : passwordStrength === 'Medium' ? 'text-yellow-600' : 'text-red-500'}`}>
//                 Strength: {passwordStrength}
//               </p>
//             )}
//             <ul className="text-xs mt-1 space-y-1 text-gray-600">
//               <li>At least 8 characters <Check condition={form.password.length >= 8} /></li>
//               <li>Contains uppercase letter <Check condition={/[A-Z]/.test(form.password)} /></li>
//               <li>Contains lowercase letter <Check condition={/[a-z]/.test(form.password)} /></li>
//               <li>Contains number <Check condition={/\d/.test(form.password)} /></li>
//               <li>Contains special character <Check condition={/[^A-Za-z0-9]/.test(form.password)} /></li>
//             </ul>
//           </div>

//           <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="input-field" required />
//           <div className="flex items-center text-xs text-gray-600">Matches password <Check condition={form.password && form.password === form.confirmPassword} /></div>
//         </div>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 
//             ${loading ? 'bg-blue-400 cursor-not-allowed' : allChecksPassed ? 'bg-green-600 hover:bg-green-700 animate-pulse' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
//         >
//           {loading ? 'Signing up...' : allChecksPassed ? 'All Checks Passed — Sign Up' : 'Sign Up'}
//         </button>

//         <p className="text-center text-sm text-gray-600">
//           Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div>
      <h2>Sign Up</h2>
      <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
        Sign Up with Auth0
      </button>
    </div>

    </>
  )
}

export default SignUp




