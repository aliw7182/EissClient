import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBIframe} from 'mdbreact';
import axios from 'axios';
import './ShortNews.css';
import ReactHtmlParser from 'react-html-parser'; 



const url="http://localhost:5000/";
export class News extends Component {

    
    state={
        info:'',
        videoId: ""
    }
  
    refresh(){
        axios.get(url+'news/'+this.props.match.params.id)
        .then(res=>{
            let videoId = this.getVideoId(res.data[0].video_link);
            console.log(this.getVideoId(res.data[0].video_link));
            this.setState({info:res.data[0], videoId });
        })
        .catch(err=>{})
        
    }
 
    componentDidMount(){
        this.refresh();
        window.YTConfig = {host: 'https://www.youtube.com'}
        window.scrollTo(0,0);
    }

    getVideoId(videoLink) {
        let videoId = "";
        if (videoLink) {
            let regExp = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
            let videoId = videoLink.match(regExp);
            if (videoId && videoId[1])
                return videoId[1];
        }
        return "";
        //<iframe width="560" height="315"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
  

    render() {
        return (    
        <div>
            <h6 className="date">{this.state.info.date}</h6>
            <div className="title_block">
                <h1 className="title_offer bold" style={{maxWidth:"70%"}}>{this.state.info.title}</h1>
            </div>
            <div className="title_block1">
                <p className="title_offer1 bold" style={{maxWidth:"70%"}}>{this.state.info.title}</p>
            </div>
            <div className="card_offer">
                <img src={url+this.state.info.main_photo} alt=""/>
            </div>
            <div className="text_offer">{ReactHtmlParser(this.state.info.text)}</div>
            {
                this.state.videoId ?
                <MDBRow>
                    <MDBCol lg="2" md="1" sm="0"></MDBCol>
                    <MDBCol lg="8" md="10" sm="12">
                        <MDBIframe src={'https://www.youtube.com/embed/' + this.state.videoId}/>
                    </MDBCol>
                    <MDBCol lg="2" md="1" sm="0"></MDBCol>
                </MDBRow>
                :
                ""
            }
        </div>
        )
    }
}

export default News;
