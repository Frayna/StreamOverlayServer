import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from './Icons.js'

export default {
	components: { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon },
	mounted() {
		this.spotify = new Spotify()
		this.spotify.connect().then(() => {
			// Event end of song actualization
			setInterval(() => {
				this.spotify.getCurrentlyPlaying().then((data) => {
					this.playingState = data
					console.log(data)
				})
			}, 1000)
		})
	},
	data() {
		return { viewerClic: '', clicked: '', playingState: null }
	},
	template: `<div>
		<div style="display:flex;width:400px;">
			<div class="terminal img-container">
				<img style="width:214px;height:214px" v-if="playingState" :src="this.playingState.item.album.images[1].url"/>
			</div>
			<div class="terminal">
				<h2 class="text">Musique</h2>
				<section class="roll-container">
					<div>
					<section class="news-message" v-for="n in 8">
						<p>{{this.playingState ? this.playingState.item.name : ''}} // </p>
					</section>
					</div>
				</section>
				<div class="dash-separator"></div>
				<h2 class="text">Artiste</h2>
				<section class="roll-container">
					<div>
						<section class="news-message" v-for="n in 8">
							<p>{{this.playingState ? this.playingState.item.artists.map(a => a.name).join(' | ') : ''}} // </p>
						</section>
					</div>
				</section>
				<div class="dash-separator"></div>
				<div style="display:flex; justify-content:center;">
					<button @click="() => this.spotify.prev()"><BackwardIcon width="26" height="30" color="rgb(0,255,0)"/></button>
					<button v-if="playingState && playingState.is_playing" @click="() => this.spotify.pause()"><PauseIcon width="26" height="30" color="white"/></button>
					<button v-else @click="() => this.spotify.play()"><PlayIcon width="26" height="30" color="white"/></button>
					<button @click="() => this.spotify.next()"><ForwardIcon width="26" height="30" color="rgb(0,255,0)"/></button>
				</div>
			</div>
			</div>
			<div v-if="playingState" :style="'background-color:#00FF00;height: 10px;width:' + playingState.progress_ms / playingState.item.duration_ms * 620 + 'px;'">
			</div>
	</div>`,
}
