import React from 'react';
import './App.css';
import NavbarContainer from './View/Navbar/Navbar';
import ModelList from "./View/ModelList/ModelList";
import SLider, { Slider } from './View/Slider/Slider';
import Footer from './View/Footer/index';
import News from './View/ShortNews/News';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Route,Switch} from 'react-router-dom';
import NewsList from './View/ShortNews/NewsList';
import Fdocs from './View/docs/Fdocs';
import Udocs from './View/docs/Udocs';
import { useLayoutEffect, useState } from 'react';
import { text } from 'body-parser';



const MainPage=()=>{

  return(
    <>
    <Slider/>
    <div class="cont"><h3 >Новости</h3></div>
    <NewsList/>
    <div class="cont1"><h3 >Наши партнеры</h3></div>
    <ModelList/>   
    </>
  )
}


class App extends React.Component{
  
  render(){    
    
  return (
    <div className="App">
        <NavbarContainer/>
        <div>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/news/:id" exact component={News}/>
            <Route path="/news_list" exact component={NewsList}/>
            <Route path='/udocs' exact component={Udocs}/>
            <Route path='/fdocs' exact component={Fdocs}/>

          </Switch>
        </div>
        <hr style={{marginTop:"70px"}}/>
        
        <Footer/>
    </div>
  );
  }
}


export default App;
