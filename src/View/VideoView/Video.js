import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    render () { 
      return (
        <div className='player-wrapper'>
          <Video
            url={"https://youtu.be/znj8lO9T2tQ"}
            playing={true}
            width= '100%'
            height='200px'
            
          />
        </div>
      )
    }
  }
  export default Video;