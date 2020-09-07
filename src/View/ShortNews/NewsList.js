import React, { Component } from 'react';
import axios from 'axios';
import {MDBCard,MDBIcon,MDBCardBody,MDBCardTitle,MDBCardImage,MDBCardText} from 'mdbreact';
import {Link} from 'react-router-dom';
import Video from '../VideoView/Video';
import {MDBBtn} from 'mdbreact';
import Axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./newslist.css"
import ReactPlayer from 'react-player'
import ReactHtmlParser from 'react-html-parser';


const url="http://localhost:5000/";
const responsive = {
    GigaLargeDesktop: {
        breakpoint: { max: 4000, min: 2500 },
        items: 5,
    },
    superLargeDesktop: {
        breakpoint: { max: 2500, min: 2000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export class NewsList extends Component {
    state={
        slider_list:[]
    }

   
    
    componentDidMount(){
        Axios.get(url+"news").then(res=>{console.log(res.data); this.setState({slider_list:res.data})});
    }   
    render() {
        return(
        <div className='fff'>
        <Carousel className='content' 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}>
        {this.state.slider_list.map(newss=>{
            return(
                
                    <MDBCard className='itemd' >
                    {
                        newss.main_photo ?
                            <MDBCardImage top src={url+newss.main_photo} overlay="white-slight" hover waves alt="MDBCard image cap" />
                                :
                                newss.video_link ? 
                                <div className='mini-player-wrapper'>
                                    <div>
                                        <ReactPlayer className = "mini-player"
                                            url={newss.video_link}
                                            loop = {true}
                                            playing = {false}
                                            width = {"inherit"}
                                            height = {220}
                                        />
                                    </div>
                                </div>
                            :
                        ""
                    }
                     <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <a style={{color:"white",float:"right"}} href="#!" className="activator waves-effect waves-light mr-4">
                    
                         </a>
                        <MDBCardTitle>{newss.title.substring(0,50)}...</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                            {ReactHtmlParser(newss.text.substring(0,100))}...
                        </MDBCardText>
                        <Link to={"/news/"+newss.id} className="black-text d-flex justify-content-end">
                        <h5 className="white-text">
                            Читать больше
                        <MDBIcon icon="angle-double-right" />
                        </h5>
                        </Link>
                        </MDBCardBody>
                        </MDBCard>
            )})
            }
                     </Carousel>
                    
                    </div>
               
               
            
        )
    }
  
}

export default NewsList;

