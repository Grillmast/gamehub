import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="http://dev-8vljkph5zsws7ttu.us.auth0.com/"
    clientId="XQYYS8TIw6DRoqJPR6IiOWEiUPR1B75t"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);