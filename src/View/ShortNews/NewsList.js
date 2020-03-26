import React, { Component } from 'react';
import axios from 'axios';
import {MDBCard,MDBIcon,MDBCardBody,MDBCardTitle,MDBCardImage,MDBCardText} from 'mdbreact';
import {Link} from 'react-router-dom';
import {MDBBtn} from 'mdbreact';
import Axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./newslist.css"


const url="http://194.4.58.191:5000/";
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
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
        Axios.get(url+"news").then(res=>{this.setState({slider_list:res.data})});
    }   
    render() {
        return(
        <div className='fff'>
        <Carousel className='content' responsive={responsive}>
        {this.state.slider_list.map(newss=>{
            return(
                
                    <MDBCard className='itemd' >
                    <MDBCardImage top src={url+newss.main_photo} overlay="white-slight"
                        hover waves alt="MDBCard image cap" />
                     <MDBCardBody className="elegant-color white-text rounded-bottom">
                      <a style={{color:"white",float:"right"}} href="#!" className="activator waves-effect waves-light mr-4">
                    
                         </a>
                        <MDBCardTitle>{newss.title.substring(0,50)}...</MDBCardTitle>
                        <hr className="hr-light" />
                        <MDBCardText className="white-text">
                         {newss.text.substring(0,100)}...
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

