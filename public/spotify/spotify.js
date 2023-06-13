class Spotify {
	async connect() {
		const response = await fetch('https://accounts.spotify.com/api/token',
			{
				method: 'POST',
				headers: {
					'Authorization': 'Basic ' + window.btoa(config.spotify.client_id + ':' + config.spotify.client_secret),
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `grant_type=refresh_token&refresh_token=${config.spotify.refresh_token}`,
			})
		const data = await response.json();
		this.token = data; // ACCES TOKEN datas
		setTimeout(() => {
			this.connect();
		}, data.expires_in * 1000);
	}
	async getUserProfile(username) {
		const response = await fetch('https://api.spotify.com/v1/users/' + username,
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async getUserPlaylist(username) {
		const response = await fetch('https://api.spotify.com/v1/users/' + username + '/playlists',
			{
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async getPlaylist(id) {
		const response = await fetch('https://api.spotify.com/v1/playlists/' + id,
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async getPlaylistTracks(id) {
		const response = await fetch('https://api.spotify.com/v1/playlists/' + id + '/tracks',
			{
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async getTrack(id) {
		const response = await fetch('https://api.spotify.com/v1/tracks/' + id,
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async playTrack(id) {
		const response = await fetch('https://api.spotify.com/v1/me/player/play',
			{
				method: 'PUT',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				},
				body: '{"uris": ["spotify:track:' + id + '"]}'
			})
		// const data = await response.json();
		return response.status;
	}
	async getDevices() {
		const response = await fetch('https://api.spotify.com/v1/me/player/devices',
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}
	async getCurrentlyPlaying() {
		const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing',
			{
				method: 'GET',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		const data = await response.json();
		return data;
	}


	async pause() {
		const response = await fetch('https://api.spotify.com/v1/me/player/pause',
			{
				method: 'PUT',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		return response.status;
	}
	async play() {
		const response = await fetch('https://api.spotify.com/v1/me/player/play',
			{
				method: 'PUT',
				headers: {
					'Authorization': 'Bearer ' + this.token.access_token
				}
			})
		return response.status;
	}
	async next() {
		const response = await fetch('https://api.spotify.com/v1/me/player/next',
		{
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.token.access_token
			}
		})
		return response.status;
	}
	async prev() {
		const response = await fetch('https://api.spotify.com/v1/me/player/previous',
		{
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.token.access_token
			}
		})
		return response.status;
	}	
}