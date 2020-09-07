import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import './ShortNews.css';
import ReactHtmlParser from 'react-html-parser'; 



const url="http://localhost:5000/";
export class News extends Component {

    
    state={
        info:''
      
    }
  
    refresh(){
        axios.get(url+'news/'+this.props.match.params.id)
        .then(res=>{
            this.setState({info:res.data[0]});
        })
        
        .catch(err=>{})
        
    }
 
    componentDidMount(){
        this.refresh();
        window.YTConfig = {host: 'https://www.youtube.com'}
        window.scrollTo(0,0);
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
                {this.state.info.main_photo ? 
                    <img src={url+this.state.info.main_photo} alt=""/>
                    : 
                    <div className='mini-player-wrapper'>
                        <div>
                            <ReactPlayer className = "mini-player"
                                url={this.state.info.video_link+"&origin"+url}
                                loop = {true}
                                playing = {false}
                                width = {"inherit"}
                                height = {220}
                            />
                        </div>
                    </div>
                }
            </div>
            <div className="text_offer">{ReactHtmlParser(this.state.info.text)}</div>
        </div>
        )
    }
}

export default News;
