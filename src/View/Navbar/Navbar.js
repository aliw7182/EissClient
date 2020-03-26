import React, { Component } from 'react';
import {MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle,MDBInput} from 'mdbreact';
import {Modal,Button} from 'react-bootstrap';
import {Nav,Navbar,NavDropdown,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {message} from 'antd';

import { MDBContainer,MDBAlert, MDBRow, MDBCol, MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter, MDBIcon,MDBBtn } from
"mdbreact";
import axios from 'axios';
import './navbar.css';

const url="http://194.4.58.191:5000/";
export class NavbarContainer extends Component {
    state={
        showNapisat:false,
        name_napisat:"",
        phone_napisat:"",
        email_napistal:"",
        message_napisat:"",
        show:false,
        showConditions:false
    }
    handleClose=()=>{
        this.setState({showNapisat:false});
        this.setState({phone_napisat:''});
        this.setState({message_napisat:''});
        this.setState({name_napisat:''});
        this.setState({email_napistal:''});
    }
     
    handleOpen=()=>{
        this.setState({showNapisat:true});
        this.setState({phone_napisat:''});
        this.setState({message_napisat:''});
        this.setState({name_napisat:''});
        this.setState({email_napistal:''});
    }

    render() {
        return (
            <div>
                
                    <Navbar collapseOnSelect expand="lg" className="nav2">
                    <Navbar.Brand className="subarubrand" >
                        <Link exact to="/" >
                        <img  class="logo"src={require('../../img/logo.png')}  alt="EISS"/> 
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="nav-resp justify-content-end">
                        <Nav.Link className="navlinks mr-sm-4"><Link exact to="/" style={{color:"inherit"}}>Главная</Link></Nav.Link>
                        <Nav.Link className="navlinks" onClick={this.handleOpen} >Задать вопрос</Nav.Link>
                        <Nav.Link className="navlinks"><Link to="/fdocs" style={{color:"inherit"}}> Договор для физических лиц</Link></Nav.Link>
                        <Nav.Link className="navlinks"><Link to="/udocs" style={{color:"inherit"}}> Договор для юридических лиц</Link></Nav.Link>
</Nav>
                    </Navbar.Collapse>  
                </Navbar>

                <Modal show={this.state.showNapisat} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Написать нам</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <MDBInput required onChange={(e)=>{this.setState({name_napisat:e.target.value})}} icon="user" label="ФИО"/>
                <MDBInput  required onChange={(e)=>{this.setState({phone_napisat:e.target.value})}} icon="phone" hint="+7(_ _ _)-_ _ _-_ _-_ _"/>
                <MDBInput  required onChange={(e)=>{this.setState({email_napistal:e.target.value})}}
                            label="E-mail адрес"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                <MDBInput onChange={(e)=>{this.setState({message_napisat:e.target.value})}} icon="comment" label="Ваше сообщение" type="textarea" outline/>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="white" onClick={this.handleClose}>
                    Закрыть
                </Button>
                <Button variant="elegant" onClick={()=>{
                    axios.post(url+"voprsy",{name:this.state.name_napisat,phone_number:this.state.phone_napisat,
                    email:this.state.email_napistal,message:this.state.message_napisat}).then(res=>{
                        message.success('Ваше сообщение отправлено');
                        this.handleClose();
                        

                    })
                }}>
                    Отправить
                </Button>
                </Modal.Footer>
                </Modal>
 </div>
        )
    }
}

export default NavbarContainer;
