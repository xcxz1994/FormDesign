import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory,Route } from 'react-router';
import AppForm from './App'

export  class Routes extends Component{
    render(){
        console.log('Routes')
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppForm}/>

            </Router>
        );
    }
}
ReactDOM.render(<Routes/>, document.getElementById('root'));