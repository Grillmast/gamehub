import React from "react";
import { Products } from '@stytch/vanilla-js';
import { StytchLogin } from '@stytch/react';

const config = {
    emailMagicLinksOptions: {
        loginExpirationMinutes: 30,
        loginRedirectURL: 'http://localhost:3000',
        signupExpirationMinutes: 30,
        signupRedirectURL: 'http://localhost:3000',
    },
    products: [Products.emailMagicLinks],
};

const Login = () => {
    return (
        <StytchLogin
            
        />
    );
}

export default Login;
        