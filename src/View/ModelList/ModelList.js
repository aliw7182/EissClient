import React, { Component } from 'react';
import './ModelList.css';

export class ModelList extends Component {
   
    state={
        cars:[
            
            {
                path:"https://goszakup.gov.kz/",
                photo:"./modelsIcon/goszakup.png",
                
            },
            {
                path:"https://billing.kegoc.kz/apps_ecp/ ",
                photo:"./modelsIcon/kegos_billing.png",
                
            },
            {
                path:"https://www.samruk-energy.kz/ru/",
                photo:"./modelsIcon/samrukenergy.png",
            
            },
           
            {
                path:"https://www.korem.kz/",
                photo:"./modelsIcon/korem.png",
            
            },
            {
                path:"https://www.kegoc.kz/ru",
                photo:"./modelsIcon/kegos.png",
            
            },
           {
                path:"https://rfc.kegoc.kz/",
                photo:"./modelsIcon/fincentr.png",
                
            }
           
        ]
    

    }



    render() {
        return (
            <div className='block'>
                <div className="model-list">
                    {this.state.cars.map(car=>{
                        return(
                        <div className="model">
                            <span id="image" onClick={()=>{window.open(car.path)}}><img src={require(`${car.photo}`)} alt={car.name}/></span>
                         
                            </div>
                            )
                    })}
                </div>
            </div>
        )
    }
}

  
  
  

export default ModelList;
