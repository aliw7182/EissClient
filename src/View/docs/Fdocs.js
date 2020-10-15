import React, { Component } from 'react';
import './docs.css';
import Axios from 'axios';
import { FileMarkdownOutlined,DownloadOutlined} from '@ant-design/icons';

const url = "https://api.eiss.kz/";//"http://127.0.0.1:5000/";
const F_DOC_ID = 1;

export class Fdocs extends Component {
    
    state = {
        documentList: []
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        Axios.get(url + "documents/" + F_DOC_ID).then(res => { 
            if (res.data && res.data.length > 0) {
                res.data.forEach(doc => {
                    doc.key = doc.id;
                });
            }
            this.setState({ documentList: res.data }) 
        });
    }

    onDownloadClick(record, event) {
        let doc_id = record.id;
        window.location.assign(url + "documents/download/" + doc_id ,"_blank");
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <div className="lok">
                    <h4>Перечень документов, необходимых для заключения договора для физических лиц.</h4>
                    <h5>Основные этапы заключения договора энергоснабжения.</h5>
                    <p>1. Сбор необходимых документов (Ссылка на перечень документов);</p>
                    <p>2. Подача заявки в ТОО «ЭИСС» с приложением всех собранных документов;</p>
                    <p>3. Подписание договора.</p>
                    <p>Заявка и документы представляются в офисы клиентского обслуживания ТОО «ЭИСС» либо посредством электронной почты для удобства потребителей.</p>
                    {
                        this.state.documentList ? 
                            this.state.documentList.map((doc, key) => 
                                <div>
                                    <a style={{color:"blue"}} onClick={this.onDownloadClick.bind(this, doc)}>
                                        <DownloadOutlined />  {doc.document_title}
                                    </a>
                                    <br/>
                                </div>
                            )
                        : "Загрузка"
                    }
                    <h5>Для бытовых потребителей проживающих в многоквартирных домах.</h5>
                    <p>1. Заявление на заключение договора; </p>
                    <p>2. Документ, подтверждающий право собственности (пользования) на помещение в многоквартирном доме;</p>
                    <p>3. Документ, удостоверяющий личность физического лица (копия удостоверения личности/паспорта);</p>
                    <p>4. В случае заключения договора доверенным лицом предоставляется копии доверенности и удостоверения личности/паспорта доверительного лица.</p>
                    <h5>Для граждан, проживающих в индивидуальных жилых домах (домовладениях).</h5>
                    <p>1. Заявление на заключение договора; </p>
                    <p>2. Документ, подтверждающий право собственности (пользования) на жилой дом (домовладение), гараж;</p>
                    <p>3. Документ, удостоверяющий личность физического лица (копия удостоверения личности/паспорта);</p>
                    <p>4. По вновь вводимым в эксплуатацию жилым домам обязательно наличие технических условий (копия); </p>
                    <p>5. В случае заключения договора доверенным лицом предоставляется копии доверенности и удостоверения личности/паспорта доверительного лица.</p>
                </div>
                    <img src={require('../../img/na_site3.JPG')} className="info"></img>         
            </div>
        )
        
    }
}

export default Fdocs
