import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker,Row, Col,Card,Tag,Select,Icon,Checkbox,Table} from 'antd';
import moment from 'moment';
const columns = [{
    title: '员工档案',
    dataIndex: 'Employeefiles',

}, {
    title: '工号',
    dataIndex: 'Jobnumber',

}, {
    title: '员工姓名',
    dataIndex: 'name',

},{
    title: '部门名称',
    dataIndex: 'Departmentname',

},
    {
        title: '班种名称',
        dataIndex: 'Nameofclass',

    },
];
const formatof=moment().format("MMM Do YY")
const rowSelection = {

    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
};
export default class App extends Component {
    constructor(props) {

        super(props);
        this.state = {
           starttime:'',
            endtime:''
        };
    }
    // CountDate(startTime, endTime,diffType){
    //     let _this=this;
    //     startTime=_this.state.starttime;
    //     endTime=_this.state.endtime;
    //     //startTime = startTime.toString.replace(/\-/g, "/");
    //     //endTime = endTime.toString.replace(/\-/g, "/");
    //     diffType = diffType.toLowerCase();
    //     alert(enddate-startdate);
    //     var divNum =1;
    //     switch (diffType) {
    //         case"second":
    //             divNum =1000;
    //             break;
    //         case"minute":
    //             divNum =1000*60;
    //             break;
    //         case"hour":
    //             divNum =1000*3600;
    //             break;
    //         case"day":
    //             divNum =1000*3600*24;
    //             break;
    //         default:
    //             break;
    //     }
    //     alert((endTime-startTime)/parseInt(divNum));
    // }
    handleChange1(starttime1) {
        this.setState({starttime:starttime1});
        alert(starttime1)
    }
    handleChange2(endtime1) {

        this.setState({endtime:endtime1});
        alert(endtime1)
    }

   render(){
       var items = [];
       var DateData="成立";
       for (var i = 0; i < 10; i++) {
           items.push(<li style={{marginTop:-2}}>{DateData}</li>);
       }
        return (
            <div>
                <h1>排班表</h1>
                <hr /><br />
                <Row>//1382402339
                    <Col span={8} style={{marginRight:0}}>
                        <Card title="第一步：选择日期范围" bordered={false} style={{ width: 300 }}>

                            <Tag color="#108ee9">开始日期</Tag><DatePicker onChange={value => this.handleChange1(value)} format={formatof}/>


                            <Tag color="#108ee9">结束日期</Tag><DatePicker onChange={value => this.handleChange2(value)} format={formatof}/>
                            <p ><Icon type="caret-down"  />下一步</p>
                        </Card>
                        <Card title="第二步：选择排班人员" bordered={false} style={{ width: 300 }}>

                            <Tag color="#108ee9">部门名称</Tag>
                            <Select showSearch style={{ width: 150 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>


                            <Tag color="#108ee9">工种名称</Tag>
                            <Select showSearch style={{ width: 150 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <Tag color="#108ee9" style={{marginRight:30}}>工号</Tag>
                            <Select showSearch style={{ width: 150 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <Tag color="#108ee9">员工姓名</Tag>
                            <Select showSearch style={{ width: 150 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            <p> <Icon type="search" />高级查询<Icon type="caret-up" />上一步<Icon type="caret-down" />下一步</p>
                        </Card>
                        <Card title="第三步：设定工作班次" bordered={false} style={{ width: 300 }}>
                            <Checkbox >方法一:自动排班</Checkbox><br/>
                            <Checkbox >方法二:手动排班</Checkbox><br/>
                            <Tag color="#108ee9">开始日期</Tag><DatePicker /><br/>
                            <Tag color="#108ee9">结束日期</Tag><DatePicker /><br/>
                            <Tag color="#108ee9">班次个数</Tag>

                            <Col span={20}>
                                <Select showSearch style={{ width: 150 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 150 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 150 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 150 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Select showSearch style={{ width: 50 }} defaultValue="1">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 50 }} defaultValue="1" >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 50 }} defaultValue="1">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 50 }} defaultValue="1">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Select showSearch style={{ width: 50 }} defaultValue="1">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Col>
                            <Checkbox >忽略其他节假日</Checkbox><br/>
                        </Card>
                    </Col>
                    <Col span={8} style={{marginLeft:-110}}>
                        <Table rowSelection={rowSelection} columns={columns} style={{width:500}}/>
                    </Col>
                    <Col span={8} style={{marginLeft:68}}>
                        <ul class="time-horizontal">
                            {items}
                        </ul>
                        <ul class="time-horizontal" style={{marginTop:0}}>
                            {items}
                        </ul>
                    </Col>
                </Row>

            </div>
        );
    }

}
var timeStyle={

}
ReactDOM.render(<App />, document.getElementById('root'));
