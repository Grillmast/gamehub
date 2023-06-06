import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';

const stytch = new StytchUIClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN);

const root = createRoot(document.getElementById('root'));

root.render(
	<StytchProvider stytch={stytch}>
		<App />
	</StytchProvider>
);