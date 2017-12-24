import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker} from 'antd';

export default class AppForm extends Component {
    render(){
        return(
            <DatePicker/>
        );
    }
}

ReactDOM.render(<AppForm />, document.getElementById('root'));