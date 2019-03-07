import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Postage from "../postage";
import Download from "../download";
import Concatus from "../concatus";

export default class Layout extends Component{
    render(){
        return(
            <div className='layout'>
                <Header/>
                <div className='body'>
                    <Switch>
                        <Route exact path='/' component={Postage}/>
                        <Route path='/postage' component={Postage} />
                        <Route path='/download' component={Download} />
                        <Route path='/concatus' component={Concatus} />
                    </Switch>
                    <Footer/>
                </div>
            </div>
        )
    }
}