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
                <img src={url+this.state.info.main_photo} alt=""/>
            </div>
            <div className="text_offer">{ReactHtmlParser(this.state.info.text)}</div>
            {
                this.state.info.video_link ?
                    <div className="card_offer">
                        <div className='mini-player-wrapper'>
                            <div>
                                <ReactPlayer className = "mini-player"
                                    url={"https://www.youtube.com/embed/oUFJJNQGwhk"}
                                    loop = {true}
                                    playing = {false}
                                    width = {"inherit"}
                                    height = {220}
                                />
                            </div>
                        </div>
                    </div>
                : ""
            }
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oUFJJNQGwhk?loop=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        )
    }
}

export default News;
