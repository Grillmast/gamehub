import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import "../profile.css";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    // Fetch additional user metadata or perform other actions
    // You can use the getAccessTokenSilently() function to make authenticated API calls
    const fetchUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        // Perform authenticated API call or fetch additional user information
        // Example: const response = await fetch('/api/user', {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
        // const data = await response.json();
        // setUserMetadata(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchUserMetadata();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    isAuthenticated && (
      <div className="container">
        <img src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2>
        <p>Email: {user.email}</p> */}
        {/* Render additional user metadata */}
        {userMetadata && (
          <>
            <h3>User Metadata</h3>
            <p>Some additional information: {userMetadata.additionalInfo}</p>
          </>
        )}
      </div>
    )
  );
};

export default Profile;
