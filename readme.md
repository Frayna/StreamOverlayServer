# Setting up your spotify overlay

## Security Warning :

**This server should only run on your local machine, the refresh token is accessible by the client !  
The server should never serve the client outside of localhost !**

It's meant to be used as an OBS overlay with all actions on the client, not a server back-end with front-end.  
You can create multiples overlay widgets by making folders inside the `public` folder.

### Installation

1. **Create an authentificated app on Spotify**
   - Follow the documentation at [https://developer.spotify.com/documentation/web-api/concepts/apps](https://developer.spotify.com/documentation/web-api/concepts/apps)
   - Don't forget to add `http://localhost:8080/callback` to you app redirect URIs
   - Get your credentials (client id and client secret)
2. **Get the refresh token app**
   - `cd spotifyCredentials`
   - Install the server with `npm i`
   - Edit `spotifyCredentials/config.json` with the editor of your choice
   - Add the client ID and client Secret you got on the Spotify website
   - Run the server with `npm start`
   - Go to [http://localhost:8080/](http://localhost:8080/)
   - Authentificate with your spotify account
   - Copy the refresh token display. (this token is a global accces to your spotify account, ***DO NOT SHARE***)
   - Close the server
3. **Setting up the overlay server**
   - Go to the spotify overlay folder `cd ../public/spotify`
   - Copy your credentials in the `config.js` file with the refresh token
   - Go back to the root folder `cd ../..`
   - Install the overlay delivery server `npm i`

### Running the server overlay

1. **Run the server**
   Start the server `npm start`
2. **Play a music on spotify (with any spotify client, web or desktop)**
3. **Go to** [http://localhost:8888/spotify/](http://localhost:8888/spotify/)
4. **Enjoy !**
