import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

root.render(
	<Auth0Provider
	domain='dev-8vljkph5zsws7ttu.us.auth0.com'
	clientId='XQYYS8TIw6DRoqJPR6IiOWEiUPR1B75t'
    useRefreshTokens={true}
    useRefreshTokensFallback={false}
	authorizationParams={{
	redirect_uri: window.location.origin,
	}}
	>
	<App />
	</Auth0Provider>
);