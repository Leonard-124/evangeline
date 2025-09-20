



// import { useAuth0 } from "@auth0/auth0-react";
// import { useEffect } from "react";

// export default function ProtectedRoute({ children }) {
//   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       loginWithRedirect({
//         appState: { returnTo: window.location.pathname }
//       });
//     }
//   }, [isLoading, isAuthenticated, loginWithRedirect]);

//   if (isLoading) return <p>Loading...</p>;

//   return isAuthenticated ? children : null;
// }

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        appState: { returnTo: window.location.pathname }
      });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <p>Loading...</p>;

  return isAuthenticated ? children : null;
}