


// import React, { useEffect, useState } from 'react';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     fetch('http://localhost:3000/api/auth/profile', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.error) setError(data.error);
//         else setUser(data.user);
//       })
//       .catch(() => setError('Failed to load profile.'));
//   }, []);

//   if (error) return <div className="mt-20 text-center text-red-500">{error}</div>;
//   if (!user) return <div className="mt-20 text-center">Loading...</div>;

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Verified:</strong> {user.isVerified ? 'Yes' : 'No'}</p>
//       <a href="/logout" className="block mt-6 text-blue-600 underline text-center">Logout</a>
//     </div>
//   );
// };

// export default UserProfile;
/////////////////////////////////////////////////////////////



// import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
// import Navbar from "../../Pages/Navbar";
// import PaystackButton from "../../Divolved/PaystackButton";

// const UserProfile = () => {
//   const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await getAccessTokenSilently();
//         const res = await axios.get("http://localhost:3000/api/users/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };

//     if (isAuthenticated) fetchProfile();
//   }, [isAuthenticated, getAccessTokenSilently]);

//   if (!isAuthenticated) return <p className="text-center mt-10">Please log in</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Welcome to Unix</h2>
//         <p>
//           <strong>Username:</strong> {profile?.username || user.nickname}
//         </p>
//         <p>
//           <strong>Email:</strong> {profile?.email || user.email}
//         </p>
//       </div>

//       <div className="max-w-md mx-auto mt-6 p-6 bg-gray-50 rounded shadow text-center">
//         <p className="mb-4">
//           {`Hello ${user.nickname}, subscribe with as low as $2 to continue and post your Arts.
//           Press the button below to continue.`}
//         </p>
//         <PaystackButton user={user} />
//       </div>
//     </>
//   );
// };

// export default UserProfile;
//////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Navbar from "../../Pages/Navbar";
import PaystackButton from "../../Divolved/PaystackButton";

const UserProfile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const syncAndFetchProfile = async () => {
      try {
        const token = await getAccessTokenSilently();

        // 🔹 1. Sync user with backend (create or update in DB)
        await axios.post(
          "http://localhost:3000/api/users/sync",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // 🔹 2. Fetch profile after sync
        const res = await axios.get("http://localhost:3000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(res.data);
      } catch (err) {
        console.error("❌ Error syncing/fetching profile:", err);
      }
    };

    if (isAuthenticated) syncAndFetchProfile();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <p className="text-center mt-10">Please log in</p>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Welcome to Unix</h2>
        <p>
          <strong>Username:</strong> {profile?.username || user.nickname}
        </p>
        <p>
          <strong>Email:</strong> {profile?.email || user.email}
        </p>
      </div>

      <div className="max-w-md mx-auto mt-6 p-6 bg-gray-50 rounded shadow text-center">
        <p className="mb-4">
          {`Hello ${user.nickname}, subscribe with as low as $2 to continue and post your Arts.
          Press the button below to continue.`}
        </p>
        <PaystackButton user={user} />
      </div>
    </>
  );
};

export default UserProfile;
