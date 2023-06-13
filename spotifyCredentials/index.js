const express = require('express'); // Express web server framework
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { generateRandomString } = require('./utils');

let stateKey = 'spotify_auth_state';

let app = express();

const config = require('./config.json');


app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

   app.get('/login', function(req, res) {

	let state = generateRandomString(16);
	res.cookie(stateKey, state);
  
	// your application requests authorization
	// console.log('State', state);
	res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${config.spotify.client_id}&scope=${encodeURIComponent('user-read-private user-read-email user-read-playback-state user-modify-playback-state')}&redirect_uri=${encodeURIComponent(config.spotify.redirect_uri)}&state=${state}`);
});

app.get('/callback', async function(req, res) {

	// your application requests refresh and access tokens
	// after checking the state parameter
  
	var code = req.query.code || null;
	var state = req.query.state || null;
	var storedState = req.cookies ? req.cookies[stateKey] : null;
  
	// console.log('code: ', code);
	// console.log('state: ', state);
	// console.log('storedState: ', storedState);
	if (state === null || state !== storedState) {
	  res.redirect('/#' +'?error=' + 'state_mismatch');
	} else {
	  res.clearCookie(stateKey);

	  const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
		  'Authorization': 'Basic ' + Buffer.from(config.spotify.client_id + ':' + config.spotify.client_secret, 'utf-8').toString('base64'),
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `code=${code}&redirect_uri=${encodeURIComponent(config.spotify.redirect_uri)}&grant_type=authorization_code`,
	  })
		const body = await response.json()

		var access_token = body.access_token,
			refresh_token = body.refresh_token;
  
		const bodyMe = await fetch('https://api.spotify.com/v1/me', {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + access_token,
				'Content-Type': 'application/json',
			},
		  })
		const bodyMeJson = await bodyMe.json()  
		  // we can also pass the token to the browser to make requests from there
		  res.redirect('/' + `?access_token=${access_token}&refresh_token=${refresh_token}&user_id=${bodyMeJson.id}`);
	}
  });
  
  app.get('/refresh_token', async function(req, res) {
  
	// requesting access token from refresh token
	var refresh_token = req.query.refresh_token;
	// console.log(Buffer.from(config.spotify.client_id + ':' + config.spotify.client_secret, 'utf-8').toString('base64'))
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
		  'Authorization': 'Basic ' + Buffer.from(config.spotify.client_id + ':' + config.spotify.client_secret, 'utf-8').toString('base64'),
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
	  })
	const body = await response.json()
	const access_token = body.access_token;
		res.send({
		  'access_token': access_token
		});
});
  
  console.log('Listening on 8080');
  app.listen(8080,'localhost');