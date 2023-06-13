export const PlayIcon = {
	props: {
		width: String,
		height: String,
		color: String
	},
	template: `<svg :fill="color" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
	</svg>`
  }

export const PauseIcon =  {
	props: {
		width: String,
		height: String,
		color: String
	},
	template: `<svg :fill="color" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>
	</svg>`
  }

export const BackwardIcon =  {
	props: {
		width: String,
		height: String,
		color: String
	},
	template: `<svg :fill="color" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.968 24.032q0 0.832 0.576 1.408t1.44 0.608h4q0.832 0 1.408-0.608t0.608-1.408v-16.064q0-0.8-0.608-1.408t-1.408-0.608h-4q-0.832 0-1.44 0.608t-0.576 1.408v16.064zM12 16q0 0.512 0.224 0.96t0.64 0.704l12.064 8.032q0.992 0.672 2.048 0.128 0.512-0.288 0.8-0.768t0.288-1.024v-16.064q0-0.544-0.288-1.024t-0.8-0.736q-0.48-0.256-1.056-0.224t-0.992 0.32l-12.064 8.032q-0.864 0.576-0.864 1.664z"></path>
	</svg>`
  }

export const ForwardIcon =  {
	props: {
		width: String,
		height: String,
		color: String
	},
	template: `<svg :fill="color" :width="width + 'px'" :height="height + 'px'" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.968 24.032q0 0.544 0.288 1.056t0.768 0.736q0.48 0.256 1.056 0.224t0.992-0.32l12.064-8.032q0.896-0.608 0.896-1.696t-0.896-1.664l-12.064-8.032q-0.448-0.288-0.992-0.32t-1.056 0.224q-0.48 0.256-0.768 0.736t-0.288 1.024v16.064zM20.032 24.032q0 0.832 0.576 1.44t1.408 0.576h4.032q0.8 0 1.408-0.576t0.608-1.44v-16.064q0-0.8-0.608-1.408t-1.408-0.576h-4.032q-0.832 0-1.408 0.576t-0.576 1.408v16.064z"></path>
	</svg>`
  }