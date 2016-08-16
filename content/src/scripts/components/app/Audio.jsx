import React, {PropTypes} from 'react'
import _ from 'underscore'
import {Howl} from 'howler'

const muteLoadspeaker = <svg x="0px" y="0px" viewBox="0 0 46.004 46.004"><path d="M36.406,0.402c-0.976-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L19.636,12.002H9.002 c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707s0.441,0.293,0.707,0.293l10.61-0.005l13.543,12.44 c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402 c0.999-0.564,1.596-1.595,1.596-2.756V3.158C38.002,1.997,37.405,0.967,36.406,0.402z M36.002,42.845 c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L21.002,31.557v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996 l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.86-0.07,1.016,0.018 c0.362,0.205,0.579,0.584,0.579,1.015V42.845z"/></svg>
const playingLoaderspeaker = <svg x="0px" y="0px" viewBox="0 0 46.004 46.004"><path d="M29.893,0.402c-0.976-0.552-2.132-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L13.122,12.002H2.489 c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707s0.441,0.293,0.707,0.293l10.61-0.005l13.543,12.44 c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402 c0.999-0.564,1.596-1.595,1.596-2.756V3.158C31.489,1.997,30.892,0.967,29.893,0.402z M29.489,42.845 c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L14.489,31.557v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996 l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.86-0.07,1.016,0.018 c0.362,0.205,0.579,0.584,0.579,1.015V42.845z"/> <path d="M34.766,9.54c-0.532-0.151-1.085,0.152-1.238,0.684c-0.153,0.53,0.152,1.085,0.684,1.238 c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04c-0.531,0.153-0.837,0.708-0.684,1.238 c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039c5.74-1.66,9.749-6.99,9.749-12.962S40.506,11.2,34.766,9.54 z"/></svg>

const Audio = React.createClass({
	propTypes: {
		className: PropTypes.string,
		src: PropTypes.string.isRequired,
	},
	getInitialState(){
		return {
			isPlaying: false,
		}
	},
	componentDidMount() {
		// load the audio
		this._pronunciation = new Howl({
			src: [this.props.src],
			onplay: ()=>{this.setState({isPlaying: true})},
			onend: ()=>{this.setState({isPlaying: false})},
		})

		// Use native event system instead of react event system.
		this.refs.loaderSpeaker.addEventListener('click', (evt) => {
			this.handleClick()
		})
	},

	handleClick() {
		this._pronunciation.play()
	},

	render(){
		return <span className={this.props.className} onClick={this.handleClick} ref="loaderSpeaker">
			{!this.state.isPlaying?muteLoadspeaker:playingLoaderspeaker}
		</span>	
	},
})

export default Audio