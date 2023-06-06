import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';
import React from 'react';

const config = {
	emailMagicLinksOptions: {
		loginExpirationMinutes: 30,
		loginRedirectURL: 'localhost:3000',
		signupExpirationMinutes: 30,
		signupRedirectURL: 'localhost:3000',
	},
	products: [Products.emailMagicLinks],
};

const Login = () => {
	return <StytchLogin config={config} />;
};

export default Login;
