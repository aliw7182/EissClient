import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    render () { 
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            url={"https://youtu.be/znj8lO9T2tQ"}
            playing={true}
            loop = {true}
            width= 'auto'
            height='100vh'
            
          />
        </div>
      )
    }
  }
  export default Video;