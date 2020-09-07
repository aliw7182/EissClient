import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import "./Video.css"

class Video extends Component {
    render () { 
      return (
       
        <div className='player-wrapper'>
       <div >
          <ReactPlayer className = "player"
            url={this.props.url}
            loop = {true}
            playing = {false}
            width = {"inherit"}
          />
          </div>
        </div>
      )
    }
  }
  export default Video;