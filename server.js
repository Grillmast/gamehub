const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { auth } = require('express-oauth2-jwt-bearer');
var request = require('request');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const jwtCheck = auth({
// 	audience: 'https://gamehubapi',
// 	issuerBaseURL: 'https://dev-8vljkph5zsws7ttu.us.auth0.com/',
// 	tokenSigningAlg: 'RS256',
// });

// enforce on all endpoints
//app.use(jwtCheck);

app.use(express.static(path.join(__dirname, './build')));

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.join(__dirname, './')));
// }

app.get('/hi', (req, res) => {
	res.json({ message: 'Hello' });
});
app.get('/authorized', function (req, res) {
	res.send('Secured Resource');
});

// app.get('/auth', function (req, res) {
    // Once user logged in via OpenAuth, you call this route and save the access token
    // The access token allows all the gamehub endpoints to go through.
    // But don't forget you need to use the access token for each endpoint <-- __
app.post('/auth', function (req, res) {

    //req.body should somehow be able to pull up that the user successfully logged in through OpenAuth
    // Maybe from the URL you would fetch inside React? You'd use useEffect, and fetch inside useEffect,
    // and fetch would call POST /auth with the body proving that the user successfully logged in through OpenAuth

    // Then you can grab a bearer access token from below code and it would be saved to session or jwebtoken
    // For all future requests from Fetch, you'd use that exact access token
	var options = {
		method: 'POST',
		url: 'https://dev-8vljkph5zsws7ttu.us.auth0.com/oauth/token',
		headers: { 'content-type': 'application/json' },
		body: '{"client_id":"XQYYS8TIw6DRoqJPR6IiOWEiUPR1B75t","client_secret":"mzYQ_P0Bz3LLhmStrZD1FsjuvS1qI_RhD6VIt2a9tF7jmFG0Q9aoKkBLC6zZJkLe","audience":"https://gamehubapi/","grant_type":"client_credentials"}',
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

        // Bearer access token. Save to Session or jwebtoken. So that you can pass the access token for all calls
        // Guess: session.accessToken = body.access_token;
        // Probably requirement is jwebtoken
		console.log(body);
	});
});
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async () => {
// 	await server.start();
// 	server.applyMiddleware({ app });

// 	db.once('open', () => {
// 		app.listen(PORT, () => {
// 			console.log(`API server running on port ${PORT}!`);
// 			console.log(
// 				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
// 			);
// 		});
// 	});
// };

app.listen(PORT, () => {
	console.log(`API server running on port ${PORT}!`);
});

// Call the async function to start the server
// startApolloServer();
