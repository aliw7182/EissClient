import React, { Component } from 'react';
import axios from 'axios';
import './ShortNews.css';



const url="http://194.4.58.191:5000/";
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
    componentDidUpdate(){
        this.refresh();
    }
    componentWillMount(){
        this.refresh();
        window.scrollTo(0,0);
    }

    render() {
      
        return (
           
            
         <div>
            <h6 className="date">{this.state.info.date}</h6>
           <div classname="title_block"> <h1 className="title_offer bold" style={{maxWidth:"70%"}}>{this.state.info.title}</h1>
            </div>
            <div classname="title_block1"> <p className="title_offer1 bold" style={{maxWidth:"70%"}}>{this.state.info.title}</p>
            </div>
            <div className="card_offer">
                <img src={url+this.state.info.main_photo} alt=""/>
            </div>
            <div  className="text_offer"> 
            <p>{this.state.info.text}</p></div>
</div>
           
        )
    }
}

export default News;
