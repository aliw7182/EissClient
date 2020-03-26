import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import {MDBBtn} from 'mdbreact';
import Axios from 'axios';
import './ss.css';

const url="http://194.4.58.191:5000/";
export class Slider extends Component {
    state={
        slider_list:[]
    }

    componentWillMount(){
        Axios.get(url+"slider").then(res=>{this.setState({slider_list:res.data})});
    }
render() {
        return (
            <div className>
                <Carousel>
                    {this.state.slider_list.map(slider=>{
                        return(
                        <Carousel.Item className="item" style={{height:"650px"}} >
                            <img
                            className="d-block w-100 im"
                            src={url+slider.image_path}
                            alt={slider.image_path}
                            />
                        </Carousel.Item>   
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default Slider
