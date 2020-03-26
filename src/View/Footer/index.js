import React from "react";
import { MDBCol, MDBContainer,MDBIcon,MDBModal, MDBRow,MDBBtn, MDBFooter,MDBInput,MDBModalBody,MDBModalHeader,MDBModalFooter } from "mdbreact";
import './Footer.css';
import {Modal,Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import {EnvironmentTwoTone,ScheduleTwoTone,PhoneTwoTone,MailTwoTone,FileTextTwoTone,MessageTwoTone,IdcardTwoTone} from '@ant-design/icons';
import {EnvironmentFilled,ScheduleFilled,PhoneFilled,MailFilled,FileTextFilled,MessageFilled,IdcardFilled} from '@ant-design/icons';


const url="http://194.4.58.191:5000/";


class index extends React.Component {
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

  render(){
  return (
    <div>
    <MDBFooter color="dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="gf" md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Контакты
            </h5>
            <p className="hover">
            <a  title="местоположение в 2GIS" onClick={()=>{window.open("https://2gis.kz/karaganda/firm/70000001040199047/73.084762,49.805183?floor=1&m=73.085347,49.805275/17.41/p/45/r/22.88")}}><EnvironmentFilled /> Адрес:  г. Караганда, пр. Бухар-Жырау, 49/6, офис 609, 414Б. (БЦ Казахстан) </a><br/>
            <ScheduleFilled /> График работы: ПН-ПТ: 8:00-17:00 <br/>
            <PhoneFilled /> Приемная: 8-(7212) 99-60-47<br/>
            <a title="отправить нам сообщение" href={ "mailto:"+"info_eiss@mail.ru"} ><MailFilled /> info_eiss@mail.ru </a> <br/>
            <FileTextFilled /> БИН 090440014466
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol className="gf" md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Информация
            </h5>
            <ul className="list-unstyled">
              
            <li onClick={this.handleOpen} >
            <MessageFilled /> Задать вопрос</li>

              <li>
                <Link to="/fdocs"><IdcardFilled /> Заключить договор (физическим лицам)</Link>
              </li>
              <li>
                <Link to="/udocs"><IdcardFilled /> Заключить договор (юридическим лицам)</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          
        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-3 bottom" >
        <MDBContainer fluid>
          ТОО «ЭнергоИнвестСтройСервис» &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
      
    </MDBFooter>
  
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
export default index;