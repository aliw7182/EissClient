import React, { Component } from 'react';
import './Cars.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {MDBBtn,MDBBtnGroup} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Gallery from './Gallery';


export class Legacy extends Component {
    state={
        color:"Ice Silver Metalic",
        value:"01",
        path:'icesilver',
        activeItemJustified: "1",
    }
    componentDidMount(){
        window.scrollTo(0,0)
      }
   
    render() {
        return (
            <div className="carinfo">
                <div>
                    <div className="comercial">
                        <h1>Legacy</h1>
                        <p className="topp">Его цель.</p>
                        <p className="bottomp">Помогать вам реализовать ваши.</p>
                    </div>
                    <img style={{width:"100%"}} src={require('./images/legacy/header_img01.jpg')} alt=""/>
                </div>
                <div className="text-car">
                    <h2 className="titile">Достичь больших высот.</h2>
                    <p>В самый раз. Вы узнаете это, когда почувствуете это. Это чувство, которое вы получаете от Legacy. Безупречное сочетание элегантного дизайна и технологии Subaru, спортивного и плавного вождения в стиле Legacy доставит вас туда, куда вам нужно, с комфортом и стилем, даже в долгих поездках. В конце каждого дня Legacy помогает вам обрести уверенность и мотивацию для смелого решения задач завтрашнего дня.</p>
                    <hr />
                </div>
                <h1 style={{fontWeight:600}}>от 12 790 000 тг</h1>
                <div style={{height:"430px"}}><img style={{}} className="images" src={require('./images/legacy/'+this.state.path+'/'+this.state.value+'.jpg')} alt="Forester"/></div>
                <Slider className="slid" value={this.state.value} onChange={(e)=>{if (e<10) {
                    this.setState({value:"0"+e})
                }else{this.setState({value:e})}}} style={{width:"70%"}}  min={1} max={36} />
                <h1 className="colorName fonts">{this.state.color}</h1>
                 <MDBBtnGroup className="mr-2 pickers">
                    <MDBBtn  onClick={()=>{this.setState({color:"Ice Silver Metallic",path:"icesilver"})}}  color="blue-grey">1</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Crystal White Pearl",path:"white"})}} color="white">2</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Storm Grey Metallic",path:"stormgrey"})}} color="light-blue">3</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Tungsten Metallic",path:"tungsten"})}} color="cream" >4</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Oak Brown Pearl",path:"oakbrown"})}} color="brown">5</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Dark Blue Pearl",path:"darkblue"})}} color="blue">6</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Crimson Red Pearl",path:"red"})}}  color="red">6</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Dark Grey Metallic",path:"grey"})}}  color="grey">7</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Crystal Black Silica",path:"black"})}} color="black">8</MDBBtn>

                </MDBBtnGroup>
                
                <h2 className="gradus">Вид на 360C°</h2>
                <MDBBtn onClick={()=>{window.open('https://subarufinance.kz/')}} style={{marginLeft:"70%",marginTop:"50px"}} color="elegant">Выгодное кредитование с Subaru</MDBBtn>

                <div><Gallery /></div>
            </div>
        )
    }
}

export default Legacy
